/*
 * @Author: heinan 
 * @Date: 2020-09-09 14:27:32 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-16 15:09:03
 */

import { UPDATE_TOKEN, UPDATE_UID, UPDATE_USERINFO } from '@/store/types';
import { _login, _getIdByToken, _getUserById } from '@/api/user';
import { setCookie } from '@/utils';
import { routerRedux } from 'dva/router';
import { getCookie } from '@/utils';



export default {
  namespace: 'user',
  state: {
    token: getCookie('token') || "",
    uid: getCookie('uid') || "",
    userInfo: {}
  },
  reducers: {
    [UPDATE_TOKEN](state, { payload }) {
      return {
        ...state,
        token: payload
      }
    },
    [UPDATE_UID](state, { payload }) {
      console.log(payload)
      return {
        ...state,
        uid: payload,
      }
    },
    [UPDATE_USERINFO](state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      }
    }
  },
  effects: {
    *login({ payload }, { put, call }) {
      const result = yield call(_login, payload);
      if (result.data.code) {
        setCookie('token', result.data.token)
        yield put({ type: UPDATE_TOKEN, payload: result.data.token })
        yield put(routerRedux.push('/app'));
      }
    },
    *getIdByToken({ payload }, { put, call }) {
      const result = yield call(_getIdByToken, payload);
      setCookie('uid', result.data.uid)
      yield put({ type: UPDATE_UID, payload: result.data.uid })
    },
    *getUserById({ payload }, { put, call }) {
      const result = yield call(_getUserById, payload);
      yield put({ type: UPDATE_USERINFO, payload: result.data.data })
    },
  }
}