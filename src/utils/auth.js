// 用 localStorage 存储token

const token_key = 'token'
// 设置值
export const setuser = data => {
  window.localStorage.setItem(token_key, JSON.stringify(data))
}
// 取出值
export const getuser = () => {
  return JSON.parse(window.localStorage.getItem(token_key))
}
// 移除值
export const removeuser = () => {
  window.localStorage.removeItem(token_key)
}