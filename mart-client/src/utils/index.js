import axios from 'axios'
let request = axios.create();
request.interceptors.request.use(
    config => {
        config.headers.authorization = localStorage.getItem('vtoken') || '';
        return config;
    },
    err => {
        return err;
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
        return Promise.reject(err.response)
    }
)
export {
    request
}