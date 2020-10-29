<template>
  <div>
    <h2><span @click="$router.history.go(-1)">《 </span>历史头像</h2>
    <h4>请上传头像</h4>
    <van-uploader v-model="fileList" multiple :after-read="readFiles" />
    <h4>历史头像</h4>
    <ul>
      <van-image
        v-for="imgUrl in avatarList"
        :key="imgUrl.aid"
        round
        width="90"
        height="90"
        lazy-load
        :src="imgUrl.imgUrl"
        @click="cutAvatar(imgUrl.imgUrl)"
      />
    </ul>
  </div>
</template>

<script>
  import {
    _getUserIdByToken,
    _imgUpload,
    _getAvatarList,
    _cutAvatar,
  } from '@/api/user';
  import { Notify } from 'vant';
  export default {
    data() {
      return {
        avatarList: [],
        fileList: [],
        uid: '',
      };
    },
    mounted() {
      this.getavatar();
    },
    methods: {
      async getavatar() {
        let result = await _getUserIdByToken();
        let avatarLi = await _getAvatarList({ uid: result.data.uid });
        this.uid = result.data.uid;
        this.avatarList = avatarLi.data.data;
      },
      async cutAvatar(imgUrl) {
        let result = await _cutAvatar({ uid: this.uid, imgUrl });
        if (result.data.code) {
          Notify({
            type: 'success',
            message: result.data.msg,
            duration: 1000,
            onClose: () => {
              this.$router.history.go(-1);
            },
          });
        }
      },
      async readFiles({ file }) {
        let readFrom = new FormData();
        readFrom.append('image1', file);
        let result = await _imgUpload(readFrom, this.uid);
        if (result.data.code) {
          Notify({
            type: 'success',
            message: result.data.msg,
            duration: 1000,
            onClose: () => {
              this.$router.history.go(-1);
              this.fileList = [];
            },
          });
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    height: 50px;
    line-height: 50px;
    span {
      float: left;
    }
  }
  h4 {
    margin: 10px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    .van-image {
      margin: 20px 10px;
      margin-left: 20px;
    }
  }
</style>
