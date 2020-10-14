<template>
    <div>
        <h2>   
            <van-icon name="share-o" 
            class='del' 
            @click="$router.history.go('-1')" />
            待付款
       </h2>
       <ul>
          <li v-for="obligation in obligationList" :key="obligation.oid+'oblig'">
            <p>总数 ：{{obligation.total}}--总价:{{obligation.summary}}
              <span @click="del(obligation.oid)">删除</span>
              <span @click="obliga(obligation)">付款</span>
            </p>
            <div class="product">
               <dl v-for="productItem in obligation.list"
                :key="productItem.pid + 'obli'">
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
       <div v-show="obligationList.length === 0 " class="show">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2622146877,1212494125&fm=26&gp=0.jpg" alt="">
          <p>暂时没有订单熬</p>
          <button @click="$router.push('/')">去逛逛</button>     
       </div>
    </div>
</template>

<script>
import { _getOrderList, _delOrder, _updataOrder } from '@/api/order'
import { _productDefilt } from '@/api/home'
import { _getUserIdByToken } from '@/api/user'
import { Notify, Dialog } from 'vant'
export default {
  data() {
    return {
      obligationList: []
    }
  },
  methods: {
    async getUserIdByToken() {
      let result = await _getUserIdByToken()
      this.getOrderList(result.data.uid)
    },
    async getOrderList(uid) {
      let result = await _getOrderList({ uid, status: 1 })
      if (result.data.code) {
        this.obligationList = result.data.result
        this.obligationList.forEach(obligationItem => {
          let arr = JSON.parse(obligationItem['list'])
          let shopList = []
          arr.forEach(async shopItem => {
            let shopResult = await _productDefilt(shopItem.pid)
            shopResult.data.result[0].count = shopItem.count
            shopList.push(shopResult.data.result[0])
          })
          obligationItem['list'] = shopList
        })
      } else {
        this.obligationList = []
      }
    },
    async del(oid) {
      let result = await _delOrder({ oid })
      Dialog.confirm({
        title: '删除',
        message: '确定要删除吗'
      }).then(() => {
        if (result.data.code) {
          Notify({
            type: 'danger',
            message: result.data.msg,
            duration: 1000,
            onClose: () => {
              this.getUserIdByToken()
            }
          })
        }
      })
    },
    async obliga(item) {
      let ite = JSON.parse(JSON.stringify(item))
      Dialog.confirm({
        title: '付款',
        message: '确定要付款吗'
      }).then(async () => {
        ite.status = 2
        let data = []
        ite.list.forEach(e => {
          let it = {
            pid: e.pid,
            count: e.count
          }
          data.push(it)
        })
        ite.list = JSON.stringify(data)
        console.log(ite)
        let result = await _updataOrder(ite)
        if (result.data.code) {
          Notify({
            type: 'success',
            message: result.data.msg,
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