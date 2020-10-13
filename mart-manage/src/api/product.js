const { request } = require('../utils/request.js')

export async function _getProductList() {
    return await request.get('/product/list')
}

export async function _ProductAdd(acction) {
    return await request.post('/product/add', acction)
}

export async function _getproduct(pid) {
    return await request.get(`/product/${pid}`)
}

export async function _searchByType(keyword) {
    return await request.get(`/sea`, {
        params: { keyword }
    })
}

export async function _getproducttwo(action) {
    if (action) return await request.get('/getSortList', { params: action })
    return await request.get('/getSortList')
}

export async function _getproductone() {
    return await request.get(`/getTypeList`)
}

export async function _ProductUpdata(acction) {
    return await request.post('/product/edit', acction)
}


export async function _ProductDelete(pid) {
    return await request.delete('/product/del', { params: { pid } })
}

export async function _ProductTypeAdd(acction) {
    return await request.post('/product/type/add', acction)
}
export async function _ProductTypeEdit(acction) {
    return await request.put('/product/type/edit', acction)
}

export async function _ProductTypeDel(acction) {
    return await request.delete('/product/type/del', { params: acction })
}

export async function _ProductSortAdd(acction) {
    return await request.post('/product/sort/add', acction)
}

export async function _ProductSortEdit(acction) {
    return await request.put('/product/sort/edit', acction)
}

export async function _ProductSortDel(acction) {
    return await request.delete('/product/sort/del', { params: acction })
}
