<template lang="pug">
  #e-user-layout
    .user-container
      .user-header
        Logo(
          :height="50"
        )
      .user-content
        slot
      .user-footer
        .user-copyright © 2020 Follow Me Technology Ltd. All Rights Reserved. 投资有风险，入市需谨慎
</template>

<script>
import Logo from './nav_logo.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
.user

  &-container
    display: flex
    flex-direction: column
    align-items: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #f2f2f2

  &-header
    flex: 2
    width: 100%
    display: flex
    padding: 0 60px
    align-items: center

  &-content
    flex: 8
    width: 780px
    background-color: #fff

  &-footer
    flex: 2
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    color: #999
</style>
