/*
 * @Author: heinan 
 * @Date: 2020-09-11 10:48:00 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-11 12:02:50
 */


import request from '@/utils/request';

export function _getCarouselList(uid) {
  const url = '/carousel/list';
  return request.get(url, {
    params: {
      type: "all"
    }
  })
}

export function _editCarouselById(carousel) {
  const url = '/carousel/edit';
  return request.put(url, carousel)
}

export function _addCarousel(carousel) {
  const url = '/carousel/add';
  return request.post(url, carousel)
}

export function _delCarousel(cid) {
  const url = '/carousel/del';
  return request.delete(url, {
    params: {
      cid
    }
  })
}
