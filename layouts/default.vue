<template>
  <div>
    <div id="header">
      <Navigation />
    </div>
    <div id="content">
      <Nuxt />
    </div>
    <div id="footer">footer</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Layout',
})
</script>
