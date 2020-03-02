<template lang="pug">
  #e-trading-strategy-detail-header
    .trading-detail-header
      .trading-detail-header-container
        .trading-detail-header-avatar
          img(src="")
        .trading-detail-header-context
          .trading-detail-header-introduction
            .trading-detail-header-nickname {{summary.signalName}}
          .trading-detail-header-info
</template>

<script>
export default {
  props: {
    summary: {
      type: Object
    }
  }
}
</script>

<style lang="sass" scoped>
.trading-detail

  &-header
    display: flex
    background-color: rgba(0, 0, 0, .5)

    &-container
      display: flex
      width: 1200px
      margin: 0 auto
      padding: 30px 0

    &-avatar
      width: 160px
      height: 160px
      border-radius: 50%
      overflow: hidden
      background-color: #eee

      img
        display: block
        width: 100%
        height: 100%

    &-context
      flex: 1
      margin-left: 30px
      padding-top: 10px

    &-nickname
      font-size: 34px
      color: #fff
</style>
