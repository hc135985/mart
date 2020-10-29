<template>
  <div>
    <h2>
      <van-icon name="share-o" class="del" @click="$router.history.go('-1')" />
      增加地址
    </h2>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :address-info="userInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      ref="address"
    />
  </div>
</template>
<script>
  import { Notify } from 'vant';
  import city from '@/utils/city';
  import { _getUserIdByToken } from '@/api/user';
  import { _addAddress } from '@/api/address';
  export default {
    data() {
      return {
        result: null,
        show: false,
        areaList: {},
        searchResult: [],
        userInfo: {},
      };
    },
    created() {
      this.getAddresscity();
    },
    mounted() {
      this.$refs.address.setAddressDetail(this.$route.query.loca);
    },
    methods: {
      async onSave(e) {
        let uid = await _getUserIdByToken();
        let action = {
          auser: e.name,
          mobile: e.tel,
          province: e.province,
          city: e.city,
          county: e.county,
          uid: uid.data.uid,
          street: e.addressDetail,
        };
        let res = await _addAddress(action);
        if (res.data.code) {
          if (e.isDefault) {
            localStorage.setItem('aid', res.data.aid);
          }
          Notify({
            type: 'success',
            message: res.data.msg,
            duration: 2000,
            onClose: () => {
              this.$router.go('-1');
            },
          });
        }
      },
      async getAddresscity() {
        this.areaList = city();
      },
    },
  };
</script>
<style lang="scss">
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
</style>
