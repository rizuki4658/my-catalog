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
})
</script>
