<template>
    <div>
         <h2>   <van-icon name="share-o" class='del' @click="$router.history.go('-1')" />
       修改地址</h2>
       <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        show-delete
        :address-info='userInfo'
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        ref="address"
      />
    </div>
</template>
<script>
import { Toast, Notify, Dialog } from 'vant'
import city from '@/utils/city'
import { _getUserIdByToken } from '@/api/user'
import { _editAddress, _delAddress } from '@/api/address'
export default {
  data() {
    return {
      result: null,
      show: false,
      areaList: {},
      searchResult: [],
      userInfo: {},
      str: ''
    }
  },
  created() {
    this.getAddresscity()
    let item = this.$route.query
    this.str = item.city + item.county + item.street
    this.userInfo = {
      addressDetail: '',
      city: item.city,
      country: '',
      county: item.county,
      isDefault: false,
      name: item.auser,
      postalCode: '400011',
      province: item.province,
      tel: item.mobile
    }
  },
  mounted() {
    this.$refs.address.setAddressDetail(this.str)
  },
  methods: {
    async onSave(e) {
      let uid = await _getUserIdByToken()
      let action = {
        auser: e.name,
        mobile: e.tel,
        province: e.province,
        city: e.city,
        county: e.county,
        uid: uid.data.uid,
        street: e.addressDetail,
        aid: this.$route.query.aid
      }
      let res = await _editAddress(action)
      if (res.data.code) {
        if (e.isDefault) {
          localStorage.setItem('aid', this.$route.query.aid)
          let item = action
          let str = item.province + item.city + item.county + item.street
          localStorage.setItem('mycity', str)
        }
        Notify({
          type: 'success',
          message: res.data.msg,
          duration: 2000,
          onClose: () => {
            this.$router.go('-1')
          }
        })
      }
      Toast('save')
    },
    async onDelete() {
      let result = await _delAddress({ aid: this.$route.query.aid })
      Dialog.confirm({
        title: '删除',
        message: '确定要删除吗'
      })
        .then(() => {
          if (result.data.code) {
            Notify({
              type: 'danger',
              message: result.data.msg,
              duration: 2000,
              onClose: () => {
                this.$router.go('-1')
                localStorage.removeItem('aid')
              }
            })
          }
        })
        .catch(() => {
          Toast('取消删除')
        })
    },
    async getAddresscity() {
      this.areaList = city()
    }
  }
}
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
