import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    autoImage: {
      type: Boolean,
      default: false,
    },
  },
})
