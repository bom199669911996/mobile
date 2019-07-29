import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
//   如果响应结果对象中有data，则直接返回这个data数据
//  如果对象结果中没有data，则不作任何处理，直接返回这个数据
  return response.data.data || response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出request模块
export default request
