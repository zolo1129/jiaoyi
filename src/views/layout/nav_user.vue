<template lang="pug">
  #nav-user
    .nav-user-container
      router-link.nav-user-btn.register(to="/user/registe") 注册
      router-link.nav-user-btn.login(to="/user/login") 登录
</template>

<script>
import avatar from '../../assets/images/avatar.svg'

export default {
  data() {
    return {
      avatar,
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

  &-avatar
    width: 32px
    height: 32px
    border-radius: 50%
    overflow: hidden
    margin-right: 24px

    img
      width: 100%
      height: 100%
</style>
