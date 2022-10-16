import Vue from 'vue'

export default Vue.extend({
  name: 'Detail',
  async asyncData({ route, $api, store, redirect }) {
    const { slug } = route.params
    let detail = {}
    if (slug) {
      store.dispatch('setLoading', true)
      detail = await $api.request.getDetails(route.params.slug)
      store.dispatch('setLoading', false)
    } else redirect('/populars')

    return {
      detail,
    }
  },
  data() {
    return {
      detail: {},
      slug: this.$route.params.slug,
      colors: undefined,
      size: undefined,
    }
  },
})
