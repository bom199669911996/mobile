import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'

Vue.use(Vant)
// Vue.use(Vuex)

// const store = new Vuex.Store({
// 是对象
// 作用：声明数据
// state中的数据是交给组件去使用的
// 组件中使用数据 可以{{this.$store.state.count}}
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
