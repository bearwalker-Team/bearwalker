import axios from 'axios'
import qs from 'qs'
import { api } from './apiConfig'
axios.defaults.baseURL = api
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 拦截返回请求参数
  config.headers.token = 'asdsad'
  return config
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // console.log(response)
  return response.data
}, function (error) {
  console.log(error)
})
function axiospost (url, data, config) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data), config).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
function axiosget (url, data, config) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}
function axiosRequest (options) {
  if (!options.url) return false
  return new Promise((resolve, reject) => {
    axios({
      url: options.url,
      method: options.type || 'get',
      params: options.data || {},
      data: options.data || {}
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export {
  axiosget,
  axiospost,
  axiosRequest
}
