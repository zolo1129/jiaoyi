<template lang="pug">
  #e-user
    UserLayout
      router-view
</template>

<script>
import UserLayout from '../../layout/user_layout.vue'

export default {
  components: {
    UserLayout
  }
}
</script>


