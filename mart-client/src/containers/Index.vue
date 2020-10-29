<template>
  <Layout>
    <keep-alive>
      <router-view />
    </keep-alive>
  </Layout>
</template>

<script>
  import Layout from '@/components/layout';

  export default {
    components: {
      Layout,
    },
  };
</script>

<style lang="scss">
  .router-link-exact-active {
    color: orangered;
    font-weight: 800;
    .van-icon {
      font-weight: 800;
    }
  }
</style>
