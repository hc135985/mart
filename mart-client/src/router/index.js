import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../containers/Index.vue'),
    children: [
      {
        path: '/index/home',
        name: 'index-Home',
        component: () => import('../containers/two/Home.vue'),
      },
      {
        path: '/index/classify',
        name: 'index-classify',
        component: () => import('../containers/two/Classify.vue'),
      },
      {
        path: '/index/shop',
        name: 'index-shop',
        component: () => import('../containers/two/Shop.vue'),
      },
      {
        path: '/index/my',
        name: 'index-my',
        component: () => import('../containers/two/My.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../containers/user/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../containers/user/Register.vue'),
  },
  {
    path: '/forgetpwd',
    name: 'forgetpwd',
    component: () => import('../containers/user/ForgetPwd.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../containers/product/Search.vue'),
  }, {
    path: '/productdel/:pid',
    name: 'productDefilter',
    component: () => import('../containers/product/productDefilt.vue'),
  },
  {
    path: '/setuserinfo/:uid',
    name: 'setUserInfo',
    component: () => import('../containers/user/SetUserInfo.vue'),
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../containers/address/Address.vue'),
  },
  {
    path: '/addaddress',
    name: 'addaddress',
    component: () => import('../containers/address/AddAddress.vue'),
  },
  {
    path: '/editadd',
    name: 'editadd',
    component: () => import('../containers/address/EditAdd.vue'),
  },
  {
    path: '/setAm',
    name: 'setAm',
    component: () => import('../containers/product/setAm.vue'),
  },
  {
    path: '/order/obligation',
    name: 'obligation',
    component: () => import('@/containers/order/Obligation.vue')
  },
  {
    path: '/order/totakedelivery',
    name: 'ToTakeDelivery',
    component: () => import('@/containers/order/ToTakeDelivery.vue')
  },
  {
    path: '/order/hasbeenshipped',
    name: 'HasbeenShipped',
    component: () => import('@/containers/order/HasbeenShipped.vue')
  },
  {
    path: '/order/refund',
    name: 'Refund',
    component: () => import('@/containers/order/Refund.vue')
  }, {
    path: '/avatar',
    name: 'Avatar',
    component: () => import('@/containers/user/Avatar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && to.path !== '/register' && to.path !== '/forgetpwd') {
    if (localStorage.getItem('vtoken')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
