// 配置vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 实现目的： 使用vuex将token保存，方便在多个组件内存中共享使用
// 导入auth模块
import * as auth from '@/utils/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 初始化的时候从本地存储中获取数据，防止刷新丢失tooken
    user: auth.getuser()
  },
  mutations: {
    // 登录成功，调用mutation更新容器中的user的状态
    setuser (state, data) {
    // 修改state
      state.user = data
      // 将数据放到本地存储
      auth.setuser(state.user)
    }
  },
  actions: {

  }
})
export default store
