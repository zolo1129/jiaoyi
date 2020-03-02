<template lang="pug">
  #e-sub
    .sub-header
      .sub-header-btn(
        v-for="t in subTypes"
        :class="activeClass(t.value)"
        @click="subTypeSelectHandler(t.value)"
      ) {{t.label}}
    .sub-body
      .sub-table
        .sub-table-header
          .sub-table-header-item 跟随者
          .sub-table-header-item 经销商
          .sub-table-header-item 跟随策略
          .sub-table-header-item 已订阅天数
          .sub-table-header-item 手数
          .sub-table-header-item 跟随金额
          .sub-table-header-item 跟随收益
          .sub-table-header-item 收益对比
        .sub-table-body(
          v-if="subList.length > 0"
        )
          .sub-table-body-tr(
            v-for="sub in subList"
          )
            .sub-table-body-td {{sub.userRefName}}
            .sub-table-body-td {{sub.brokerName}}
            .sub-table-body-td {{sub.userRefName}}
            .sub-table-body-td {{sub.userRefName}}
            .sub-table-body-td {{sub.userRefName}}
            .sub-table-body-td {{sub.tradeAmount}}
            .sub-table-body-td {{sub.profit}}
            .sub-table-body-td {{sub.userRefName}}
        .sub-table-body.emety(
          v-else
        ) 没有数据
</template>

<script>
import E from '../../../utils'

const subTypes = [
  {
    value: 0,
    label: '正在订阅'
  },
  {
    value: 1,
    label: '历史订阅'
  }
]

export default {
  data() {
    return {
      sub: {},
      subRequest: {
        ruleState: 0
      },
      subTypes,
      subList: []
    }
  },
  created() {
    this.subRequest.signalId = this.$route.params.id

    this.getSubData()
  },
  methods: {
    // 订阅信息
    getSubData() {
      return E.handleRequest(E.api().post('signal/queryFollowUsers', this.subRequest))
        .then(res => {
          this.subList = res.data.content.data
        })
    },
    activeClass(val) {
      if (val === this.subRequest.ruleState) {
        return 'active'
      }
    },
    subTypeSelectHandler(val) {
      this.subRequest.ruleState = val

      this.getSubData()
    }
  }
}
</script>

<style lang="sass" scoped>
.sub

  &-header
    display: flex
    margin-bottom: 20px

    &-btn
      height: 34px
      line-height: 32px
      border: 1px solid #ccc
      margin-right: 10px
      padding: 0 12px
      border-radius: 16px
      cursor: pointer

      &.active
        border: 1px solid #ff6200
        color: #ff6200

  &-table
    font-size: 12px

    &-header
      display: flex
      border-top: 1px solid #eee
      height: 40px
      line-height: 40px

      &-item
        flex: 1
        padding: 0 10px

    &-body

      &.emety
        background-color: #f9f9f9
        text-align: center
        height: 80px
        line-height: 80px
        color: #999

      &-tr
        display: flex
        height: 50px
        line-height: 50px

        &:nth-child(odd)
          background-color: #f9f9f9

      &-td
        flex: 1
        padding: 0 10px
</style>
