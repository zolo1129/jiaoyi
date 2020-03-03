<template lang="pug">
  #e-menu
    .menu-container
      .menu-item(
        v-for="m in menus"
        :key="m.path"
        :to="m.path"
        :class="menuActive(m.name)"
        @click="routeTo(m.name)"
      ) {{m.text}}
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          text: '首页',
          path: '/',
          name: 'index'
        },
        {
          text: '策略',
          path: '/trading_strategy/list',
          name: 'tradingStrategy'
        },
        {
          text: '关于我们',
          path: '/about',
          name: 'about'
        }
      ],
      routeName: ''
    }
  },
  created() {
    this.routeName = this.$route.matched[0].name

    this.$router.afterEach((to, from) => {
      this.routeName = to.matched[0].name
    })
  },
  mounted() {

  },
  methods: {
    menuActive(name) {
      if (name === this.routeName) {
        return 'active'
      }
    },
    routeTo(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.menu

  &-container
    display: flex
    margin: 0 24px

  &-item
    height: 60px
    line-height: 60px
    padding: 0 12px
    cursor: pointer

    &:hover
      background-color: #f5efeb

    &.active
      color: #ff6200
</style>



