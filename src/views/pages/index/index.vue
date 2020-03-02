<template lang="pug">
  #e-index
    BaseLayout
      .index-header
        .index-header-bk
        .index-header-content
          .index-header-title FollowQuant
            span.index-header-title-sub TM
          .index-header-sub-title 基于用户交易数据分析的量化策略开发平台与智能交易全流程解决方案的服务提供商，帮助企业提升风控管理与业务盈利能力。
          .index-header-btn
            router-link.index-header-btn-item(to="/") 在线申请
            router-link.index-header-btn-item(to="/user/login") 登录
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

export default {
  components: {
    BaseLayout
  }
}
</script>

<style lang="sass" scoped>
.index

  &-header
    height: 713px
    background: url('../../../assets/images/header.png') no-repeat center center
    background-size: cover
    position: relative

    &-bk,
    &-content
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0

    &-bk
      background: linear-gradient(123deg,rgba(0,2,9,.79),#000)
      opacity: .7

    &-content
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      text-align: center
      color: #fff
      font-size: 18px

    &-title
      font-size: 82px
      font-weight: 500
      position: relative
      padding: 16px 0

      &-sub
        vertical-align: top
        padding: 0 24px
        font-size: 18px

    &-sub-title
      padding: 0 10% 52px

    &-btn
      width: 500px
      display: flex
      justify-content: space-between

      &-item
        display: block
        font-size: 18px
        color: #fff
        width: 224px
        height: 65px
        line-height: 65px
        background: #ff6200
        cursor: pointer
</style>


