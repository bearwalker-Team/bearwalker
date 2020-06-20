import { axiosRequest } from './axios'

function setbanner (data, success, fail) {
  axiosRequest({
    url: '/setbanner',
    type: 'get',
    data: data
  }).then(() => {
    success()
  }).catch(() => {
    fail()
  })
}
function setnews (data, success, fail) {
  axiosRequest({
    url: '/setnews',
    type: 'get',
    data: data
  }).then(() => {
    success()
  }).catch(() => {
    fail()
  })
}
function deletebannermes (data, success, fail) {
  axiosRequest({
    url: '/deletebanner',
    type: 'get',
    data: data
  }).then(() => {
    success()
  }).catch(() => {
    fail()
  })
}
function uploadGoods (options) {
  axiosRequest({
    url: '/setgoods',
    type: 'post',
    data: options.data,
    header: { 'Content-Type': 'multipart/form-data' }
  }).then((res) => {
    options.success(res)
  })
}

export {
  deletebannermes,
  setnews,
  setbanner,
  uploadGoods
}
