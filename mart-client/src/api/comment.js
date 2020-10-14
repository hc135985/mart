import { request } from '../utils/index'

export async function _getCommentList(action) {
    return await request.get('/comment/list', { params: action })
}
