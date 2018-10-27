import axios from 'axios'
import router from '../router'
import urls from './config' // 接口配置

import {
    Message
} from 'element-ui'

//axios配置
axios.defaults.baseURL = urls
axios.defaults.headers = {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8'
}
axios.defaults.withCredentials = true
axios.defaults.timeout = 10000

// http request请求 拦截器
axios
    .interceptors
    .request
    .use(request => {
        // request.data = qs.stringify(request.data)
        return request
    }, err => {
        return Promise.reject(err)
    })

//http response响应 拦截器
axios
    .interceptors
    .response
    .use(res => {
        if (res.data.code === 200) {
            return res
        } else {
            Message({
                type: "error",
                message: res.data.msg || res.data.message,
                center: true
            })
            return Promise.reject('error')
        }
    }, err => {
        if (err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求'
                    break
                case 401:
                    err.message = '未授权，请重新登录'
                    Message.error({
                        message: err.message,
                        center: true
                    });
                    router.replace({
                        path: "/login"
                    });
                    break
                case 403:
                    err.message = '拒绝访问'
                    router.replace({
                        path: '/notfound'
                    });
                    break
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break
                case 405:
                    err.message = '请求方法未允许'
                    break
                case 408:
                    err.message = '请求超时'
                    break
                case 500:
                    err.message = '服务器端出错'
                    break
                case 501:
                    err.message = '网络未实现'
                    break
                case 502:
                    err.message = '网络错误'
                    break
                case 503:
                    err.message = '服务不可用'
                    break
                case 504:
                    err.message = '网络超时'
                    break
                case 505:
                    err.message = 'http版本不支持该请求'
                    break
                default:
                    err.message = `连接错误${err.response.status}`
            }
        }
        console.log(err)
    })

export default {
    // 增
    post(url, data, config) {
        return axios.post(url, data)
    },
    // 删
    delete(url, params) {
        return axios.delete(url, {
            params: params
        })
    },
    // 改
    put(url, data) {
        return axios.put(url, data)
    },
    // 查
    get(url, params) {
        return axios.get(url, {
            params: params
        })
    },
    getBlob(url) {
        return axios({
            method: 'get',
            url,
            responseType: 'blob'
        })
    },
    postBlob(url, data) {
        return axios({
            method: 'POST',
            url,
            data,
            responseType: 'blob'
        })
    }
}