import Vue from 'vue'

export default Vue.extend({
  name: 'Detail',
  asyncData(context) {
    if (!context.params.slug) context.redirect('/populars')
  },
  data() {
    return {
      detail: {},
      slug: this.$route.params.slug,
      language: undefined,
      size: undefined,
    }
  },
})
