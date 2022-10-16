import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  data(): {
    // menu: any[],
    showMenuMobile: boolean
  } {
    return {
      // menu: [],
      showMenuMobile: false,
    }
  },
  computed: {
    menu() {
      return this.$store.getters.menu
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize() {
      const width = window.innerWidth
      if (width >= 768 && this.showMenuMobile) {
        this.showMenuMobile = false
      }
    },
    handleClickMenu(key: number) {
      this.showMenuMobile = false
      this.$store.dispatch('setMenu', key)
    },
    handleResetMenu() {
      this.$store.dispatch('setMenu', null)
      this.showMenuMobile = false
    },
  },
})
