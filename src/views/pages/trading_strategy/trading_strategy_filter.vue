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
          .trading-filter-item-all(
            :class="checkAllClass('broker')"
            @click="checkClear('broker')"
          ) 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox(
              v-for="b in broker"
              @click="checkFilter('broker', b)"
              :class="checkClass('broker', b)"
            )
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text {{b.label}}
        .trading-filter-item.e-flex
          .trading-filter-item-label 账户评级：
          .trading-filter-item-all(
            :class="checkAllClass('level')"
            @click="checkClear('level')"
          ) 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox(
              v-for="l in level"
              @click="checkFilter('level', l)"
              :class="checkClass('level', l)"
            )
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text {{l.label}}
        .trading-filter-item.e-flex
          .trading-filter-item-label 收益率：
          .trading-filter-item-all(
            :class="checkAllClass('rate')"
            @click="checkClear('rate')"
          ) 全部
          .trading-filter-item-checkbox-group.e-flex.e-flex1
            label.trading-filter-item-checkbox(
              v-for="r in rate"
              @click="checkFilter('rate', r)"
              :class="checkClass('rate', r)"
            )
              .trading-filter-item-checkbox-inner
              span.trading-filter-item-checkbox-text {{r.label}}
      .trading-filter-footer(
        v-if="levelSelected || rateSelected || brokerSelected"
      )
        .trading-filter-footer-item(
          v-if="levelSelected"
          @click=""
        ) {{levelSelected.label}}
        .trading-filter-footer-item(
          v-if="rateSelected"
          @click=""
        ) {{rateSelected.label}}
        .trading-filter-footer-item(
          v-if="brokerSelected"
          @click=""
        ) {{brokerSelected.label}}
        .trading-filter-footer-item(
          @click="checkClearAll"
        ) 清空
</template>

<script>
export default {
  data() {
    return {
      levelSelected: null,
      rateSelected: null,
      brokerSelected: null
    }
  },
  props: {
    level: {
      type: Array
    },
    rate: {
      type: Array
    },
    broker: {
      type: Array
    }
  },
  methods: {
    // 单选框样式
    checkClass(type, val) {
      let res = null

      switch (type) {
        case 'broker':
          if (this.brokerSelected !== null && this.brokerSelected.value === val.value) {
            res = 'active'
          }
          break;
        case 'level':
          if (this.levelSelected !== null && this.levelSelected.value === val.value) {
            res = 'active'
          }
          break;
        case 'rate':
          if (this.rateSelected !== null && this.rateSelected.value === val.value) {
            res = 'active'
          }
          break;
      }

      return res
    },
    // 全部按钮样式
    checkAllClass(type) {
      let res = null

      switch (type) {
        case 'broker':
          if (this.brokerSelected === null) {
            res = 'active'
          }
          break;
        case 'level':
          if (this.levelSelected === null) {
            res = 'active'
          }
          break;
        case 'rate':
          if (this.rateSelected === null) {
            res = 'active'
          }
          break;
      }

      return res
    },
    // 处理筛选数据
    formatFilter() {
      const obj = {}

      if (this.brokerSelected !== null) {
        obj.brokerName = this.brokerSelected.value
      }

      if (this.levelSelected !== null) {
        obj.brokerName = this.levelSelected.value
      }

      if (this.rateSelected !== null) {
        obj.brokerName = this.rateSelected.value
      }

      return obj
    },
    // 选择选项
    checkFilter(type, val) {
      switch (type) {
        case 'broker':
          this.brokerSelected = val
          break;
        case 'level':
          this.levelSelected = val
          break;
        case 'rate':
          this.rateSelected = val
          break;
      }

      const request = this.formatFilter()

      this.$emit('filter', request)
    },
    // 清空某一类选项
    checkClear(type) {
      switch (type) {
        case 'broker':
          this.brokerSelected = null
          break;
        case 'level':
          this.levelSelected = null
          break;
        case 'rate':
          this.rateSelected = null
          break;
      }

      const request = this.formatFilter()

      this.$emit('filter', request)
    },
    // 清空全部选项
    checkClearAll() {
      this.brokerSelected = null
      this.levelSelected = null
      this.rateSelected = null

      const request = this.formatFilter()

      this.$emit('filter', request)
    }
  }
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
      color: #333
      border-radius: 12px
      text-align: center
      margin-right: 32px
      cursor: pointer

      &.active
        color: #fff
        background-color: #ff6200

    &-checkbox
      display: flex
      align-items: center
      cursor: pointer
      margin-right: 30px

      &.active .trading-filter-item-checkbox-inner
        background-color: #ff6200
        border: 1px solid #ff6200
        position: relative

        &::after
          content: ""
          position: absolute
          top: 50%
          left: 50%
          margin: -3px 0 0 -6px
          width: 10px
          height: 3px
          border-left: 2px solid #fff
          border-bottom: 2px solid #fff
          transform: rotate(-45deg)

      &-inner
        width: 16px
        height: 16px
        border: 1px solid #ccc
        border-radius: 2px
        margin-right: 6px

  &-footer
    display: flex
    align-items: center
    height: 50px
    padding: 0 20px
    border-top: 1px solid #e6e6e6

    &-item
      background-color: #f0f0f0
      padding: 4px 20px
      border-radius: 4px
      border: 1px solid #f0f0f0
      line-height: 20px
      margin-right: 20px
      cursor: pointer

      &:hover
        border: 1px solid #ff6200
</style>
