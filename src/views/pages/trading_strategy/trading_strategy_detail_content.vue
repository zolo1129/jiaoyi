<template lang="pug">
  #e-trading-strategy-detail-content
    .trading-detail-content-container
      .trading-detail-content-header
        .trading-detail-content-header-title 交易员
        .trading-detail-content-header-body
          .trading-detail-content-header-body-left
            .trading-detail-content-header-body-title 近13周账户评级
            .trading-detail-content-header-body-charts
              EchartsRadar(
                v-if="valuation !== null"
                :chartsRadarData="chartsRadarData"
              )
              .trading-detail-content-header-body-level(
                v-if="valuation !== null"
              ) {{valuation.level}}
          .trading-detail-content-header-body-right
            .trading-detail-content-header-body-item
              .trading-detail-content-header-body-item-title 账户承诺
              .trading-detail-content-header-body-item-context
                span.label 最大回撤
                span.value < 25%
                span.label 已遵守天数
                span.value 43
            .trading-detail-content-header-body-item
              .trading-detail-content-header-body-item-title 交易策略
              .trading-detail-content-header-body-item-context 交易策略顺势交易，小利集大利，注重仓位管理。如有跟随着请根据自己资金量的大小跟随，本人是1:200的杠杆。
        .trading-detail-content-header-footer
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value 8.39%
            .trading-detail-content-header-footer-label 收益率
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value $0
            .trading-detail-content-header-footer-label 实盘跟随总额
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value 1.29%
            .trading-detail-content-header-footer-label 近13周净值最大回撤
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value 18周
            .trading-detail-content-header-footer-label 交易周期
          .trading-detail-content-header-footer-item
            .trading-detail-content-header-footer-value 81
            .trading-detail-content-header-footer-label 累计订阅次数
      .trading-detail-content-body
        .trading-detail-content-tab
          .trading-detail-content-tab-item(
            v-for="t in tabs"
            :class="tabActive(t.value)"
            @click="selectTabHandler(t.value)"
          ) {{t.label}}
        .trading-detail-content-tab-context(
          v-if="tabSelected === 0"
        )
          .trading-detail-content-item
            .trading-detail-content-title
              .trading-detail-content-title-name.summary 概览
              .trading-detail-content-title-time 上一次更新时间 2020/03/01 GMT+08:00
            .trading-detail-content-body
              Summary(
                :summary="summary"
              )
        .trading-detail-content-tab-context(
          v-if="tabSelected === 1"
        )
          Order
        .trading-detail-content-tab-context(
          v-if="tabSelected === 2"
        )
          Subscription
</template>

<script>
import EchartsRadar from '../../components/charts_radar.vue'
import Summary from './trading_strategy_detail_summary.vue'
import Order from './trading_strategy_detail_order.vue'
import Subscription from './trading_strategy_detail_subscription.vue'
import E from '../../../utils'

const tabs = [
  {
    value: 0,
    label: '交易分析'
  },
  {
    value: 1,
    label: '交易订单'
  },
  {
    value: 2,
    label: '订阅者'
  }
]

const chartsRadarData = {
  radar: {
    indicator: [
      {name: '稳健性'},
      {name: '盈利能力'},
      {name: '非侥幸获利'},
      {name: '资金规模'},
      {name: '风控能力'},
    ]
  },
  series: [
    {
      type: 'radar',
      areaStyle: {
        color: '#ff6200'
      },
      data: [
        {
          value: []
        }
      ]
    }
  ]
}

export default {
  data() {
    return {
      chartsRadarData,
      tabs,
      tabSelected: 0,
      valuation: null
    }
  },
  props: {
    summary: {
      type: Object
    }
  },
  components: {
    EchartsRadar,
    Summary,
    Order,
    Subscription
  },
  created() {
    this.signalId = this.$route.params.id

    this.getValuationData()
  },
  methods: {
    // 评估数据
    getValuationData() {
      return E.handleRequest(E.api().post('signal/getSignalValuation', {
        signalId: this.signalId
      }))
        .then(res => {
          const result = res.data.content

          this.valuation = result
          this.chartsRadarData.series[0].data[0].value[0] = result.steadyScore
          this.chartsRadarData.series[0].data[0].value[1] = result.profitScore
          this.chartsRadarData.series[0].data[0].value[2] = result.nonFlukeProfitScore
          this.chartsRadarData.series[0].data[0].value[3] = result.fundSizeScore
          this.chartsRadarData.series[0].data[0].value[4] = result.riskControlScore

          console.log(this.chartsRadarData)
        })
    },
    tabActive(val) {
      if (val === this.tabSelected) {
        return 'active'
      }
    },
    selectTabHandler(val) {
      this.tabSelected = val
    }
  }
}
</script>

<style lang="sass" scoped>
#e-trading-strategy-detail-content
  flex: 1
  margin-left: 20px

.trading-detail-content

  &-header
    margin-bottom: 20px
    background-color: #fff

    &-title
      height: 50px
      line-height: 50px
      padding: 0 30px
      font-size: 16px
      font-weight: 600
      border-bottom: 1px solid #e9e9e9

    &-body
      display: flex
      padding: 25px 30px

      &-left
        width: 40%

      &-right
        width: 60%
        padding-left: 20px

      &-title
        font-weight: 600
        margin-bottom: 10px

      &-charts
        position: relative

      &-level
        position: absolute
        top: 50%
        left: 50%
        font-size: 60px
        font-weight: 700
        color: #fff
        transform: translate(-50%, -50%)
        text-shadow: 1px 0 0 rgba(255,98,0,.7), -1px 0 0 rgba(255,98,0,.7), 0 1px 0 rgba(255,98,0,.7), 0 -1px 0 rgba(255,98,0,.7)

      &-item
        margin-bottom: 30px

        &-title
          font-weight: 600
          margin-bottom: 10px

        &-context
          font-size: 12px
          color: #666

          .label
            margin-right: 8px

          .value
            font-weight: 500
            font-size: 20px
            margin-right: 20px

    &-footer
      display: flex
      padding: 16px 0
      border-top: 1px solid #f0f0f0

      &-item
        flex: 1
        padding-left: 20px

      &-value
        font-size: 20px
        font-weight: 500
        color: #555

      &-label
        font-size: 12px
        color: #999

  &-body
    background-color: #fff

  &-tab
    display: flex
    height: 50px
    line-height: 50px
    padding: 0 30px
    font-size: 16px
    font-weight: 600
    border-bottom: 1px solid #e9e9e9

    &-item
      margin-right: 30px
      cursor: pointer

      &.active
        border-bottom: 2px solid #ff6200
        color: #ff6200

  &-tab-context
    padding: 25px 30px

  &-title
    display: flex
    justify-content: space-between
    align-items: center
    height: 28px
    line-height: 28px
    margin-bottom: 16px

    &-name
      font-size: 16px
      font-weight: 600
      padding-left: 30px
      position: relative

      &.summary:after
        content: ""
        display: block
        width: 26px
        height: 26px
        background-color: #eee
        position: absolute
        top: 50%
        left: 0
        margin-top: -13px

    &-time
      color: #999
      font-size: 12px

</style>
