<template lang="pug">
  #e-registe
    .registe-container
      router-link.registe-login(
        to="/user/login"
      ) 登录
      .registe-content
        .registe-title Hi, 欢迎加入Followme
        .registe-item
          input(
            type="text"
            placeholder='姓名'
            v-model="request.username"
          )
        .registe-item
          input(
            type="text"
            placeholder='介绍人ID'
            v-model="request.introducer"
          )
        .registe-item
          input(
            type="text"
            placeholder='昵称'
            v-model="request.refName"
          )
        .registe-item
          input(
            type="num"
            maxlength='11'
            placeholder='手机号'
            v-model="request.mobile"
          )
        .registe-item
          input(
            type="text"
            placeholder='省份'
            v-model="request.province"
          )
        .registe-item
          input(
            type="text"
            placeholder='城市'
            v-model="request.city"
          )
        .registe-item
          input(
            type="text"
            placeholder='Email'
            v-model="request.email"
          )
        .registe-item
          input(
            type="password"
            placeholder='密码'
            v-model="request.password"
          )
        .registe-item
          input(
            type="password"
            placeholder='确认密码'
            v-model="request.password2"
          )
      .registe-btn(
        @click="registeHandler"
      ) 注册
      .registe-agreement
        span 注册即代表同意
        span.click(
          @click="agreementHandler"
        ) 《Followme用户协议》
    transition(name="fade")
      .registe-agreement-mark(
        v-if="agreementShow"
      )
        .registe-agreement-content
          .registe-agreement-close(
            @click="agreementHandler"
          )
          .registe-agreement-title Followme用户协议
          .registe-agreement-context
</template>

<script>
import E from '../../../utils'

export default {
  data() {
    return {
      agreementShow: false,
      request: {
        username: '',
        refName: '',
        mobile: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    agreementHandler() {
      this.agreementShow = !this.agreementShow
    },
    registeHandler() {
      if (this.request.username === '') {
        this.$message.warning('请输入姓名')
        return false
      }

      if (this.request.introducer === '') {
        this.$message.warning('请输入介绍人ID')
        return false
      }

      if (this.request.refName === '') {
        this.$message.warning('请输入昵称')
        return false
      }

      if (this.request.mobile === '') {
        this.$message.warning('请输入手机号')
        return false
      }

      if (this.request.email === '') {
        this.$message.warning('请输入邮箱')
        return false
      }

      if (this.request.password === '') {
        this.$message.warning('请输入密码')
        return false
      }

      if (this.request.password2 === '') {
        this.$message.warning('请确认密码')
        return false
      }

      if (this.request.password !== this.request.password2) {
        this.$message.warning('两次输入的密码不一致')
        return false
      }

      E.handleRequest(E.api().post('admin/registered', this.request))
        .then(res => {
          console.log(res)

          if (res.data.code === 101) {
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
.registe

  &-container
    width: 100%
    padding: 50px 215px
    position: relative

  &-login
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

  &-agreement
    margin-top: 12px
    color: #999

    .click
      cursor: pointer

      &:hover
        color: #FF6200

    &-mark
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.5)

    &-content
      width: 840px
      height: 560px
      position: fixed
      top: 50%
      left: 50%
      margin: -250px 0 0 -400px
      background-color: #fff
      padding: 20px

    &-close
      width: 30px
      height: 30px
      position: absolute
      top: 20px
      right: 30px
      cursor: pointer

      &:before
        content: ""
        position: absolute
        top: 50%
        left: 50%
        background-color: #ccc
        width: 24px
        height: 4px
        border-radius: 2px
        transform: translate(-50%, -50%) rotate(45deg)

      &:after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        background-color: #ccc
        width: 4px
        height: 24px
        border-radius: 2px
        transform: translate(-50%, -50%) rotate(45deg)

    &-title
      font-size: 18px
      font-weight: bold
      margin: 30px 0
      text-align: center

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


