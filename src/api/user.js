// 目的：把用户的相关数据请求都封装到api模块中
// 1--引入request模块
import request from '@/utils/request.js'
// 2--封装登录请求的方法
export const login = ({
  mobile,
  code
}) => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
