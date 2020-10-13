import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopList: [],
    all: true,
    aid: localStorage.getItem('aid') || ''
  },
  mutations: {
    addshop(state, item) {
      let isF = state.shopList.filter(e => e.pid === item.pid)
      if (isF.length > 0) {
        state.shopList.forEach(e => {
          if (e.pid === item.pid) {
            e.count++;
          }
        })
      } else {
        item.count = 1
        item.flag = true
        state.shopList.push(item)
      }
    },
    all(state, flag) {
      let data = JSON.parse(JSON.stringify(state.shopList))
      data.forEach(e => {
        e.flag = flag
      })
      state.all = flag
      state.shopList = data
    },
    setCount(state, { f, index }) {
      let data = JSON.parse(JSON.stringify(state.shopList))
      if (f === '-') {
        data[index].count--;
      } else {
        data[index].count++;
      }
      state.shopList = data.filter(e => e.count)
    },
    isF(state, { index, flag }) {
      let data = JSON.parse(JSON.stringify(state.shopList))
      data[index].flag = flag;
      state.all = data.every(e => e.flag)
      state.shopList = data
    },
    setAid(state, { aid }) {
      state.aid = aid;
    },
    romveShopList(state) {
      let data = []
      state.shopList.forEach(e => {
        if (!e.flag) {
          data.push(e)
        }
      })
      console.log(data);
      state.shopList = data;
    }
  },
  getters: {
    total(state) {
      return state.shopList.filter(e => e.flag === true).reduce((a, b) => {
        return a += b.count * b.sale_price
      }, 0)
    },
    allCount(state) {
      return state.shopList.filter(e => e.flag === true).reduce((a, b) => {
        return a += b.count
      }, 0)
    }
  },
  actions: {
  },
  modules: {
  }
})
