<template>
    <div class="register">
       <h2>注册用户</h2>
       <van-form @submit="onSubmit"  >
        <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
        v-model="passwordto"
        type="password"
        name="passwordto"
        label="确认密码"
        placeholder="再次确认密码"
        :rules="[{ validator:()=>{
            return passwordto === password
          }, message: '请再次确认密码' }]"
        />
        <van-field
        v-model="mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <div style="margin: 16px;">
         <van-button round block type="info" native-type="submit">
            注册
         </van-button>
        </div>
    </van-form>
    </div>
</template>
<script>
import Vue from 'vue'
import { Notify } from 'vant'
import { _registryuser } from '@/api/user'

Vue.use(Notify)
export default {
  data() {
    return {
      username: '',
      password: '',
      passwordto: '',
      mobile: ''
    }
  },
  methods: {
    onSubmit(value) {
      if (value.password !== value.passwordto) {
        return Notify({
          type: 'danger',
          message: '两次密码输入不同'
        })
      }
      let reg = /^1[3578]\d{9}$/
      if (!reg.test(value.mobile)) {
        return Notify({
          type: 'danger',
          message: '请输入正确的手机号'
        })
      }
      _registryuser(value).then(res => {
        if (res.data.code) {
          Notify({
            type: 'success',
            message: '注册成功',
            duration: 2000,
            onClose: () => {
              this.mobile = this.username = this.password = this.passwordto = ''
              this.$router.history.push('/login')
            }
          })
        } else {
          Notify({
            type: 'danger',
            message: res.data.msg,
            duration: 2000,
            onClose: () => {}
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.register {
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    height: 50px;
  }
}
</style>
