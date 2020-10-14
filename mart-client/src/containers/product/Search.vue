<template>
    <div>
    <van-icon name="share-o" class='del' @click="$router.history.go('-1')" />
    <van-field
        @keyup.enter="sear"
        v-model="sms"
        center
        clearable
        placeholder="请输入喜欢的商品"
        >
        <template #button>
            <van-button size="small" type="primary" @click="sear" 
            >
            <van-icon class="sea" name="search" />
            </van-button>
        </template>
    </van-field>
    <h3 v-show="!falg">{{searList.length >0 ? '历史搜索':'暂无历史搜索'}}</h3>
    <ul v-show="!falg">
       <li v-for="(item,index) in searList" :key="item+index" @click="clicksear(item)">
         {{item}}
       </li>
    </ul>
    <div class="list" v-show="falg">
       <li v-for="item in shopList" :key="item.pid+'sss'"
        @click="$router.history.push(`/productdel/${item.pid}`)"
       >
            <dl>
             <dt>
                <img :src='item.imgUrl' v-lazy="img" />
             </dt>
             <dd>
               <h4>{{item.pname}}</h4>
               <p>原价：{{item.original_price}}</p>
               <p>现价:{{item.sale_price}}</p>
             </dd>
           </dl>
       </li>
    </div>
    <p>{{msg}}</p>
    </div>
</template>
<script>
import { _getsearList } from '@/api/sear'
export default {
  data() {
    return {
      sms: '',
      falg: false,
      searList: JSON.parse(localStorage.getItem('searList')) || [],
      shopList: [],
      msg: ''
    }
  },
  methods: {
    clicksear(str) {
      this.sms = str
      this.sear()
    },
    async sear() {
      if (this.sms === '') {
        this.msg = ''
        return (this.falg = false)
      }
      let dat = JSON.parse(localStorage.getItem('searList')) || []
      if (dat.indexOf(this.sms) != -1) {
        dat.splice(dat.indexOf(this.sms), 1)
      }
      dat.unshift(this.sms)
      if (dat.length > 10) {
        dat.pop()
      }
      this.searList = dat
      localStorage.setItem('searList', JSON.stringify(dat))
      let result = await _getsearList({ keyword: this.sms })
      if (result.data.code) {
        this.shopList = result.data.result
        this.msg = ''
      } else {
        this.msg = '暂无数据'
      }
      this.falg = true
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 5px 20px;
    background: #ccc;
    flex-shrink: 0;
    margin: 10px 20px;
    border-radius: 20px;
  }
}
h3 {
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
}
.del {
  font-size: 20px;
  position: fixed;
  left: 10px;
  top: 12px;
  z-index: 5;
  color: rgb(163, 41, 191);
}
.sc {
  color: #fff;
  border-radius: 20px;
  background: red;
  float: right;
  margin-right: 10px;
}
.van-field {
  padding-left: 40px;
}
dl {
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  height: 70px;
  display: flex;
  width: 100%;
  dt {
    flex-shrink: 0;
    width: 150px;
    height: 60px;
    img {
      width: 80px;
      margin-left: 20px;
      height: 58px;
    }
  }
}
</style>
