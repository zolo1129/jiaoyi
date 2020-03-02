// 多次（至少两次）复用的公共方法

const pub = {}

const storage = window.localStorage

// 清除登录信息
pub.removeUserLocalStorage = () => {
  storage.removeItem('lp_user_islogin')
  storage.removeItem('lp_user_token')
  storage.removeItem('lp_user_sup')
  storage.removeItem('lp_user_info')
  storage.removeItem('lp_area_list')
  storage.removeItem('lp_user_menu')
  storage.removeItem('lp_user_permission')
  storage.removeItem('lp_area_selected')
}

// 清除定时循环任务
pub.clearTimer = timer => {
  if (timer) {
    console.log('clearTimer')
    clearInterval(timer)
  }
}

export default pub