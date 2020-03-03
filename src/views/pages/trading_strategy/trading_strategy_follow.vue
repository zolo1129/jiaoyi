<template lang="pug">
  #e-trading-strategy-follow
    .e-container
      .trading-follow-container
        .trading-follow-header
          .trading-follow-back(
            @click="back"
          ) 返回
        .trading-follow-list.e-flex
          TradingItem.trading-follow-list-item(
            v-for="(item, index) in followList"
            :key="index"
            :info="item"
            type="follow"
          )
</template>

<script>
import TradingItem from './trading_strategy_item.vue'
import E from '../../../utils'

export default {
  data() {
    return {
      followList: [],
      followRequest: {}
    }
  },
  components: {
    TradingItem
  },
  created() {
    this.getFollowList()
  },
  methods: {
    // 跟随大师列表
    getFollowList() {
      return E.handleRequest(E.api().post('signal/queryFollowUsers', this.followRequest))
        .then(res => {
          console.log(res)
          this.followList = res.data.content.data
        })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
.trading-follow

  &-header
    display: flex
    height: 58px
    padding: 0 20px
    background-color: #fff
    margin-bottom: 15px
    align-items: center

  &-back
    font-size: 16px
    cursor: pointer

    &:hover
      color: #ff6022

  &-container
    width: 1200px
    margin: 20px auto 0

  &-list
    flex-wrap: wrap
</style>
