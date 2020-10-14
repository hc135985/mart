const { request } = require('../utils/request.js')

export async function _getCommentAll() {
    return await request.get('/comment/all')
}
export async function _commentAdd(acction) {
    return await request.post('/comment/add', acction)
}
export async function _commentdel(cid) {
    return await request.delete('/comment/del', {
        params: { cid }
    })
}