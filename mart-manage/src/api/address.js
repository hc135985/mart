const { request } = require('../utils/request.js')

export async function _getaddressList() {
    return await request.get('/address/all')
}

export async function _addressAdd(action) {
    return await request.post('/address/add', action)
}

export async function _addressdel(aid) {
    return await request.delete('/address/del', { params: { aid } })
}