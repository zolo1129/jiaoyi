import Vue from 'vue'
import App from './views/app.vue'
import router from './router/router'
import store from './store/store'

// 基础样式
import './assets/styles/global.sass'

// 基础配置
import _config from './base_config'
Vue.prototype._config = _config

// const storage = window.localStorage

// 路由守卫
// router.beforeEach((to, from, next) => {

//   // 页面跳转时显示页面loading
//   // store.commit('Global/SET_SYSTEM_LOADING')

//   if (to.meta.auth) {
//     console.log('页面需要登录')
//     if (storage.lp_user_islogin !== '1') {
//       console.log('用户未登录')
//       // store.commit('User/CLEAR_USER_LOGIN_INFO')
//       next({
//         path: '/user/login'
//       })
//     } else {
//       console.log('用户已登录')
//       if (to.meta.access === 'super' && storage.lp_user_sup === '1' || to.meta.access === 'user' && storage.lp_user_sup === '0') {
//         document.title = to.meta.title ? `${_config.TITLE}——${to.meta.title}` : _config.TITLE
//         next()
//       } else {
//         console.log('用户没有权限')
//         next({
//           path: '/'
//         })
//       }
//     }
//   } else {
//     document.title = to.meta.title ? `${_config.TITLE}——${to.meta.title}` : _config.TITLE
//     next()
//   }
// })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${_config.TITLE}——${to.meta.title}` : _config.TITLE
  next()
})

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
