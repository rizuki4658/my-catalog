import Vue from 'vue'

export default Vue.extend({
  name: 'Search',
  data() {
    return {
      show: false,
      keyword: '',
    }
  },
  methods: {
    handleShow() {
      this.show = true
    },
    handleHide() {
      this.show = false
    },
  },
})
