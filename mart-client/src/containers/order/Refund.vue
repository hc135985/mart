<template>
    <div>
        <h2>   
            <van-icon name="share-o" 
            class='del' 
            @click="$router.history.go('-1')" />
            退款/售后
       </h2>
       <ul>
          <li v-for="refund in refundList" :key="refund.oid+'oblig'">
            <p>总数 ：{{refund.total}}--总价:{{refund.summary}}
            </p>
            <div class="product">
               <dl v-for="productItem in refund.list"
                :key="productItem.pid + 'refund'">
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
       <div v-show="refundList.length === 0 " class="show">
          <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600148995079&di=69b9492d0abb1c59e26e8c21d8730fdc&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F34%2F82%2F84573bc31b6c1df.jpg' alt="">
          <p>暂时没有商品等待退款熬</p>
          <button @click="$router.push('/')">去逛逛</button>     
       </div>
    </div>
</template>

<script>
import { _getOrderList } from '@/api/order'
import { _productDefilt } from '@/api/home'
import { _getUserIdByToken } from '@/api/user'

export default {
  data() {
    return {
      refundList: []
    }
  },
  methods: {
    async getUserIdByToken() {
      let result = await _getUserIdByToken()
      this.getOrderList(result.data.uid)
    },
    async getOrderList(uid) {
      let result = await _getOrderList({ uid, status: 4 })
      if (result.data.code) {
        this.refundList = result.data.result
        this.refundList.forEach(refundItem => {
          let arr = JSON.parse(refundItem['list'])
          let shopList = []
          arr.forEach(async shopItem => {
            let shopResult = await _productDefilt(shopItem.pid)
            shopResult.data.result[0].count = shopItem.count
            shopList.push(shopResult.data.result[0])
          })
          refundItem['list'] = shopList
        })
      } else {
        this.refundList = []
      }
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