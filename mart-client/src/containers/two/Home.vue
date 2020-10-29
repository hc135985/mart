<template>
  <div class="home">
    <h4>
      <span @click="$router.history.push('/address')">
        <van-icon name="location-o" />
        送至{{ mycity }} >
      </span>
      <van-icon
        class="sea"
        name="search"
        @click="$router.history.push('/search')"
      />
    </h4>
    <div class="home-main">
      <BScroll
        v-if="list.length !== 0"
        :pullDown="true"
        :pullUpLoad="true"
        :ScrollBar="true"
        :upload="onload"
        :loadtime="3000"
        :click="true"
        :mouseWheel="true"
        :onscroll="onscroll"
        :nestedScroll="true"
        type="y"
      >
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="item.img" alt="" :title="item.tit" />
          </van-swipe-item>
        </van-swipe>
        <div class="kh">
          <div v-for="(item, index) in kh" :key="item.name + index">
            <span>{{ item.btn }}</span>
            <p>{{ item.name }}</p>
          </div>
        </div>
        <div class="type" ref="type">
          <span
            v-for="(item, index) in SortList"
            :class="num === index ? 'active' : ''"
            :key="index"
            @click="tabList(item.s_type)"
            >{{ item['s_text'] }}</span
          >
        </div>
        <h3 v-show="list.length === 0">暂无数据</h3>
        <ul>
          <li
            v-for="item in list"
            :key="item.pid"
            @click="$router.history.push(`/productdel/${item.pid}`)"
          >
            <dl>
              <dt>
                <img :src="item.imgUrl" />
              </dt>
              <dd>
                <h3>{{ item.pname }}</h3>
                <p>原价：{{ item.original_price }}</p>
                <p>现价:{{ item.sale_price }}</p>
                <p>销量:{{ item.sales }}</p>
                <p>{{ item.desc }}</p>
              </dd>
            </dl>
          </li>
        </ul>
      </BScroll>
    </div>
  </div>
</template>

<script>
  import { _getBannerList, _getSortList, _productList } from '@/api/home.js';
  import { hbList } from '@/config/home';
  export default {
    components: {},
    data() {
      return {
        bannerList: [],
        kh: hbList,
        SortList: [],
        num: 0,
        size: 1,
        list: [],
        mycity: localStorage.getItem('mycity') || '北京八位学院',
      };
    },
    methods: {
      onload() {
        this.size = this.size + 1;
        this.getproductList();
      },
      onscroll(e) {
        if (e.y <= -360) {
          this.$refs.type.style = `
          position: fixed;
          top: ${-e.y}px;
          left: 0;
          font-size: 666;
          background: #fff;
        `;
        } else {
          this.$refs.type.style = '';
        }
      },
      async getBannerList() {
        let res = await _getBannerList();
        this.bannerList = res.data.result;
      },
      async getTypeList() {
        let res = await _getSortList();
        this.SortList = res.data.result;
      },
      async getproductList(n) {
        this.num = n ? n - 1 : this.num;
        this.size = n ? 1 : this.size;
        let res = await _productList({
          s_type: this.num,
          pagesize: this.size,
          pagecount: 10,
        });
        if (res.data.code) {
          this.list = this.list.concat(res.data.result);
          if (n) {
            this.list = res.data.result;
          }
        } else {
          if (!n) {
            this.list = [];
          }
        }
      },
      tabList(i) {
        this.getproductList(++i);
      },
    },
    created() {
      this.getBannerList();
      this.getTypeList();
      this.getproductList(1);
    },
  };
</script>
<style lang="scss">
  .my-swipe .van-swipe-item {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    h4 {
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-weight: normal;
      color: #ccc;
      padding-left: 5px;
      font-size: 12px;
      border-bottom: 1px solid #ccc;
      .sea {
        float: right;
        margin-top: 5px;
        margin-right: 20px;
        font-size: 18px;
        color: #ccc;
      }
    }
    .home-main {
      flex: 1;
      overflow-y: auto;
    }
    .kh {
      display: flex;
      flex-wrap: wrap;
      div {
        width: 20%;
        height: 70px;
        margin-top: 10px;
        text-align: center;
        font-size: 14px;
        span {
          width: 40px;
          height: 40px;
          display: inline-block;
          color: #fff;
          line-height: 40px;
          border-radius: 8px;
          text-align: center;
          font-size: 20px;
          box-shadow: 2px -2px rgb(90, 84, 67);
          background-image: linear-gradient(
            to top,
            red 20%,
            orangered 30%,
            yellow 80%
          );
        }
      }
    }
    .type {
      display: flex;
      flex-wrap: nowrap;
      height: 40px;
      width: 100%;
      overflow-x: auto;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      span {
        flex-shrink: 0;
        width: 80px;
        text-align: center;
      }
      .active {
        color: orangered;
        font-weight: 800;
      }
    }
    ul {
      li {
        dl {
          margin-top: 20px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 20px;
          display: flex;
          dt {
            flex-shrink: 0;
            width: 150px;
            height: 80px;
            img {
              width: 130px;
              height: 100px;
            }
          }
        }
      }
    }
  }
</style>
