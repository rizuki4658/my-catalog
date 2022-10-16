<template>
  <div>
    <div id="header">
      <Navigation />
    </div>
    <div id="content">
      <div class="content-container">
        <Nuxt />
      </div>
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Layout',
  mounted() {
    const key = this.$store.state.menu.findIndex(
      (item: { name: string; link: string; active: boolean }) =>
        item.link === this.$route.path
    )
    if (key >= 0) {
      this.$store.dispatch('setMenu', key)
    }
  },
})
</script>
