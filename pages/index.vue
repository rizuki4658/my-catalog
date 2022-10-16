<template>
  <div>
    <Banners />

    <Slider :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  // @ts-ignore
  async asyncData({ $api, store }) {
    store.dispatch('setLoading', true)
    const items = await $api.request.getPopulars()
    store.dispatch('setPopulars', items)
    store.dispatch('setLoading', false)

    return {
      items,
    }
  },
})
</script>
