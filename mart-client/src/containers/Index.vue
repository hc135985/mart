<template>
    <div class="index">
     <h2 @click="totas">校园超市</h2>
       <div class="index-main">
       <keep-alive>
          <router-view/>
       </keep-alive>
       </div>
       <div class="index-nav">
         <router-link to="/index/home">
          <van-icon name="wap-home-o" />
         首页</router-link>
         <router-link to="/index/classify">
          <van-icon name="bars" />
         分类</router-link>
         <router-link to="/index/shop">
          <van-icon name="shopping-cart-o" />
         购物车<span class='count'
         v-show="this.$store.getters.allCount"
         >
         {{$store.getters.allCount}}
         </span></router-link>
         <router-link to="/index/my">
          <van-icon name="friends-o" />
         我的</router-link>
       </div>
    </div> 
</template>

<script>
export default {
  created() {},
  methods: {
    totas() {
      this.$toast({
        text: '啊啊啊啊阿',
        onOk: this.onOk,
        del: this.del
      })
    },
    onOk() {
      console.log('onOk---vue')
    },
    del() {
      console.log('DEL-VUE')
    }
  }
}
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e8e8e8;
  }
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .index-nav {
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    .van-icon {
      display: block;
      padding: 0;
      font-size: 20px;
      margin-top: 5px;
    }

    a {
      transition: 1s;
      flex: 1;
      position: relative;
      text-align: center;
      color: #000;
      .count {
        position: absolute;
        top: 0;
        right: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        font-size: 16px;
        color: #fff;
        text-align: center;
        line-height: 20px;
      }
    }
    .router-link-exact-active {
      color: orangered;
      font-weight: 800;
      .van-icon {
        font-weight: 800;
      }
    }
  }
}
</style>


