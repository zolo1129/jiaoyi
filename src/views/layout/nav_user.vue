<template lang="pug">
  #nav-user
    .nav-user-container(
      v-if="userInfo === null"
    )
      router-link.nav-user-btn.register(to="/user/registe") 注册
      router-link.nav-user-btn.login(to="/user/login") 登录
    .nav-user-container(
      v-else
    )
      .nav-user-content
        .nav-user-avatar
          img(
            :src="avatar"
          )
        .nav-user-name {{userInfo.refName}}
        .nav-user-menu
          .nav-user-menu-item 退出
</template>

<script>
import avatar from '../../assets/images/avatar-default.svg'

export default {
  data() {
    return {
      avatar,
      userInfo: null
    }
  },
  created() {
    const storage = window.localStorage
    const userInfo = storage.getItem('follow_user_info')

    if (userInfo !== null) {
      this.userInfo = JSON.parse(userInfo)
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.nav-user

  &-container
    display: flex
    align-items: center
    height: 100%

  &-btn
    display: block
    height: 34px
    line-height: 34px
    padding: 0 24px
    margin: 0 4px
    border-radius: 18px
    cursor: pointer

    &.register
      color: #ff6200
      border: 1px solid #ff6200

      &:hover
        background-color: #f05102
        border: 1px solid #f05102
        color: #fff

    &.login
      background-color: #ff6200
      color: #fff

      &:hover
        background-color: #f05102

  &-content
    display: flex
    align-items: center
    cursor: pointer
    position: relative
    height: 60px

    &:hover .nav-user-menu
      display: block

  &-avatar
    width: 40px
    height: 40px
    border-radius: 50%
    overflow: hidden
    margin-right: 12px

    img
      width: 100%
      height: 100%

  &-menu
    position: absolute
    top: 100%
    right: -10px
    background-color: #fff
    display: none
    border-top: 1px solid #e9e9e9

    &-item
      min-width: 140px
      height: 50px
      line-height: 50px
      padding: 0 20px
      border-bottom: 1px solid #e9e9e9
      cursor: pointer

      &:hover
        color: #ff6200

      &:last-child
        border-bottom: none
</style>
