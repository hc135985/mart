<template>
  <div class="map-wraper">
    <div class="map-title">
      <input type="search" v-model="search" />
      <button>搜索</button>
    </div>
    <div class="map-content" id="map"></div>
    <ul>
      <li v-for="list in searchList" :key="list.uid">
        <h3 v-text="list.title"></h3>
        <p v-text="list.address"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "八维",
      searchList: [],
      opt: {
        onSearchComplete: results => {
          console.log(results._pois);
          this.searchList = results._pois;
        }
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var map = new BMapGL.Map("map");
      map.centerAndZoom(new BMapGL.Point(116.28019, 40.049191), 11);
      var local = new BMapGL.LocalSearch(map, this.opt);
      local.search(this.search);
    }
  }
};
</script>
<style>
.map-wraper {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.map-title {
  height: 50px;
}
.map-content {
  flex: 1;
  display: none;
}
</style>
