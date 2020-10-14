<template>
<div class="classify">
    <div class="classify-sear">
        <p @click="$router.history.push('/search')">
            <van-icon name="search" />
            <span>搜索校园超市商品</span>
        </p>
    </div>
    <div class="classify-main">
        <div class="left">
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item v-for="item in typeList" :key="item.t_type + 'type'" :title="item.t_text" />
            </van-sidebar>
        </div>
        <div class="right">
            <div class="nav">
                <span :class="sortKey===0?'active':''" @click="getstore(0)">全部</span>
                <span v-for="(sort,index) in sortList" :class="sortKey===index+1?'active':''" :key="sort.s_type + 'sort'" @click="getstore(++index,sort['s_type'])">{{sort.s_text}}</span>
            </div>
            <div class="con">
                <BScroll 
                  v-if="productList.length !== 0"
                 :pullDown="true" 
                 :pullUpLoad="true" 
                 :ScrollBar="true" 
                 :upload="onload" 
                 :loadtime="3000" 
                 :click="true" 
                 :mouseWheel="true" 
                 :onscroll="onscroll" 
                 :nestedScroll="true" 
                 type="y">
                    <li v-for="item in productList" :key="item.pid" @click="$router.history.push(`/productdel/${item.pid}`)">
                        <dl>
                            <dt>
                                <img :src="item.imgUrl">
                            </dt>
                            <dd>
                                <h3>{{item.pname}}</h3>
                                <p>原价：{{item.original_price}}</p>
                                <p>现价:{{item.sale_price}}</p>
                                <p>销量:{{item.sales}}</p>
                                <p>{{item.desc}}</p>
                            </dd>
                        </dl>
                    </li>
                </BScroll>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { _getTypeList, _getSortList, _productList } from '@/api/home'
export default {
  data() {
    return {
      activeKey: 0,
      typeList: [],
      sortList: [],
      sortKey: 0,
      productList: [],
      size: 1,
      st: 0
    }
  },
  methods: {
    onload() {
      this.size = this.size + 1
      this.getstore()
    },
    onscroll() {},
    onChange(index) {
      this.getSortList()
      this.gettypeList({
        t_type: index
      })
      this.sortKey = 0
      this.size = 1
    },
    async getTypeList() {
      let result = await _getTypeList()
      if (result.data.code) {
        this.typeList = result.data.result
      }
    },
    async getSortList() {
      let result = await _getSortList({
        t_type: this.activeKey
      })
      if (result.data.code) {
        this.sortList = result.data.result
      }
    },
    getstore(i, s_type) {
      this.sortKey = i
      this.st = s_type ? s_type : this.st
      let obj =
        i === 0
          ? {
              t_type: this.activeKey
            }
          : {
              t_type: this.activeKey,
              s_type: s_type,
              pagesize: this.size,
              pagecount: 10
            }
      this.gettypeList(obj)
    },
    async gettypeList(action) {
      let result = await _productList(action)
      if (result.data.code) {
        if (this.size !== 1) {
          this.productList = this.productList.concat(result.data.result)
        } else {
          this.productList = result.data.result
        }
      } else {
        this.productList = []
      }
    }
  },
  created() {
    this.getTypeList()
    this.getSortList()
    this.gettypeList({
      t_type: '0'
    })
  }
}
</script>

<style lang="scss">
.classify {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .classify-sear {
    width: 100%;
    height: 40px;
    padding-top: 7px;

    p {
      width: 90%;
      height: 30px;
      background: #e8e8e8;
      margin: 0 auto;
      border-radius: 15px;
      font-size: 12px;
      display: flex;

      .van-icon {
        font-size: 18px;
        margin: 7px 15px;
      }

      span {
        color: rgb(182, 172, 172);
        margin-left: 20px;
        display: inline-block;
        margin-top: 8px;
      }
    }
  }

  .classify-main {
    flex: 1;
    overflow-y: auto;
    border-top: 1px solid #e8e8e8;
    margin-top: 5px;
    display: flex;

    .left {
      width: 25%;
      border-right: 1px solid #ccc;
      height: 100%;
      overflow-y: auto;

      .van-sidebar {
        margin: 0;
        width: 100%;
      }
    }

    .right {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;

      .nav {
        width: 100%;
        border-bottom: 1px solid #e8e8e8;
        height: 30px;
        line-height: 30px;
        color: #ccc;
        font-size: 14px;
        overflow-x: auto;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        span {
          width: 80px;
          text-align: center;
          display: inline-block;
        }

        .active {
          color: #000;
          font-weight: 700;
        }
      }

      .con {
        flex: 1;
        overflow-y: auto;

        li {
          height: 130px;

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
                margin: 10px;
              }
            }

            dd {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>
