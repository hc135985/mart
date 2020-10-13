const { request } = require('../utils/request.js')

export async function _getorderList() {
    return await request.get('/order/all')
}

export async function _orderAdd(action) {
    return await request.post('/order/add', action)
}


export async function _orderupdata(action) {
    return await request.put('/order/edit', action)
}
