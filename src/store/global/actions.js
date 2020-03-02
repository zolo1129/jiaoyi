import E from '../../utils'
import fn from '../../utils/fn';

export default {
  // 获取园区列表
  GET_AREA_LIST_ASYNC(store, data) {
    return E.handleRequest(E.api().get('area/list/' + data))
      .then(res => {
        if (res.data.data) {
          store.commit('SET_AREA_LIST', res.data.data)
          return res.data.data
        }
      })
  },
  // 获取报警信息
  GET_WARN (store) {
    return E.handleRequest(E.api().get('waring/info/warn'))
      .then(res => {
        if (res.data.data) {
          store.commit('SET_WARN', res.data.data)
          return res.data.data
        }
      })
  }
}