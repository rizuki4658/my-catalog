import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      items: this.$store.getters.footers,
      socials: this.$store.getters.socials,
    }
  },
})
