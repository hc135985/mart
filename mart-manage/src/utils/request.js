/*
 * @Author: heinan 
 * @Date: 2020-09-09 14:06:12 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-09-15 09:28:15
 */

import axios from 'axios';
import { getCookie } from '@/utils';

const request = axios.create();

request.interceptors.request.use((config) => {
  config.headers.authorization = getCookie('token') || ""
  return config;
}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const { status } = error.response;
  switch (status) {
    case 401:
      window.location.href = "/user/login"
      break;
    case 403:
      window.location.href = "/user/login"
    default:
      break;
  }
  return Promise.reject(error)
})

export default request;