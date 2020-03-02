<template lang="pug">
  #e-trading-strategy-filter
    .trading-filter-container
      .trading-filter-top.e-flex
        .trading-filter-top-left 优质上榜
        router-link.trading-filter-top-right(
          to="/user/registe"
        ) 成为交易员
      .trading-filter-content
        .trading-filter-item.e-flex
          .trading-filter-item-label 经销商：
          .trading-filter-item-all 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text aaa
              input(type="checkbox")
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text bbb
              input(type="checkbox")
        .trading-filter-item.e-flex
          .trading-filter-item-label 账户评级：
          .trading-filter-item-all 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text aaa
              input(type="checkbox")
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text bbb
              input(type="checkbox")
        .trading-filter-item.e-flex
          .trading-filter-item-label 收益率：
          .trading-filter-item-all 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text aaa
              input(type="checkbox")
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text bbb
              input(type="checkbox")
        .trading-filter-item.e-flex
          .trading-filter-item-label 近13周最大回撤：
          .trading-filter-item-all 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text aaa
              input(type="checkbox")
            label.trading-filter-item-checkbox
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text bbb
              input(type="checkbox")

</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.trading-filter

  &-container
    margin: 20px auto
    background-color: #fff

  &-top
    justify-content: space-between
    height: 50px
    padding: 0 20px
    border-bottom: 1px solid #e6e6e6
    font-size: 16px
    color: #ff6200

    &-left,
    &-right
      height: 50px
      line-height: 50px
      cursor: pointer

    &-left
      border-bottom: 2px solid #ff6200

    &-right
      color: #ff6200

  &-content
    padding: 8px 20px

  &-item
    padding: 10px 0
    align-items: center

    &-label
      width: 120px
      color: #999

    &-all
      width: 48px
      height: 24px
      line-height: 24px
      color: #fff
      background-color: #ff6200
      border-radius: 12px
      text-align: center
      margin-right: 32px

    &-checkbox
      display: flex
      cursor: pointer
      margin-right: 30px

      &-inner
        width: 16px
        height: 16px
        border: 1px solid #ccc
        border-radius: 2px
        margin-right: 6px

      input
        display: none
</style>
