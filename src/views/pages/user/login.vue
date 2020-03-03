<template lang="pug">
  #e-login
    .login-container
      router-link.login-registe(
        to="/user/registe"
      ) 注册
      .login-content
        .login-title 密码登录
        .login-item
          input(
            type="text"
            placeholder='用户名'
            v-model="request.username"
          )
        .login-item
          input(
            type="password"
            placeholder='密码'
            v-model="request.password"
          )
      .login-btn(
        @click="loginHandler"
      ) 登录
</template>

<script>
import E from '../../../utils'

export default {
  data() {
    return {
      request: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginHandler() {
      if (this.request.username === '') {
        this.$message.warning('请输入姓名')
        return false
      }

      if (this.request.password === '') {
        this.$message.warning('请输入密码')
        return false
      }

      E.handleRequest(E.api().post('admin/login', this.request))
        .then(res => {
          console.log(res)

          if (res.data.code === 200001) {
            this.$message.warning(res.data.message)
          } else {
            const storage = window.localStorage

            storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))

            this.$router.push({
              name: 'index'
            })
          }
        })
    }
  }
}
</script>

<style lang="sass" scoped>
#e-login
  height: 100%

.login

  &-container
    width: 100%
    height: 100%
    padding: 50px 215px
    position: relative
    display: flex
    flex-direction: column
    justify-content: center

  &-registe
    position: absolute
    top: 20px
    right: 30px
    color: #FF6200
    font-size: 16px

  &-content
    margin-bottom: 30px

  &-title
    font-size: 24px
    margin-bottom: 30px

  &-item
    height: 48px
    border: 1px solid #ebebeb
    border-radius: 2px
    margin-bottom: 12px

    &::last-child
      margin-bottom: 0

    input
      width: 100%
      height: 100%
      padding: 0 20px
      outline: none
      caret-color: #FF6200
      box-sizing: border-box
      font-size: 14px

  &-btn
    background-color: #FF6200
    border-radius: 2px
    width: 100%
    height: 50px
    line-height: 50px
    color: #fff
    font-size: 16px
    cursor: pointer
    margin-top: 20px
    text-align: center

    &:hover
      background-color: #F15001
</style>
