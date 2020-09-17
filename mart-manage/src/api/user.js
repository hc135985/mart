/*
 * @Author: heinan 
 * @Date: 2020-09-09 14:05:55 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 10:37:04
 */

import request from '@/utils/request';

export function _login({ username, password }) {
  const url = '/user/login';
  return request.post(url, {
    username,
    password
  })
}

export function _getIdByToken(token) {
  const url = '/user/getUserByToken';
  return request.get(url, {
    params: { token }
  })
}

export function _getUserById(uid) {
  const url = '/user/getUserInfo';
  return request.get(url, {
    params: { uid }
  })
}

export function _avatarUpload({ avatarForm, uid }) {
  const url = `/user/upload?uid=${uid}`;
  return request.post(url, avatarForm)
}

export function _getAvatarList({ uid, pageSize, pageCount }) {
  const url = `/user/avatarList`;
  return request.get(url, {
    params: {
      uid,
      pageSize,
      pageCount
    }
  })
}