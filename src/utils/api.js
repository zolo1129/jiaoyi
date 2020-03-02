// ajax请求（axios）方法实例创建

import axios from 'axios'
import _config from '../base_config'
import fn from './fn'
import pub from './public'
import router from '../router/router'
import store from '../store/store'

let baseURL = _config.BASE_URL

const createError = (code, msg) => {
  console.error(code, msg)
}

const createWarn = (code, msg) => {
  console.warn(code, msg)
}

const api = () => {
  return axios.create({
    baseURL,
    timeout: 10000,
    // headers: {
    //   'X-Request-ID': fn.randomString(),
    //   'Authorization': window.localStorage.lp_user_token || ''
    // }
  })
}

const storage = window.localStorage

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(res => {
      if (res.data.code === 301) {
        pub.removeUserLocalStorage()
        store.commit('User/CLEAR_USER_LOGIN_INFO')
        router.push({
          name: 'login'
        })
        reject(createError(301, 'need auth'))
      }

      if (res.data.code === 404) {
        createError(404, res.data.message)
        reject(res)
      }

      if (res.data.code === 201) {
        createError(201, res.data.message)
        reject(res)
      }

      if (res.data.code === 200 && !res.data.data) {
        createWarn(400, 'no data')
      }

      resolve(res)
    }).catch(err => {
      console.log(err.response.status)

      if (err.response.status === 500) {
        router.push({
          name: '500'
        })
        createError(500, err.message)
      }

      reject(err)
    })
  })
}

export {
  api,
  handleRequest
}
