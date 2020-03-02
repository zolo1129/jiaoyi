export default {
  // 园区列表
  SET_AREA_LIST (state, data) {
    if (data) {
      state.area_list = data,
      state.area_select = data[0]
      state.area_weather = data[0].weatherCityId
    }
  },
  UPDATE_AREA_SELECT (state, data) {
    state.area_select = data
  },
  UPDATE_AREA_WEATHER (state, data) {
    state.area_weather = data.weatherCityId
  },
  // 设置报警
  SET_WARN (state, data) {
    state.has_warn = data.warn
  },
  // 清除报警
  CLEAR_WARN (state) {
    state.has_warn = 0
  },
  // 启动loading
  SET_SYSTEM_LOADING (state) {
    state.system_loading = true
  },
  // 清除loading
  CLEAR_SYSTEM_LOADING (state) {
    state.system_loading = false
  },
  // 菜单抽屉是否显示
  SET_DRAWER(state, show) {
    state.drawer_show = show
  }
}