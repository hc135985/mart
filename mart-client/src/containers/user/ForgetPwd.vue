<template>
    <div class="forgetpwd">
    <h2>找回密码</h2>
    <p class="tab">
       <span :class="{'active':tab===0}" @click="tabc(0)">邮箱找回</span>
       <span :class="{'active':tab===1}" @click="tabc(1)">手机号找回</span>
    </p>
    <van-form @submit="onEmail" v-if="tab===0" >
        <van-field
        v-model="email"
        name="email"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ pattern:/\.com$/, message: '请填写正确的邮箱' }]"
        />
        <van-field
        v-model="emailVerify"
        name="verifyCode"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
        />
         <van-field
          v-model="password"
          name="password"
          type='password'
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入新密码' }]"
          />
         <van-field
          v-model="lostpassword"
          name="lostpassword"
          type='password'
          label="重输密码"
          placeholder="请再次输入密码"
          :rules="[{ validator:()=>{
            return lostpassword === password
          }, message: '请让两次输入的密码一致' }]"
          />
        <span :class="verifyclass ? 'db' :'verify' " @click="getemailverify" >{{msg}}</span>
        <div style="margin: 16px;">
         <van-button round block type="info" native-type="submit">
            提交
         </van-button>
        </div>
    </van-form>
    <van-form @submit="onmobile" v-if="tab===1" 
    validate-trigger='onChange'
    >
        <van-field
        v-model="mobile"
        name="mobile"
        label="手机号"
        placeholder="手机号"
        :rules="[{ pattern:/^1[3578]\d{9}$/, message: '请填写正确的手机号' }]"
        />
        <van-field
        v-model="mobileVerify"
        name="verifyCode"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <span :class="verifyclass ? 'db' :'verify' " @click="getverify" >{{msg}}</span>
         <van-field
          v-model="password"
          name="password"
          type='password'
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入新密码' }]"
          />
         <van-field
          v-model="lostpassword"
          name="lostpassword"
          type='password'
          label="重输密码"
          placeholder="再次输入密码"
          :rules="[{ validator:()=>{
            return lostpassword === password
          }, message: '请让两次输入的密码一致' }]"
          />
        <div style="margin: 16px;">
         <van-button  round block type="info" native-type="submit">
            提交
         </van-button>
        </div>
    </van-form>
    </div>
</template>

<script>
import {
  _getverify,
  _modifyPwdByMobile,
  _getMmailVerify,
  _modifyPwdByEmail
} from '@/api/user'

import { Notify } from 'vant'
export default {
  data() {
    return {
      email: '',
      emailVerify: '',
      mobile: '',
      mobileVerify: '',
      y: null,
      tab: 0,
      msg: '获取验证码',
      verifyclass: false,
      lostpassword: '',
      password: ''
    }
  },
  methods: {
    async onEmail(values) {
      let result = await _modifyPwdByEmail(values)
      if (result.data.code) {
        Notify({
          type: 'success',
          message: result.data.msg,
          onClose: () => {
            this.$router.history.push('/login')
          }
        })
      } else {
        Notify({
          type: 'danger',
          message: result.data.msg
        })
      }
    },
    async onmobile(values) {
      let result = await _modifyPwdByMobile(values)
      if (result.data.code) {
        Notify({
          type: 'success',
          message: result.data.msg,
          onClose: () => {
            this.$router.history.push('/login')
          }
        })
      } else {
        Notify({
          type: 'danger',
          message: result.data.msg
        })
      }
    },
    tabc(n) {
      this.tab = n
    },
    async getemailverify() {
      let reg = /\.com$/
      if (!reg.test(this.email.trim())) {
        return Notify({
          type: 'danger',
          message: '邮箱错误'
        })
      }
      let result = await _getMmailVerify({ email: this.email })
      if (result.data.code) {
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
      } else {
        Notify({
          type: 'danger',
          message: result.data.msg
        })
      }
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

<style lang="scss" scoped>
.forgetpwd {
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