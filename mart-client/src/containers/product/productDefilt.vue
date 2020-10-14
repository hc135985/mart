<template>
  <div class="pdel">
    <h2>
      <van-icon name="share-o" class="del" @click="$router.history.go('-1')"/>商品详情
    </h2>
    <dl>
      <dt>
        <img :src="item.imgUrl">
      </dt>
      <dd>
        <h3>{{item.pname}}</h3>
        <p>原价：{{item.original_price}}</p>
        <p>现价:{{item.sale_price}}</p>
        <p>销量:{{item.sales}}</p>
        <p>{{item.desc}}</p>
      </dd>
    </dl>
    <h4>评论:</h4>
    <ul>
      <li v-for="item in commentList" :key="item.cid">
        <span>
          <van-image
            @click="show = true"
            round
            lazy-load
            width="30px"
            height="30px"
            :src="item.uphoto"
          />
          <h5>{{item.uname}}</h5>
        </span>
        <span>
          <p>{{item.comment}}</p>
          <van-rate v-model="item.score"/>
        </span>
      </li>
    </ul>
    <h4 v-show="flag">暂时没有评论，等待您的第一次评论熬</h4>
    <div style="margin-bottom:60px">说点什么吧</div>
    <footer>
      <span @click="$router.history.push('/')">
        <van-icon name="wap-home-o"/>首页
      </span>
      <span @click="$router.history.push('/index/shop')">
        <van-icon name="shopping-cart-o"/>购物车
      </span>
      <span class="add" @click="add">加入购物车</span>
    </footer>
  </div>
</template>
<script>
import { _productDefilt } from '@/api/home'
import { _getCommentList } from '@/api/comment'
import { _getUserInfoByUid } from '@/api/user'
import { Notify } from 'vant'

export default {
  name: 'productDefilt',
  data() {
    return {
      item: {},
      commentList: [],
      flag: true
    }
  },
  methods: {
    async getproductDefilt() {
      let result = await _productDefilt(this.$route.params.pid)
      if (result.data.code) {
        this.item = result.data.result[0]
      }
    },
    add() {
      Notify({
        type: 'success',
        message: '添加成功',
        duration: 1000,
        onClose: () => {
          this.$store.commit('addshop', this.item)
        }
      })
    },
    async getCommentList() {
      let result = await _getCommentList({ pid: this.$route.params.pid })
      let data = result.data.result
      if (result.data.code) {
        data.forEach(async e => {
          let res = await this.getUserInfoByUid(e.uid)
          e.uphoto = res.data.data.avatar
        })
        this.commentList = data
        this.flag = false
      }
    },
    getUserInfoByUid(uid) {
      return _getUserInfoByUid(uid)
    }
  },
  created() {
    this.getproductDefilt()
    this.getCommentList()
  }
}
</script>

<style lang="scss"  >
.del {
  font-size: 20px;
  position: fixed;
  left: 10px;
  top: 12px;
  z-index: 5;
  color: rgb(163, 41, 191);
}
.pdel h2 {
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #ccc;
}
.del dl {
  width: 100%;
  margin: 50px 0;
  img {
    width: 100%;
  }
}
h4 {
  border-bottom: 1px solid #000;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  font-size: 20px;
}
ul {
  margin-bottom: 60px;
  li {
    padding-top: 10px;
    span:nth-child(1) {
      display: flex;
      margin-bottom: 10px;
      h5 {
        line-height: 30px;
        padding-left: 10px;
      }
    }
  }
}
footer {
  text-align: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #000;
  width: 100%;
  background: #fff;
  span {
    flex: 1;
    text-align: center;
    .van-icon {
      display: block;
      font-size: 20px;
    }
  }
  .add {
    width: 200px;
    line-height: 40px;
    height: 40px;
    color: #fff;
    background: orange;
    text-align: center;
    font-size: 18px;
  }
}
</style>
