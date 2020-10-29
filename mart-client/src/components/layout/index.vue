<template>
  <div class="wraper">
    <Header>
      <h4 class="mt5 text-center">校园超市</h4>
    </Header>
    <div class="content">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './header';
  import Footer from './footer';
  export default {
    name: 'Layout',
    components: {
      Header,
      Footer,
    },
  };
</script>
