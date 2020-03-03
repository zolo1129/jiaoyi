<template lang="pug">
  #e-trading-strategy
    .e-container
      .trading-container
        TradingFilter(
          v-if="filterBroker.length > 0"
          :level="filterLevel"
          :rate="filterProfitRate"
          :broker="filterBroker"
          @filter="filterHandler"
        )
        .trading-list.e-flex
          TradingItem.trading-list-item(
            v-for="(item, index) in tradingList"
            :key="index"
            :info="item"
            type="trading"
          )
        .trading-title
          .trading-title-left 跟随大师
          router-link.trading-title-right(
            to="/trading_strategy/follow"
          ) 查看更多
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

const filterLevel = [
  {
    label: 'S',
    value: 'S'
  },
  {
    label: 'A+',
    value: 'A+'
  },
  {
    label: 'A',
    value: 'A'
  },
  {
    label: 'A-',
    value: 'A-'
  },
  {
    label: 'B',
    value: 'B'
  },
  {
    label: 'C',
    value: 'C'
  },
  {
    label: 'D',
    value: 'D'
  }
]

const filterProfitRate = [
  {
    label: '小于10%',
    value: '0,0.1'
  },
  {
    label: '10%-20%',
    value: '0.1,0.2'
  },
  {
    label: '20%-30%',
    value: '0.2,0.3'
  },
  {
    label: '大于30%',
    value: '0.3,1'
  }
]

export default {
  data() {
    return {
      tradingList: [],
      trandingRequest: {},
      followList: [],
      followRequest: {
        pageSize: 4,
        pageNo: 1
      },
      brokerList: [],
      filterLevel,
      filterProfitRate,
      filterBroker: []
    }
  },
  components: {
    TradingFilter,
    TradingItem
  },
  created() {
    this.getTradingList()
    this.getFollowList()
    this.getBrokerList()
  },
  methods: {
    // 交易员列表
    getTradingList() {
      return E.handleRequest(E.api().post('signal/querySignalUsers', this.trandingRequest))
        .then(res => {
          console.log(res.data.content.data)
          this.tradingList = res.data.content.data
        })
    },
    // 跟随大师列表
    getFollowList() {
      return E.handleRequest(E.api().post('signal/queryFollowUsers', this.followRequest))
        .then(res => {
          console.log(res)
          this.followList = res.data.content.data
        })
    },
    // 经销商列表
    getBrokerList() {
      return E.handleRequest(E.api().post('comServer/queryBroker', {}))
        .then(res => {
          console.log(res)
          this.brokerList = res.data.content.data
          this.brokerList.forEach(item => {
            const obj = {}
            obj.value = item.brokerName
            obj.label = item.brokerName
            this.filterBroker.push(obj)
          })
        })
    },
    // 筛选列表
    filterHandler(data) {
      this.trandingRequest = data
      this.getTradingList()
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
    display: flex
    justify-content: space-between
    align-items: center
    height: 38px
    margin-bottom: 8px

    &-left
      font-size: 24px

    &-right
      font-size: 14px
      cursor: pointer

      &:hover
        color: #ff6022
</style>
