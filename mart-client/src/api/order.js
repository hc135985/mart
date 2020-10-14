import { request } from '../utils/index'

export async function _getOrderList(action) {
    return await request.get('/order/list', { params: action })
}

export async function _addOrder(action) {
    return await request.post('/order/add', action)
}

export async function _delOrder(action) {
    return await request.delete('/order/del', { params: action })
}

export async function _updataOrder(action) {
    return await request.put('/order/updateStatus', action)
}
