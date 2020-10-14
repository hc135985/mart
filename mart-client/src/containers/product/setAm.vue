<template>
    <div>
        <h2>完成订单</h2>
            <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            />
        <ul>
             <li v-for="(item) in $store.state.shopList" 
             :key="item.pid + 'setAm'" v-show="item.flag">
                <dl>
                    <dt>
                        <img :src='item.imgUrl' />
                    </dt>
                    <dd>
                        <h3>{{item.pname}}</h3>
                        <p>原价：{{item.original_price}}</p>
                        <p>现价:{{item.sale_price}}</p>
                        <p>{{item.count}}件,共{{item.count * item.sale_price}}元</p>
                    </dd>
              </dl>
            </li>
        </ul>

        <div class="foot">
           <span @click="addOrder(1)">支付失败</span>
           <span @click="addOrder(2)">支付成功</span>
        </div>
    </div>
</template>

<script>
import { _getUserIdByToken } from '@/api/user'
import { _getAddressList } from '@/api/address'
import { _addOrder } from '@/api/order'
import { Notify } from 'vant'
export default {
  data() {
    return {
      defultAddress: {},
      uid: '',
      chosenAddressId: '1',
      list: []
    }
  },
  created() {
    this.getDefultAddress()
    if (this.$store.state.shopList.length === 0) {
      this.$router.push('/')
    }
  },
  methods: {
    async addOrder(i) {
      if (!localStorage.getItem('aid')) return Notify('请添加地址')
      let obj = {
        status: i,
        summary: this.$store.getters.total,
        total: this.$store.getters.allCount,
        aid: this.$store.state.aid,
        list: [],
        uid: this.uid
      }
      this.$store.state.shopList.filter(it => it.flag).forEach(e => {
        let item = {
          pid: e.pid,
          count: e.count
        }
        obj.list.push(item)
      })
      let res = await _addOrder(obj)
      if (i === 1) {
        Notify({
          type: 'success',
          message: '支付失败',
          duration: 1000,
          onClose: () => {
            this.$router.go(-1)
            this.$store.commit('romveShopList')
          }
        })
      } else {
        Notify({
          type: 'success',
          message: res.data.msg,
          duration: 1000,
          onClose: () => {
            this.$router.go(-1)
            this.$store.commit('romveShopList')
          }
        })
      }
    },
    async getDefultAddress() {
      if (!localStorage.getItem('aid')) return
      let result = await _getUserIdByToken()
      this.uid = result.data.uid
      let res = await _getAddressList({
        aid: localStorage.getItem('aid'),
        uid: this.uid
      })
      let addressItem = (this.addressItem = res.data.result[0])
      console.log(addressItem)
      this.list = [
        {
          id: '1',
          name: addressItem.auser,
          tel: addressItem.mobile,
          address:
            addressItem.province +
            addressItem.city +
            addressItem.county +
            addressItem.street,
          isDefault: true
        }
      ]
    },
    onEdit() {
      this.$router.push({
        path: '/editadd',
        query: this.addressItem
      })
    },
    onAdd() {
      localStorage.removeItem('loca')
      this.$router.push('/addaddress')
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  border-bottom: 1px solid #ccc;
  height: 50px;
  line-height: 50px;
}
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
.van-address-list__bottom {
  bottom: 50px;
}
.foot {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  border-top: 1px solid #ccc;
  z-index: 999;
  background: #fff;
  span {
    flex: 1;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }
  span:nth-child(2) {
    color: #fff;
    background: rgb(235, 97, 97);
  }
}
</style>