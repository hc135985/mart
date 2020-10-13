import { request } from '../utils/index'

export async function _getBannerList() {
    return await request.get('/carousel/list')
}

export async function _getSortList(action) {
    if (action) return await request.get('/getSortList', { params: action })
    return await request.get('/getSortList')
}


export async function _productList(action) {
    return await request.get('/product/typeList', { params: action })
}

export async function _getTypeList() {
    return await request.get('/getTypeList')
}

export async function _productDefilt(pid) {
    return await request.get(`/product/${pid}`)
}