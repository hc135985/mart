<template>
  <footer class="footer">
    <router-link to="/index/home" class="text-middle">
      <van-icon name="wap-home-o" />
      首页</router-link
    >
    <router-link to="/index/classify">
      <van-icon name="bars" />
      分类</router-link
    >
    <router-link to="/index/shop">
      <van-icon name="shopping-cart-o" />
      购物车<span class="count" v-show="this.$store.getters.allCount">
        {{ $store.getters.allCount }}
      </span></router-link
    >
    <router-link to="/index/my">
      <van-icon name="friends-o" />
      我的</router-link
    >
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style></style>
