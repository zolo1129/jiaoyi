<template lang="pug">
  #e-app
    transition(name="fade")
      router-view
</template>

<script>
import Vue from 'vue'
import { MessageBox, Message, Notification } from 'element-ui'
import Nav from './layout/nav.vue'
import Footer from './layout/footer.vue'

Vue.component(MessageBox.name, MessageBox)
Vue.component(Message.name, Message)
Vue.component(Notification.name, Notification)

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification

export default {
  components: {
    Nav,
    Footer
  },
  mounted () {

  },
  methods: {

  }
}
</script>

