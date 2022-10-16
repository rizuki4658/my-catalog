import Vue from 'vue'

export default Vue.extend({
  name: 'Detail',
  asyncData(context) {
    if (!context.params.id) context.redirect('/populars')
  },
  data() {
    return {
      detail: {},
      id: this.$route.params.id,
    }
  },
})
