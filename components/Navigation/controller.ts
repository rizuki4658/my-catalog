import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  data() {
    return {
      menu: this.$store.getters.menu,
    }
  },
})
