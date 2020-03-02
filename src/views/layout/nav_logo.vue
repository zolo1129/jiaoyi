<template lang="pug">
  #e-logo
    router-link(
      to="/"
    )
      img.logo(
        src="../../assets/images/logo.svg"
        :style='logoStyle'
      )
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 32
    }
  },
  computed: {
    logoStyle() {
      return {
        height: `${this.height}px`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  display: block
</style>
