<template lang="pug">
  #e-nav
    .nav-container(
      :class="transparentClass"
    )
      .nav-content
        .nav-left
          navLogo
          navMenu
        .nav-right
          NavUser(
            type="index"
          )
</template>

<script>
import navMenu from './nav_menu.vue'
import NavUser from './nav_user.vue'
import NavLogo from './nav_logo.vue'
import logo from '../../assets/images/logo_index.svg'

export default {
  data () {
    return {
      logo
    }
  },
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    NavLogo,
    navMenu,
    NavUser
  },
  computed: {
    transparentClass() {
      let res = null

      if (this.transparent) {
        res = 'transparent'
      }

      return res
    }
  },
  mounted() {

  }
}
</script>


<style lang="sass" scoped>
.nav

  &-container
    width: 100%
    position: fixed
    top: 0
    left: 0
    padding: 0 24px
    z-index: 200
    background-color: #fff
    box-shadow: 0 1px 0 0 #e6e6e6

    &.transparent
      background-color: transparent
      box-shadow: none

  &-content
    width: 1200px
    height: 60px
    margin: 0 auto
    display: flex
    justify-content: space-between
    align-items: center

  &-left,
  &-right
    display: flex
    align-items: center

#e-nav

  /deep/

    .nav-container.transparent

      .menu-item
        color: #fff

        &.active
          color: #ff6200

      .menu-item:hover
        background-color: rgba(245, 239, 235, .3)

      .nav-user-btn.register
        background-color: #fff
        border-color: #fff
        color: #333

        &:hover
          background-color: #ccc
          border-color: #ccc
</style>
