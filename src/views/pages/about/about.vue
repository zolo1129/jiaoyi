<template lang="pug">
  #e-about
    BaseLayout(
      :navTransparent="true"
    )
      .about-container
        .about-header
          video(
            src="../../../assets/video/about.mp4"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          )
        .about-content
          .about-statistics
            .about-statistics-item
              img.about-statistics-item-img(
                src="../../../assets/images/about-icon1.svg"
              )
              .about-statistics-item-info
                .about-statistics-item-num {{info.userActive}}
                .about-statistics-item-text 活跃账户数
            .about-statistics-item
              img.about-statistics-item-img(
                src="../../../assets/images/about-icon1.svg"
              )
              .about-statistics-item-info
                .about-statistics-item-num {{info.orderTotel}}
                .about-statistics-item-text 订单量（笔）
            .about-statistics-item
              img.about-statistics-item-img(
                src="../../../assets/images/about-icon1.svg"
              )
              .about-statistics-item-info
                .about-statistics-item-num ${{info.orderAmount}}
                .about-statistics-item-text 交易量
          .about-date - 数据截止至{{year}}年{{month}}月 -
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import E from '../../../utils'

export default {
  data() {
    return {
      year: '',
      month: '',
      info: {}
    }
  },
  components: {
    BaseLayout
  },
  created() {
    const now = new Date()
    this.month = now.getMonth() + 1
    this.year = now.getFullYear()
    E.handleRequest(E.api().get('com/getActive'))
      .then(res => {
        console.log(res)
        this.info = res.data.content
      })
  }
}
</script>

<style lang="sass" scoped>
.about

  &-header
    height: 630px
    overflow: hidden

    video
      width: 100%

  &-content
    width: 1200px
    margin: 0 auto

  &-statistics
    display: flex
    padding-top: 72px

    &-item
      display: flex
      flex: 1

      &-img
        margin-right: 8px

      &-num
        color: #ff6200
        font-weight: 500
        font-size: 48px

      &-text
        margin-top: 5px
        color: #999
        font-size: 16px

  &-date
    padding: 26px 0 20px
    color: #ccc
    font-size: 12px
    text-align: center
</style>
