<template lang="pug">
  #e-trading-strategy
    .e-container
      .trading-container
        TradingFilter
        .trading-list.e-flex
          TradingItem.trading-list-item(
            v-for="(item, index) in tradingList"
            :key="index"
            :info="item"
            type="trading"
          )
        .trading-title 跟随大师
        .trading-list.e-flex
          TradingItem.trading-list-item(
            v-for="(item, index) in followList"
            :key="index"
            :info="item"
            type="follow"
          )
</template>

<script>
import TradingFilter from './trading_strategy_filter.vue'
import TradingItem from './trading_strategy_item.vue'
import E from '../../../utils'

export default {
  data() {
    return {
      tradingList: [],
      trandingRequest: {},
      followList: [],
      followRequest: {
        pageSize: 4,
        pageNo: 1
      }
    }
  },
  components: {
    TradingFilter,
    TradingItem
  },
  created() {
    this.getTradingList()
    this.getFollowList()
  },
  methods: {
    getTradingList() {
      return E.handleRequest(E.api().post('signal/querySignalUsers', this.trandingRequest))
        .then(res => {
          console.log(res.data.content.data)
          this.tradingList = res.data.content.data
        })
    },
    getFollowList() {
      return E.handleRequest(E.api().post('signal/queryFollowUsers', this.followRequest))
        .then(res => {
          console.log(res)
          this.followList = res.data.content.data
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.trading

  &-container
    width: 1200px
    margin: 0 auto

  &-list
    flex-wrap: wrap

  &-title
    font-size: 24px
    height: 38px
    line-height: 38px
    margin-bottom: 8px
</style>
