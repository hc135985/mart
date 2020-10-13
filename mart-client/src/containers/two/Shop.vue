<template>
    <ul class="ul">
       <li v-for="(item,index) in $store.state.shopList" :key="item.pid + 'shop'">
        <input type="checkbox" :checked="item.flag" @change="isF(index,item.flag)" />
        <dl>
             <dt>
                <img :src='item.imgUrl'  />
             </dt>
             <dd>
               <h3>{{item.pname}}</h3>
               <p>原价：{{item.original_price}}</p>
               <p>现价:{{item.sale_price}}</p>
               <p>销量:{{item.sales}}</p>
               <p>{{item.desc}}</p>
               <p> 
                    <van-button @click="setCount(index,'-')">-</van-button> 
                    {{item.count}} 
                    <van-button  @click="setCount(index,'+')">+</van-button>
               </p>
             </dd>
           </dl>
       </li>
       <div  class="shop-sky" 
             style="margin-top:100px" 
             v-show="$store.state.shopList.length ===0"
        >
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600137036540&di=0aa3607324202328d723ae12e4d79378&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2Fa4064bdab5f6c800ed664014f3eb7d13a4dd25b3138d0-hYHe07_fw236" alt="" >
          <h4>购物车竟然空空的</h4>
          <p>在忙，也要买点什么犒劳自己呀</p>     
          <button @click="$router.push('/')">去逛逛</button>     
       </div>
      <div class="totbl" v-show="$store.state.shopList.length >0">
       <span>
         <input type="checkbox" v-model="$store.state.all" @click="all()"/>
            全选
        </span>
        <span>
          合计: <b style="color:red;">￥{{$store.getters.total}}  </b>
        </span>
         <span @click="setAm">去结算 ({{$store.getters.allCount}}) </span>
      </div>
    </ul>
</template>
<script>
import { Notify } from 'vant'

export default {
  data() {
    return {}
  },
  methods: {
    setCount(index, f) {
      this.$store.commit('setCount', { index, f })
    },
    isF(index, flag) {
      this.$store.commit('isF', { index, flag: !flag })
    },
    all() {
      this.$store.commit('all', !this.$store.state.all)
    },
    setAm() {
      if (this.$store.getters.allCount <= 0)
        return Notify({
          type: 'danger',
          message: '请选择商品'
        })
      this.$router.push('/setAm')
    }
  }
}
</script>

<style lang="scss" >
.ul {
  background: #fbf9f9;
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  height: 100%;
  overflow-y: auto;
  li {
    dl {
      margin-top: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      display: flex;
      dt {
        flex-shrink: 0;
        width: 150px;
        height: 80px;
        img {
          width: 130px;
          height: 100px;
        }
      }
    }
  }
}
.totbl {
  width: 100%;
  height: 40px;
  border-top: 1px solid #000;
  bottom: 50px;
  z-index: 50;
  background: #fff;
  display: flex;
  line-height: 40px;
  position: fixed;
  input {
    margin: 0 20px;
  }
  span:nth-child(3) {
    background: orangered;
    display: inline-block;
    text-align: center;
    width: 34%;
    color: #fff;
  }
  span:nth-child(2) {
    text-align: center;
  }
  span {
    width: 33%;
  }
}
.shop-sky {
  img {
    width: 60%;
    height: 150px;
    margin: 0 auto;
    display: block;
  }
  h4 {
    text-align: center;
    margin-top: 5px;
    font-size: 20px;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: rgb(169, 167, 167);
    margin: 15px;
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
