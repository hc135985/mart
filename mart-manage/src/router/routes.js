import Index from '../containers/Index'
import Login from '../containers/Login'
import Wq from '../containers/Wq'
//二级路由
import Home from '@/containers/index/Home'
import Order from '@/containers/index/Order'
import Comment from '@/containers/index/Comment'
import Address from '@/containers/index/Address'
import Productone from '@/containers/index/Productone'
import ProductTwo from '@/containers/index/ProductTwo'
import ProductList from '@/containers/index/ProductList'
import productDetail from '@/containers/index/product/productDetail'

export default [{
    path: '/index',
    name: 'index',
    component: Index,
    token: true,
    children: [
        {
            path: '/index/home',
            name: 'home',
            token: true,
            component: Home
        },
        {
            path: '/index/address',
            name: 'classift',
            token: true,
            component: Address
        },
        {
            path: '/index/comment',
            name: 'comment',
            token: true,
            component: Comment
        },
        {
            path: '/index/productlist',
            name: 'productlist',
            token: true,
            component: ProductList
        },
        {
            path: '/index/productDetail',
            name: 'productDetail',
            token: true,
            component: productDetail
        },
        {
            path: '/index/order',
            name: 'order',
            token: true,
            component: Order
        },
        {
            path: '/index/productone',
            name: 'productone',
            token: true,
            component: Productone
        },
        {
            path: '/index/producttwo',
            name: 'productTwo',
            token: true,
            component: ProductTwo
        }
    ]
}, {
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/wq',
    name: 'wq',
    component: Wq
},
]