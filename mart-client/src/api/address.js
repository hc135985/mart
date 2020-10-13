import { request } from '../utils/index'

export async function _getAddressList(action) {
    return await request.get('/address/list', { params: action })
}



export async function _getAddresscity() {
    return await request.get('/address/city')
}


export async function _addAddress(action) {
    return await request.post('/address/add', action)
}


export async function _editAddress(action) {
    return await request.put('/address/edit', action)
}


export async function _delAddress(action) {
    return await request.delete('/address/del', { params: action })
}