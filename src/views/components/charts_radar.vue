<template lang="pug">
  #e-charts-radar
    div(
      :id="id"
      :style="chartStyle"
    )
</template>

<script>
import Vue from 'vue'
import E from '../../utils'

const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/radar')

Vue.prototype.$echarts = echarts

export default {
  data() {
    return {
      myChart: {},
      id: `chart-radar-${E.fn.createId()}`,
      chartStyle: {
        width: '100%',
        height: '200px'
      }
    }
  },
  props: {
    chartsRadarData: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.chartInit()
  },
  watch: {
    chartsRadarData: {
      handler: function () {
        this.myChart.setOption(this.chartsRadarData)
      },
      deep: true
    }
  },
  methods: {
    chartInit() {
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.setOption(this.chartsRadarData)
    },
    chartChange() {
      this.myChart.setOption(this.chartsRadarData)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
