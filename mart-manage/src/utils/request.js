import axios from 'axios'
import { promises } from 'dns';
// const request = require('../lib/ajax/index');
const request = axios.create()

request.interceptors.request.use(
    config => {
        config.headers.authorization = localStorage.getItem('token') || ''
        return config
    },
    err => {
        return err
    }
)
request.interceptors.response.use(
    config => {
        return config
    },
    err => {
        if (err.response.status === 401) {
            window.location.href = '/login'
        }
        return Promise.reject(err)
    }
)

export {
    request
} 