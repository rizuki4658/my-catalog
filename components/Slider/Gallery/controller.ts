import Vue from 'vue'

export default Vue.extend({
  name: 'SliderGallery',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    active: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      showButton: true,
      el: null,
      zoomed: false,
      images: [],
      activeImage: undefined,
    }
  },
  watch: {
    items: {
      handler(val) {
        if (val) {
          this.images = val
          this.activeImage = val[0]
        } else {
          this.images = []
          this.activeImage = undefined
        }
      },
      immediate: true,
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleShowingButton)
    this.handleShowingButton()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleShowingButton)
  },
  methods: {
    handleShowingButton() {
      const el: HTMLElement = this.$refs.sliderTrackGallery as HTMLElement
      if (el.scrollWidth <= el.offsetWidth) this.showButton = false
      else this.showButton = true
    },
    nextSlide() {
      const el: HTMLElement = this.$refs.sliderTrackGallery as HTMLElement
      const width = el.offsetWidth
      if (el.scrollLeft >= el.scrollWidth) return
      el.scrollLeft += width
    },
    prevSlide() {
      const el: HTMLElement = this.$refs.sliderTrackGallery as HTMLElement
      const width = el.offsetWidth
      if (el.scrollLeft <= 0) return
      el.scrollLeft -= width
    },
    handleClickZoom() {
      if (this.zoomed) this.zoomed = false
      else this.zoomed = true
    },
    handleZoom(e: any) {
      if (!this.zoomed) return
      const zoomer = e.currentTarget
      const offsetX = e.offsetX
      const offsetY = e.offsetY
      const x = (offsetX / zoomer.offsetWidth) * 100
      const y = (offsetY / zoomer.offsetHeight) * 100
      zoomer.style.backgroundPosition = x + '% ' + y + '%'
    },
    handleSelectedImage(key: number) {
      this.activeImage = this.images[key]
    },
  },
})
