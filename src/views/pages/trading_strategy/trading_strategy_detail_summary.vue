<template lang="pug">
  .trading-detail-summary-table
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 收益
      .trading-detail-summary-table-value ${{summary.profit}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 点数
      .trading-detail-summary-table-value 点
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 手数
      .trading-detail-summary-table-value {{summary.handLots}}标准手
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 交易胜率
      .trading-detail-summary-table-value {{summary.winRate}}%
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 净值
      .trading-detail-summary-table-value ${{summary.netValue}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 手续费
      .trading-detail-summary-table-value ${{summary.commission}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 交易笔数
      .trading-detail-summary-table-value {{summary.orderLots}}笔
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 净值盈亏比
      .trading-detail-summary-table-value {{summary.profit}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 余额
      .trading-detail-summary-table-value ${{summary.overMoney}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 隔夜利息
      .trading-detail-summary-table-value $
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日均交易手数
      .trading-detail-summary-table-value {{summary.handLots}}标准手
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 平均每笔获利
      .trading-detail-summary-table-value $
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 出金
      .trading-detail-summary-table-value ${{summary.withdrawal}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 平均持仓时间
      .trading-detail-summary-table-value 小时
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 日均交易笔数
      .trading-detail-summary-table-value {{summary.orderLots}}笔
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 平均每笔亏损
      .trading-detail-summary-table-value $
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 入金
      .trading-detail-summary-table-value ${{summary.deposit}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 损失厌恶系数
      .trading-detail-summary-table-value %
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 每笔平均手数
      .trading-detail-summary-table-value {{summary.handLots}}标准手
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 最大单笔获利
      .trading-detail-summary-table-value $
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 杠杆
      .trading-detail-summary-table-value {{summary.leverage}}
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 交易期望值
      .trading-detail-summary-table-value $
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 最大单笔持仓手数
      .trading-detail-summary-table-value {{summary.handLots}}标准手
    .trading-detail-summary-table-item
      .trading-detail-summary-table-label 最大单笔亏损
      .trading-detail-summary-table-value $
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

  &-summary

    &-table
      display: flex
      flex-wrap: wrap
      border-top: 1px solid #e6e6e6
      border-left: 1px solid #e6e6e6

      &-item
        display: flex
        justify-content: space-between
        align-items: center
        width: 25%
        height: 40px
        padding: 5px 10px
        border-bottom: 1px solid #e6e6e6
        border-right: 1px solid #e6e6e6
        font-size: 12px

      &-label
        color: #666
</style>
