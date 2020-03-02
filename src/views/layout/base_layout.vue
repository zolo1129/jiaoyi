<template lang="pug">
  #e-base-layout
    Nav(
      :transparent="navTransparent"
    )
    slot
    Footer
</template>

<script>
import Nav from './nav.vue'
import Footer from './footer.vue'

export default {
  props: {
    navTransparent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Nav,
    Footer
  }
}
</script>
