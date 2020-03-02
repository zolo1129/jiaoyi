import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

const isTest = process.env.NODE_ENV === 'none'
const base = isTest ? '/dist' : '/'

Vue.use(Router)

const router = new Router({
  routes,
  base: base,
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  fallback: true
})

export default router
