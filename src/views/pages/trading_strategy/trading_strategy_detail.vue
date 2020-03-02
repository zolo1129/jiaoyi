<template lang="pug">
  #e-trading-strategy-detail
    .e-container.trading-detail
      DetailHeader(
          :summary="summary"
        )
      .trading-detail-container
        DetailSide
        DetailConternt(
          :summary="summary"
        )
</template>

<script>
import DetailHeader from './trading_strategy_detail_header.vue'
import DetailSide from './trading_strategy_detail_side.vue'
import DetailConternt from './trading_strategy_detail_content.vue'
import E from '../../../utils'

export default {
  data () {
    return {
      signalId: '',
      valuation: {},
      summary: {}
    }
  },
  components: {
    DetailHeader,
    DetailSide,
    DetailConternt
  },
  created() {
    this.signalId = this.$route.params.id

    this.getSummaryData()
  },
  methods: {
    // 交易汇总
    getSummaryData() {
      return E.handleRequest(E.api().post('signal/querySignalUsers', {
        signalId: this.signalId
      }))
        .then(res => {
          this.summary = res.data.content.data[0]
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.trading-detail
  background-color: #f0f0f0

  &-container
    display: flex
    width: 1200px
    margin: 20px auto
</style>
