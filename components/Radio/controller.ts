import Vue from 'vue'

export default Vue.extend({
  name: 'Radio',
  props: {
    value: {
      type: [String, Boolean, Array, Object, Number],
      default: undefined,
    },
    option: {
      type: [String, Boolean, Array, Object, Number],
      default: undefined,
    },
    name: {
      type: String,
      default: 'radio_input',
    },
  },
  data() {
    return {
      model: this.$props.value,
      nameRadio: this.$props.name,
      radioOption: this.$props.option,
    }
  },
  methods: {
    handleChange() {
      this.$emit('input', this.model)
    },
  },
})
