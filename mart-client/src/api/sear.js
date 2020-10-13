import { request } from '../utils/index'


export async function _getsearList(action) {
    return await request.get('/product/sea', { params: action })
}

