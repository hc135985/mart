const { request } = require('../utils/request.js')

export async function _login(acction) {
    return await request.post('/user/login', acction)
}

export async function _getUserIdByToken(token) {
    return await request.get('/user/getUserPermissions', { params: { token } })
}

export async function _getUserByToken(token) {
    return await request.get('/user/getUserByToken', { params: { token } })
}
export async function _getUserInfoByUid(uid) {
    return await request.get('/user/getUserInfo', { params: { uid } })
}