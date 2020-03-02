import Vue from 'vue'
import Vuex from 'vuex'

// 全局
import Global from './global'

const isDev = process.env.NODE_ENV === 'development'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: isDev,
  plugins: [

  ],
  modules: {
    Global
  }
})

export default store
