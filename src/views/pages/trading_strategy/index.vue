<template lang="pug">
  BaseLayout
    transition(name="fade")
      router-view
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

export default {
  components: {
    BaseLayout
  }
}
</script>
