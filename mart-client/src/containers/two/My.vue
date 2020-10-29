<template>
  <div class="my">
    <div class="header">
      <span
        class="userinfo"
        @click="$router.history.push(`/setuserinfo/${uid}`)"
        >完善个人资料</span
      >
      <span>
        {{ userInfo.nickname }}
      </span>
      <van-image
        @click="$router.history.push('/avatar')"
        round
        lazy-load
        width="50px"
        height="50px"
        :src="userInfo.avatar"
      />
    </div>
    <div class="main">
      <div class="order">
        <span @click="$router.push('/order/obligation')">
          <van-icon name="coupon-o" />
          待付款<b v-show="obligation">{{ obligation }}</b>
        </span>
        <span @click="$router.push('/order/totakedelivery')">
          <van-icon name="send-gift-o" />
          待配送<b v-show="theShipping">{{ theShipping }}</b>
        </span>
        <span>
          <van-icon
            name="logistics"
            @click="$router.push('/order/hasbeenshipped')"
          />
          已发货<b v-show="shipped">{{ shipped }}</b>
        </span>
        <span @click="$router.push('/order/refund')">
          <van-icon name="after-sale" />
          退款/售后<b v-show="afterSale">{{ afterSale }}</b>
        </span>
      </div>
      <div class="list">
        <li><van-icon name="description" color="skyblue" />我的优惠券</li>
        <li><van-icon name="medal-o" color="red" />自治规则</li>
        <li><van-icon name="phone-o" color="blue" />联系客服</li>
      </div>
      <van-button type="danger" round block @click="logOut">
        退出登录
      </van-button>
    </div>
  </div>
</template>
<script>
  import { _getUserIdByToken, _getUserInfoByUid } from '@/api/user';
  import { Dialog } from 'vant';
  import { _getOrderList } from '@/api/order';

  export default {
    data() {
      return {
        userInfo: {},
        orderList: [],
        uid: '',
        show: false,
        fileList: [],
      };
    },
    methods: {
      async getUserIdByToken() {
        let result = await _getUserIdByToken();
        let userInfo = await _getUserInfoByUid(result.data.uid);
        this.getOrderList(result.data.uid);
        this.uid = result.data.uid;
        this.userInfo = userInfo.data.data;
      },
      async getOrderList(uid) {
        let result = await _getOrderList({ uid });
        if (result.data.code) {
          this.orderList = result.data.result;
        }
      },
      logOut() {
        Dialog.confirm({
          title: '退出登录',
          message: '您确定退出当前账号吗',
        })
          .then(() => {
            localStorage.removeItem('vtoken');
            this.$router.history.push('/login');
          })
          .catch(() => {
            // on cancel
          });
      },
    },

    created() {
      this.getUserIdByToken();
    },
    computed: {
      obligation() {
        return this.orderList.filter((e) => e.status === 1).length;
      },
      theShipping() {
        return this.orderList.filter((e) => e.status === 2).length;
      },
      shipped() {
        return this.orderList.filter((e) => e.status === 3).length;
      },
      afterSale() {
        return this.orderList.filter((e) => e.status === 4).length;
      },
    },
  };
</script>
<style lang="scss">
  .my {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      width: 100%;
      height: 100px;
      background: rgb(245, 14, 14);
      display: flex;
      position: relative;
      .userinfo {
        font-size: 14px;
        position: absolute;
        left: 0;
        top: 5px;
        line-height: 20px;
      }
      span {
        width: 100px;
        text-align: center;
        line-height: 100px;
        font-size: 20px;
        color: #fff;
      }
      .van-image {
        margin-left: 180px;
        margin-top: 25px;
      }
    }
    .order {
      display: flex;
      height: 100px;
      position: relative;
      z-index: 0;
      width: 85%;
      background: #fff;
      border: 1px solid #e8e8e8;
      border-radius: 30px;
      margin: -20px auto;
      padding: 0 10px;
      font-size: 14px;
      span {
        flex: 1;
        text-align: center;
        position: relative;
        b {
          position: absolute;
          top: 2px;
          right: 10px;
          width: 20px;
          height: 20px;
          background: rgb(247, 104, 104);
          color: #fff;
          line-height: 20px;
          text-align: center;
          border-radius: 50%;
        }
        .van-icon {
          display: block;
          font-size: 26px;
          margin: 15px;
          color: rgb(245, 14, 14);
          font-weight: 800;
        }
      }
    }
  }
  .main {
    background: #f5f3f3;
    flex: 1;
    .list {
      width: 90%;
      border-radius: 10px;
      background: #fff;
      margin: 40px auto;
      li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        .van-icon {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 50;
  }

  .my .header .block {
    width: 300px;
    height: 500px;
    background-color: #fff;
    .van-uploader__preview {
      width: 100px;
      height: 100px;
      margin-right: 50px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
