<template>
    <div class="login">
    <h2>登录</h2>
    <p class="tab">
       <span :class="{'active':tab===0}" @click="tabc(0)">密码登录</span>
       <span :class="{'active':tab===1}" @click="tabc(1)">手机号登录</span>
    </p>
    <van-form @submit="onSubmit" v-if="tab===0" >
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
        <span class='forgetPwd' 
        @click="$router.history.push('/forgetpwd')" 
        >忘记密码?</span>
        <div style="margin: 16px;">
         <van-button round block type="info" native-type="submit">
            提交
         </van-button>
        </div>
    </van-form>
    <van-form @submit="onmobile" v-if="tab===1" >
        <van-field
        v-model="mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
        v-model="verifyCode"
        name="verifyCode"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <span :class="verifyclass ? 'db' :'verify' " @click="getverify" >{{msg}}</span>
          <span class='forgetPwd' 
        @click="$router.history.push('/forgetpwd')" 
        >忘记密码?</span>
        <div style="margin: 16px;">
         <van-button  round block type="info" native-type="submit">
            提交
         </van-button>
        </div>
    </van-form>
      <van-button  @click="$router.history.push('/register')" style="width:90%;margin:0 auto;" round block type="info" >
            注册
         </van-button>
    </div>
</template>

<script>
import { _passwordlogin, _getverify, _modilelogin } from '@/api/user'
import Vue from 'vue'
import { Notify } from 'vant'

// 全局注册
Vue.use(Notify)
export default {
  data() {
    return {
      username: '',
      password: '',
      mobile: '',
      tab: 0,
      verifyCode: '',
      msg: '获取验证码',
      verifyclass: false,
      t: null
    }
  },
  methods: {
    onSubmit(values) {
      _passwordlogin(values).then(res => {
        if (res.data.code) {
          Notify({
            type: 'success',
            message: res.data.msg,
            duration: 2000,
            onClose: () => {
              this.username = this.password = ''
              localStorage.setItem('vtoken', res.data.token)
              this.$router.history.push('/')
            }
          })
        } else {
          Notify({
            type: 'danger',
            message: res.data.msg + '请先注册',
            duration: 2000,
            onClose: () => {
              this.username = this.password = ''
            }
          })
        }
      })
    },
    tabc(n) {
      this.tab = n
    },
    onmobile(values) {
      _modilelogin(values).then(res => {
        if (res.data.code) {
          Notify({
            type: 'success',
            message: '登陆成功',
            duration: 2000,
            onClose: () => {
              localStorage.setItem('vtoken', res.data.token)
              this.$router.history.push('/')
            }
          })
        } else {
          Notify({
            type: 'danger',
            message: res.data.msg,
            duration: 2000,
            onClose: () => {
              this.mobile = this.verifyCode = ''
              this.msg = '获取验证码'
              clearInterval(this.t)
              this.verifyclass = false
            }
          })
        }
      })
    },
    getverify() {
      let reg = /^1[3578]\d{9}$/
      if (!reg.test(this.mobile)) {
        return Notify({
          type: 'danger',
          message: '请输入正确的手机号'
        })
      }
      _getverify({ mobile: this.mobile }).then(res => {
        if (res.data.code) {
          Notify({
            type: 'success',
            message: '您的验证码为' + res.data.verifyCode
          })
        }
      })
      let i = 60
      if (this.verifyclass) return
      this.verifyclass = true
      this.t = setInterval(() => {
        this.msg = `剩余${i}秒`
        i--
        if (i === 0) {
          this.msg = '获取验证码'
          clearInterval(this.t)
          this.verifyclass = false
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.login {
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
  }
  .tab {
    width: 100%;
    display: flex;
    span {
      flex: 1;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #000;
    }
    .active {
      color: orangered;
      border-bottom: 2px solid orangered;
    }
  }
  .forgetPwd {
    float: right;
    color: rgb(48, 48, 248);
    height: 30px;
    margin-right: 20px;
    text-decoration: underline;
  }
  .verify {
    position: fixed;
    right: 20px;
    top: 140px;
    z-index: 88;
    padding: 5px 20px;
    background: skyblue;
    color: #fff;
    border-radius: 20px;
    font-size: 14px;
  }

  .db {
    border-radius: 20px;
    font-size: 14px;
    position: fixed;
    right: 20px;
    top: 140px;
    z-index: 88;
    padding: 5px 20px;
    background: #ccc;
    color: #000;
  }
}
</style>
