import Vue from 'vue'

export default Vue.extend({
  name: 'Slider',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      slides: this.$props.items,
    }
  },
  methods: {
    nextSlide() {
      const el: HTMLElement = this.$refs.sliderTrack as HTMLElement
      const width = el.offsetWidth
      if (el.scrollLeft >= el.scrollWidth) return
      el.scrollLeft += width
    },
    prevSlide() {
      const el: HTMLElement = this.$refs.sliderTrack as HTMLElement
      const width = el.offsetWidth
      if (el.scrollLeft <= 0) return
      el.scrollLeft -= width
    },
  },
})
