import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data(): {
    intervalTime: any
  } {
    return {
      intervalTime: null,
    }
  },
  mounted() {
    const slides = document.getElementsByClassName('banner')
    this.addActive(slides[0])
    this.startInterval(slides)
  },
  destroyed() {
    clearInterval(this.intervalTime)
  },
  methods: {
    addActive(slide: Element) {
      return slide.classList.add('active')
    },
    removeActive(slide: Element) {
      return slide.classList.remove('active')
    },
    startInterval(slides: any) {
      this.intervalTime = setInterval(() => {
        for (let i = 0; i < slides.length; i++) {
          if (i + 1 === slides.length) {
            this.addActive(slides[0])
            slides[0].style.zIndex = 1
            setTimeout(this.removeActive, 350, slides[i])
            break
          }
          if (slides[i].classList.contains('active')) {
            slides[i].removeAttribute('style')
            setTimeout(this.removeActive, 350, slides[i])
            this.addActive(slides[i + 1])
            break
          }
        }
      }, 4000)
    },
  },
})
