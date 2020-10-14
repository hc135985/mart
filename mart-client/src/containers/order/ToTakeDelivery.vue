<template>
    <div>
        <h2>   
            <van-icon name="share-o" 
            class='del' 
            @click="$router.history.go('-1')" />
            待配送
       </h2>
       <ul>
          <li v-for="totake in totakeList" :key="totake.oid+'oblig'">
            <p>总数 ：{{totake.total}}--总价:{{totake.summary}}
              <span @click="obliga(totake)">退货</span>
            </p>
            <div class="product">
               <dl v-for="productItem in totake.list"
                :key="productItem.pid + 'totake'">
                <dt>
                        <img :src='productItem.imgUrl' />
                </dt>
                <dd>
                    <h3>{{productItem.pname}}</h3>
                    <p>现价:{{productItem.sale_price}};
                        数量:{{productItem.count}}
                    </p>
                 </dd>
               </dl>
            </div>
          </li>
       </ul>
        <div v-show="totakeList.length === 0 " class="show">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600148742815&di=a28319130fdda24bfbd0b57f2b927e5e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0ccc010d26e3ae23a695e92a6a6ec9647bdf43bcb1b9-71vuYD_fw658" alt="">
          <p>暂时没有商品等待配送熬</p>
          <button @click="$router.push('/')">去逛逛</button>     
       </div>
    </div>
</template>

<script>
import { _getOrderList, _updataOrder } from '@/api/order'
import { _productDefilt } from '@/api/home'
import { _getUserIdByToken } from '@/api/user'
import { Notify, Dialog } from 'vant'
export default {
  data() {
    return {
      totakeList: []
    }
  },
  methods: {
    async getUserIdByToken() {
      let result = await _getUserIdByToken()
      this.getOrderList(result.data.uid)
    },
    async getOrderList(uid) {
      let result = await _getOrderList({ uid, status: 2 })
      if (result.data.code) {
        this.totakeList = result.data.result
        this.totakeList.forEach(totakeItem => {
          let arr = JSON.parse(totakeItem['list'])
          let shopList = []
          arr.forEach(async shopItem => {
            let shopResult = await _productDefilt(shopItem.pid)
            shopResult.data.result[0].count = shopItem.count
            shopList.push(shopResult.data.result[0])
          })
          totakeItem['list'] = shopList
        })
      } else {
        this.totakeList = []
      }
    },
    async obliga(item) {
      let ite = JSON.parse(JSON.stringify(item))
      Dialog.confirm({
        title: '退货',
        message: '确定要退货吗'
      }).then(async () => {
        ite.status = 4
        let data = []
        ite.list.forEach(e => {
          let it = {
            pid: e.pid,
            count: e.count
          }
          data.push(it)
        })
        ite.list = JSON.stringify(data)
        let result = await _updataOrder(ite)
        if (result.data.code) {
          Notify({
            type: 'success',
            message: '退货成功',
            duration: 1000,
            onClose: () => {
              this.getUserIdByToken()
            }
          })
        }
      })
    }
  },
  created() {
    this.getUserIdByToken()
  }
}
</script>

<style lang="scss" scoped>
.del {
  font-size: 20px;
  position: fixed;
  left: 10px;
  top: 12px;
  z-index: 5;
  color: rgb(163, 41, 191);
}
h2 {
  text-align: center;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #ccc;
}
li {
  width: 100%;
  height: 230px;
  border-bottom: 1px solid #ccc;
  > p {
    padding-left: 10px;
    span {
      float: right;
      width: 50px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      margin-right: 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      margin-top: 5px;
      border-radius: 15px;
    }
    span:nth-child(2) {
      background: rgb(163, 163, 255);
      color: #fff;
    }
    span:nth-child(1) {
      background: rgb(231, 127, 127);
      color: #fff;
    }
  }
  .product {
    width: 100%;
    height: 150px;
    display: flex;
    overflow-x: auto;
    dl {
      margin-left: 10px;
      dt {
        img {
          width: 80px;
          height: 100px;
        }
      }
      dd {
        font-size: 14px;
      }
    }
  }
}
.show {
  img {
    width: 60%;
    height: 200px;
    display: block;
    margin: 40px auto;
  }
  p {
    text-align: center;
    width: 100%;
  }
  button {
    display: block;
    padding: 5px 10px;
    margin: 10px auto;
    background: orangered;
    color: #fff;
    border: 1px solid #ccc;
  }
}
</style>