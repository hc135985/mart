const { request } = require('../utils/request.js')

export async function _getCarouselList(acction) {
    return await request.get('/carousel/all', { params: acction })
}
export async function _imgUpload(acction, uid) {
    let url = uid ? `/user/upload?uid=${uid}` : '/user/upload'
    return await request.post(url, acction)
}

export async function _addCarouselList(acction) {
    let url = '/carousel/add'
    return await request.post(url, acction)
}
export async function _delCarousel(acction) {
    return await request.delete('/carousel/del', { params: acction })
}

export async function _editCarousel(acction) {
    return await request.put('/carousel/edit', acction)
}
