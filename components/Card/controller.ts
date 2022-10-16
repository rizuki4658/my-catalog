import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
})
