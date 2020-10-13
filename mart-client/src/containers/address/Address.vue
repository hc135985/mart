<template>
    <div class="address">
     <h2>
     <van-icon name="share-o" class='del' @click="$router.history.go('-1')" />
     校园超市</h2>
     <div class="sear">
        <van-cell-group>
        <van-field v-model="value" label="北京  >" placeholder="请输入地址" />
        <van-button class="sear-btn"
           color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="searEnd"
          >搜索`
        </van-button>
        </van-cell-group>
            <van-list
            class="searList"
            v-show="isSearch"
            >
              <van-cell v-for="item in searchList" :key="item.uid" :title="item.title" 
              @click="$router.push({
                    path:'/addaddress',
                    query:{loca:item.title}
                  })"
               />
            </van-list>
    </div>
    <p @click="$router.push({
      path:'/addaddress',
      query:{loca}
    })">定位到当前位置</p>

     <ul v-show="addressList.length > 0">
       <h5>历史记录</h5>
       <li  v-for="(item,index) in addressList" :key="item.aid+index">
         <span>
          <van-radio-group v-model="radio">
               <van-radio :name="index"></van-radio>
         </van-radio-group>
         </span>
         <span>
            <p>{{item.auser}}</p>
            <p>{{item.mobile}}</p>
            <p>{{item.province}}</p>
            <p>{{item.city+item.county+item.street}}</p>
         </span>
         <span>
          <van-icon name="edit" @click="edit(item)" />
         </span>
       </li>
     </ul>
     <h4 v-show="addressList.length===0">您还没有收货地址熬</h4>
     <div class="addAdd" @click="xz">新增地址</div>
     <div id="map"></div>
    </div>
</template>
<script>
import { _getUserIdByToken } from '@/api/user'
import { _getAddressList } from '@/api/address'
import { Notify } from 'vant'

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
        onSearchComplete: results => {
          this.searchList = results.Hr
        }
      },
      map: null
    }
  },
  created() {
    this.getUserIdByToken()
  },
  mounted() {
    this.map = new BMap.Map('map')
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
  },
  components: {},
  watch: {
    radio() {
      let item = this.addressList[this.radio]
      this.$store.commit('setAid', { aid: item.aid })
      localStorage.setItem('aid', item.aid)
      let str = item.province + item.city + item.county + item.street
      localStorage.setItem('mycity', str)
    }
  },
  methods: {
    async getUserIdByToken() {
      let result = await _getUserIdByToken()
      this.getAddressList(result.data.uid)
    },
    async getAddressList(uid) {
      let result = await _getAddressList({ uid })
      if (result.data.code) {
        this.addressList = result.data.result
        result.data.result.forEach((addressIte, index) => {
          if (addressIte.aid === localStorage.getItem('aid')) {
            this.radio = index
          }
        })
      }
    },
    xz() {
      this.$router.push('/addaddress')
    },
    edit(item) {
      this.$router.push({
        path: '/editadd',
        query: item
      })
    },
    searEnd() {
      if (this.value === '') {
        this.isSearch = false
        return Notify({ type: 'danger', message: '不能为空' })
      }
      this.isSearch = true
      var local = new BMap.LocalSearch(this.map, this.option)
      local.search(this.value)
    }
  }
}
</script>
<style lang="scss">
.address {
  width: 100%;
  height: 100%;
  background: #e8e8e8;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 100px;
  h2 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e8e8e8;
    .del {
      font-size: 20px;
      position: fixed;
      left: 10px;
      top: 12px;
      z-index: 5;
      color: rgb(163, 41, 191);
    }
  }
  .sear {
    width: 100%;
    height: 40px;
    background: #fff;
    position: relative;
    .sear-btn {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .searList {
      position: absolute;
      z-index: 555;
      background: #fff;
      width: 100%;
      .van-cell:hover {
        background: orangered;
        color: #fff;
        font-weight: 800;
      }
    }
  }
  > p {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    background: rgb(255, 252, 252);
    margin: 10px 0;
  }
  ul {
    h5 {
      padding-left: 10px;
      margin: 5px 0;
    }
    li {
      width: 100%;
      height: 100px;
      display: flex;
      border-top: 1px solid #e8e8e8;
      background: rgb(247, 243, 243);
      span:nth-child(1) {
        width: 50px;
        margin-top: 40px;
        padding-left: 20px;
      }
      span:nth-child(3) {
        width: 20px;
        padding-top: 5px;
        padding-right: 5px;
        .van-icon {
          font-size: 20px;
        }
      }
      span:nth-child(2) {
        flex: 1;
        p {
          margin: 2px;
        }
      }
    }
  }
  .addAdd {
    width: 100%;
    height: 40px;
    background: rgb(247, 243, 243);
    color: red;
    text-align: center;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
