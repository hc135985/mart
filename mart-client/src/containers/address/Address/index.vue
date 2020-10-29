<template>
  <div class="address">
    <h2>
      <van-icon name="share-o" class="del" @click="$router.history.go('-1')" />
      校园超市
    </h2>
    <div class="sear">
      <van-cell-group>
        <van-field v-model="value" label="北京  >" placeholder="请输入地址" />
        <van-button
          class="sear-btn"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="searEnd"
          >搜索`
        </van-button>
      </van-cell-group>
      <van-list class="searList" v-show="isSearch">
        <van-cell
          v-for="item in searchList"
          :key="item.uid"
          :title="item.title"
          @click="
            $router.push({
              path: '/addaddress',
              query: { loca: item.title },
            })
          "
        />
      </van-list>
    </div>
    <p
      @click="
        $router.push({
          path: '/addaddress',
          query: { loca },
        })
      "
    >
      定位到当前位置
    </p>

    <ul v-show="addressList.length > 0">
      <h5>历史记录</h5>
      <li v-for="(item, index) in addressList" :key="item.aid + index">
        <span>
          <van-radio-group v-model="radio">
            <van-radio :name="index"></van-radio>
          </van-radio-group>
        </span>
        <span>
          <p>{{ item.auser }}</p>
          <p>{{ item.mobile }}</p>
          <p>{{ item.province }}</p>
          <p>{{ item.city + item.county + item.street }}</p>
        </span>
        <span>
          <van-icon name="edit" @click="edit(item)" />
        </span>
      </li>
    </ul>
    <h4 v-show="addressList.length === 0">您还没有收货地址熬</h4>
    <div class="addAdd" @click="xz">新增地址</div>
    <div id="map"></div>
  </div>
</template>
<script>
  import { Notify } from 'vant';
  import { _getUserIdByToken } from '@/api/user';
  import { _getAddressList } from '@/api/address';

  export default {
    data() {
      return {
        value: '',
        addressList: [],
        radio: 0,
        searchList: [],
        loca: '北京海淀区六环到七环之间八维宏华教育',
        locaF: false,
        isSearch: false,
        option: {
          onSearchComplete: (results) => {
            this.searchList = results.Hr;
          },
        },
        map: null,
      };
    },
    created() {
      this.getUserIdByToken();
    },
    mounted() {
      this.map = new BMap.Map('map');
      this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    },
    components: {},
    watch: {
      radio() {
        let item = this.addressList[this.radio];
        this.$store.commit('setAid', { aid: item.aid });
        localStorage.setItem('aid', item.aid);
        let str = item.province + item.city + item.county + item.street;
        localStorage.setItem('mycity', str);
      },
    },
    methods: {
      async getUserIdByToken() {
        let result = await _getUserIdByToken();
        this.getAddressList(result.data.uid);
      },
      async getAddressList(uid) {
        let result = await _getAddressList({ uid });
        if (result.data.code) {
          this.addressList = result.data.result;
          result.data.result.forEach((addressIte, index) => {
            if (addressIte.aid === localStorage.getItem('aid')) {
              this.radio = index;
            }
          });
        }
      },
      xz() {
        this.$router.push('/addaddress');
      },
      edit(item) {
        this.$router.push({
          path: '/editadd',
          query: item,
        });
      },
      searEnd() {
        if (this.value === '') {
          this.isSearch = false;
          return Notify({ type: 'danger', message: '不能为空' });
        }
        this.isSearch = true;
        var local = new BMap.LocalSearch(this.map, this.option);
        local.search(this.value);
      },
    },
  };
</script>
<style lang="scss">
  @import url('./address.scss');
</style>
