import Vue from 'vue'

export default Vue.extend({
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.$props.value,
    }
  },
  watch: {
    value: {
      handler(val) {
        this.show = val
      },
      immediate: true,
    },
  },
  methods: {
    handleShow() {
      this.show = !this.show
      this.$emit('input', this.show)
    },
  },
})
