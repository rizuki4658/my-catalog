import Vue from 'vue'

export default Vue.extend({
  name: 'Popular',
  // @ts-ignore
  async asyncData({ $api, store }) {
    store.dispatch('setLoading', true)
    const data = await $api.request.getProducts()
    store.dispatch('setProducts', data)
    store.dispatch('setLoading', false)

    return {
      data,
    }
  },
})
