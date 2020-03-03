<template lang="pug">
  #e-trading-strategy-item
    router-link.trading-list-card(
      :to="`/trading_strategy/detail/${info.signalId}`"
    )
      .trading-list-card-header
        .trading-list-card-info
          .trading-list-card-nickname {{info.username}}
          .trading-list-card-level(
            v-if="type === 'trading'"
          ) {{info.level}}
          .trading-list-card-server {{info.brokerName}}
        .trading-list-card-avatar
          img(
            :src="info.avatarUrl ? url + info.avatarUrl : null"
          )
      .trading-list-card-content
        .trading-list-card-list
          .trading-list-card-list-item
            .trading-list-card-list-label 近13周最大回撤
            .trading-list-card-list-balue 23%
          .trading-list-card-list-item
            .trading-list-card-list-label 实盘跟随总额
            .trading-list-card-list-balue {{info.followsTradeAmount}}
          .trading-list-card-list-item
            .trading-list-card-list-label 跟随者收益
            .trading-list-card-list-balue ${{info.followsProfit}}
          .trading-list-card-list-item
            .trading-list-card-list-label 交易周数
            .trading-list-card-list-balue {{info.tradeWeeks}}
      .trading-list-card-footer.trading(
        v-if="type === 'trading'"
      )
        .trading-list-card-footer-left
          span 累计订阅数
          span.num {{info.followsHistory}}
        .trading-list-card-footer-right
          .trading-list-card-footer-btn 免费订阅
      .trading-list-card-footer.follow(
        v-if="type === 'follow'"
      )
        .trading-list-card-footer-btn +关注
</template>

<script>
import _config from '../../../base_config'

export default {
  data() {
    return {
      url: _config.BASE_URL
    }
  },
  props: {
    info: {
      type: Object
    },
    type: {
      typr: String,
      default: 'trading'
    }
  }
}
</script>

<style lang="sass" scoped>
#e-trading-strategy-item
  width: calc((100% - 36px) / 4)
  margin: 0 12px 15px 0

  &:nth-child(4n)
    margin-right: 0

.trading-list

  &-card
    display: block
    background: #fff
    transition: all ease .3s

    &:hover
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2)

    &-header
      padding: 20px 20px 0
      display: flex
      justify-content: space-between

    &-nickname
      font-size: 16px
      font-weight: 600
      color: #333

    &-level
      width: 20px
      height: 14px
      line-height: 14px
      margin: 4px 0
      border-radius: 4px 2px 4px 2px
      color: #fff
      background-color: #aaa
      text-align: center
      font-size: 12px

    &-server
      font-size: 12px
      color: #999

    &-avatar
      width: 50px
      height: 50px
      border-radius: 50%
      overflow: hidden
      background-color: #eee

      img
        display: block
        width: 100%
        height: 100%

    &-list
      padding: 15px 20px

      &-item
        display: flex
        justify-content: space-between
        align-items: center
        height: 23px
        margin-bottom: 10px

      &-label
        font-size: 12px
        color: #999

      &-value
        font-size: 14px
        color: #666

        &.present
          font-size: 16px
          font-weight: 500
          color: #1fbb95

    &-footer
      display: flex
      height: 50px
      border-top: 1px solid #f0f0f0

      &.trading
        justify-content: space-between
        align-items: center
        padding: 0 20px

      &-left
        font-size: 12px
        color: #999

        .num
          color: #333

      &.follow
        justify-content: center
        align-items: center

      &-btn
        font-size: 14px
        color: #ff6022
        border-radius: 16px
        border: 1px solid #ff6022
        padding: 5px 12px
        cursor: pointer
        transition: all ease .3s

        &:hover
          background-color: #ff6022
          color: #fff
</style>
