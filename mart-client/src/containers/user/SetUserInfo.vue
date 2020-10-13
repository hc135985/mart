<template>
    <div>
     <h2>
      <van-icon name="share-o" class='del' @click="$router.history.go('-1')" />设置个人信息
      </h2>
      <div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="nickname"
                name="nickname"
                label="用户昵称"
                placeholder="用户昵称"
                :rules="[{ required: true, message: '请填写用户昵称' }]"
            />
            <van-field
                v-model="graph"
                name="graph"
                label="人名"
                placeholder="人名"
                :rules="[{ required: true, message: '请填写人名' }]"
            />
             <van-field
                v-model="email"
                name="email"
                label="邮箱"
                placeholder="邮箱"
                :rules="[{ required: true, message: '请填写邮箱' }]"
            />
             <van-field
                v-model="mobile"
                name="mobile"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
            </van-form>
      </div>
    </div>
</template>
<script>
import { _getUserInfoByUid, _setUserInfoByUid } from '@/api/user'
import { Notify } from 'vant'

export default {
  data() {
    return {
      nickname: '',
      graph: '',
      email: '',
      mobile: ''
    }
  },
  methods: {
    async getUserInfoByUid() {
      let result = await _getUserInfoByUid(this.$route.params.uid)
      let res = result.data.data
      this.nickname = res.nickname || ''
      this.graph = res.graph || ''
      this.email = res.email || ''
      this.mobile = res.mobile || ''
    },
    async setUserInfoByUid(action) {
      let result = await _setUserInfoByUid(action)
      if (result.data.code) {
        Notify({
          type: 'success',
          message: '添加成功',
          duration: 1000
        })
      }
    },
    onSubmit(e) {
      e.uid = this.$route.params.uid
      this.setUserInfoByUid(e)
    }
  },
  created() {
    this.getUserInfoByUid()
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
