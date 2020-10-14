import { request } from '../utils/index'


export async function _passwordlogin(action) {
    return await request.post('/user/login', action)
}

export async function _getverify(acction) {
    return await request.get('/user/verifyCode', {
        params: acction
    })
}
export async function _getMmailVerify(acction) {
    return await request.get('/user/SendMailVerifyCode', {
        params: acction
    })
}
export async function _modilelogin(action) {
    return await request.post('/user/modileLogin', action)
}

export function _modifyPwdByMobile(action) {
    return request.put('/user/modifyPwdByMobile', action)
}
export function _modifyPwdByEmail(action) {
    return request.put('/user/modifyPwdByEmail', action)
}

export async function _registryuser(action) {
    return await request.post('/user/registry', action)
}

export async function _getUserIdByToken() {
    return await request.get('/user/getUserByToken', {
        params: {
            token: localStorage.getItem('vtoken')
        }
    })
}
export async function _getUserInfoByUid(uid) {
    return await request.get('/user/getUserInfo', {
        params: {
            uid
        }
    })
}
export async function _setUserInfoByUid(action) {
    return await request.put('/user/updataUserInfo', action)
}


export async function _imgUpload(acction, uid) {
    let url = uid ? `/user/upload?uid=${uid}` : '/user/upload'
    return await request.post(url, acction)
}


export async function _getAvatarList(acction) {
    return await request.get('/user/historyAvatar', { params: acction })
}

export async function _cutAvatar(acction) {
    return await request.put('/user/cutAvatar', acction)
}