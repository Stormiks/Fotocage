
import LazyLoadDirective from '../directives/LazyLoad'
import AutoplayObserver from '../directives/AutoplayObserver'
import { disableBodyScroll, enableBodyScroll } from './body-scroll-lock'

export default {
  directives: {
    lazyload: LazyLoadDirective,
    autoplayObserver: AutoplayObserver
  },

  data() {
    return {
      // swipe data
      initialMouseX: 0,
      initialMouseY: 0,
      endMouseX: 0,
      endMouseY: 0,
      swipeType: null,
      IsSwipping: false,
      isDraggingSwipe: false,

      // use for mouse wheel
      prevTime: 0,

      // swipe effect
      xSwipeWrapper: 0,
      ySwipeWrapper: 0,
      swipeAnimation: null,
      swipeInterval: null,
      lightboxInnerWidth: null,

      // styles data
      imgIndex: this.index,
      isVisible: false,
      paddingBottom: false,
      imageLoading: false,
      showThumbs: false,
      isFullScreenMode: false,

      // aspect ratio videos
      aspectRatioVideo: {
        width: 'auto',
        height: 'auto'
      },

      // props to bind styles
      buttonsVisible: true,
      scale: 1,
      top: 0,
      left: 0,
      lastX: 0,
      lastY: 0,
      isDraging: false,
      canZoom: true,
      isZooming: false,
      transition: 'all .3s ease',
      zoomBar: 0,

      // slideshow playing data
      isPlayingSlideShow: false,
      intervalProgress: null,
      loopData: false,
      stylesInterval: {
        display: 'block'
      }
    }
  },

  props: {
    index: {
      required: true
    },

    effect: {
      type: String,
      default: 'swipe'
    },

    items: {
      type: Array,
      required: true
    },

    loop: {
      type: Boolean,
      default: true
    },

    slideshow: {
      type: Boolean,
      default: true
    },

    slideshowColorBar: {
      type: String,
      default: '#fa4242'
    },

    slideshowDuration: {
      type: Number,
      default: 3000
    },

    useZoomBar: {
      type: Boolean,
      default: false
    },

    closeOnClickOutsideMobile: {
      type: Boolean,
      default: false
    },

    srcName: {
      type: String,
      default: 'src'
    },

    srcThumb: {
      type: String,
      default: 'thumb'
    },

    srcMediaType: {
      type: String,
      default: 'mediaType'
    },

    overlayColor: {
      type: String,
      default: 'rgba(30, 30, 30, .9)'
    },

    zIndex: {
      type: Number,
      default: 9999
    },

    gallery: {
      type: Boolean,
      default: true
    },

    fullScreen: {
      type: Boolean,
      default: false
    },

    thumbsPosition: {
      type: String,
      default: 'right'
    },

    youtubeCookies: {
      type: Boolean,
      default: true
    },

    enableWheelEvent: {
      type: Boolean,
      default: false
    },

    showCloseButton: {
      type: Boolean,
      default: true
    },

    disableZoom: {
      type: Boolean,
      default: false
    },

    dir: {
      type: String,
      default: 'ltr'
    },

    enableScrollLock: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    zoomBar(newVal, prevVal) {
      let item
      if (this.isZooming) {
        if (this.effect == 'swipe')
          item = this.$refs.items[this.imgIndex].childNodes[0]
        else
          item = this.$refs.items.childNodes[0]

        const newZoom = 1.6 + newVal / 10
        item.style.transform =
          'translate3d(calc(-50% + ' +
          this.left +
          'px), calc(-50% + ' +
          this.top +
          'px), 0px) scale3d(' +
          newZoom +
          ', ' +
          newZoom +
          ', ' +
          newZoom +
          ')'
      }
    },

    showThumbs(prev, val) {
      let widthGalleryBlock = 212
      let swipeAnimation = 'all .3s ease'
      if (window.innerWidth < 767) {
        widthGalleryBlock = 102
        swipeAnimation = null
      }

      if (this.thumbsPosition === 'bottom')
        widthGalleryBlock = 0

      const self = this
      this.swipeAnimation = swipeAnimation

      if (prev)
        if (this.dir === 'rtl')
          this.xSwipeWrapper = this.imgIndex * (window.innerWidth - widthGalleryBlock) + 30 * this.imgIndex
        else
          this.xSwipeWrapper = -this.imgIndex * (window.innerWidth - widthGalleryBlock) - 30 * this.imgIndex

      else
      if (this.dir === 'rtl')
        this.xSwipeWrapper = this.imgIndex * window.innerWidth + 30 * this.imgIndex
      else
        this.xSwipeWrapper = -this.imgIndex * window.innerWidth - 30 * this.imgIndex

      setTimeout(function () {
        self.swipeAnimation = null
      }, 300)
    },

    index(prev, val) {
      const self = this

      // body scroll lock
      const $body = document.querySelector('body')

      if (prev !== null) {
        // swipe type
        this.swipeType = null
        this.initialMouseY = 0
        this.ySwipeWrapper = 0

        // set loop from data
        this.loopData = this.loop

        // swipe effect case remove loop
        if (this.effect === 'swipe') {
          this.loopData = false
          window.addEventListener('resize', this.xPositionOnResize)
        }

        // add img index
        this.imgIndex = prev
        this.isVisible = true

        // add events listener
        window.addEventListener('keydown', this.eventListener)

        // add wheel event
        if (this.enableWheelEvent)
          window.addEventListener('wheel', this.wheelEvent)

        // only in mobile
        if (window.innerWidth < 700)
          // add click event
          setTimeout(function () {
            window.addEventListener('click', self.showButtons)
          }, 200)

        if (this.enableScrollLock)
          setTimeout(function () {
            self.setCompensateForScrollbar()
            disableBodyScroll(self.$refs.coolLightbox)
          }, 50)
      } else {
        // hide and stop slideshow
        this.isVisible = false
        this.stopSlideShow()

        // set starts X to 0
        this.startsX = 0
        this.initialMouseY = 0
        this.swipeType = null

        // clear interval
        clearInterval(this.swipeInterval)
        this.swipeAnimation = null

        // finish swipe
        this.isDraggingSwipe = false
        this.isZooming = true

        // remove events listener
        window.removeEventListener('keydown', this.eventListener)

        if (this.enableScrollLock) {
          self.removeCompensateForScrollbar()
          enableBodyScroll(self.$refs.coolLightbox)
        }

        // remove click event
        window.removeEventListener('click', this.showButtons)

        // remove resize event
        window.removeEventListener('resize', this.xPositionOnResize)

        // remove wheel event
        if (this.enableWheelEvent)
          window.removeEventListener('wheel', this.wheelEvent)
      }
    },

    imgIndex(prev, val) {
      const thisContext = this

      // when animation is loaded
      this.$nextTick(() => {
        if (this.effect === 'swipe') {
          this.setLightboxInnerWidth()
          this.setXPosition(prev)
        }

        if ((prev !== null) & (val === null))
          this.$emit('on-open', prev)

        if (prev !== null) {
          if (prev !== val)
            if (!this.getYoutubeUrl(this.getItemSrc(prev)) && !this.getVimeoUrl(this.getItemSrc(prev)))
              this.stopVideos()

          // if is an image change imageLoading to true
          if (!this.getVideoUrl(this.getItemSrc(prev)))
            if (!this.is_cached(this.getItemSrc(prev)))
              this.imageLoading = true

          // add caption padding to Lightbox wrapper
          this.addCaptionPadding()

          // setAspectRatioVideo when is swipe
          if (this.effect === 'swipe')
            this.setAspectRatioVideo()
          else
          if (this.getVideoUrl(this.getItemSrc(prev)))
            this.setAspectRatioVideo()
        }

        // reset zoom
        this.resetZoom()

        // reset swipe type
        this.swipeType = null
        this.ySwipeWrapper = 0
      })
    }
  },

  beforeDestroy() {
    if (this.enableScrollLock) {
      this.removeCompensateForScrollbar()

      if (this.$refs.coolLightbox)
        enableBodyScroll(this.$refs.coolLightbox)
    }
  },

  methods: {
    getExtFromItem(imgIndex) {
      if (imgIndex === null)
        return false

      if (this.checkIfIsObject(imgIndex)) {
        const item = this.items[imgIndex]

        // item extension is specified, so return it
        if (item.ext)
          return item.ext

        return 'mp4'
      }
    },

    stopVideos() {
      const videos = document.getElementsByClassName('cool-lightbox-video')
      const isVideoPlaying = video =>
        !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
      if (videos.length > 0)
        Array.prototype.forEach.call(videos, video => {
          const type = video.tagName

          if (type === 'IFRAME') {
            const iframeSrc = video.src
            return (video.src = iframeSrc)
          }

          if (isVideoPlaying(video))
            return video.pause()
        })
    },

    removeCompensateForScrollbar() {
      document.body.classList.remove('compensate-for-scrollbar')
      const noscrollStyle = document.getElementById('coollightbox-style-noscroll')
      if (noscrollStyle !== null)
        document.getElementById('coollightbox-style-noscroll').remove()
    },

    setCompensateForScrollbar() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )

      if (!isMobile && document.body.scrollHeight > window.innerHeight) {
        document
          .getElementsByTagName('head')[0]
          .insertAdjacentHTML(
            'beforeend',
            '<style id="coollightbox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
              (window.innerWidth - document.documentElement.clientWidth) +
              'px;}</style>'
          )

        document.body.classList.add('compensate-for-scrollbar')
      }
    },

    setAutoplay(itemIndex) {
      if (
        this.checkIfIsObject(itemIndex) &&
        // eslint-disable-next-line no-prototype-builtins
        this.items[itemIndex].hasOwnProperty('autoplay') &&
        this.items[itemIndex].autoplay
      )
        return true

      return false
    },

    toggleFullScreenMode() {
      if (this.isFullScreenMode)
        this.closeFullscreen()
      else
        this.fullScreenMode()

      this.isFullScreenMode = !this.isFullScreenMode
    },

    closeFullscreen() {
      if (document.exitFullscreen)
        document.exitFullscreen()
      else if (document.mozCancelFullScreen)
        /* Firefox */
        document.mozCancelFullScreen()
      else if (document.webkitExitFullscreen)
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen()
      else if (document.msExitFullscreen)
        /* IE/Edge */
        document.msExitFullscreen()
    },

    fullScreenMode() {
      /* Get the documentElement (<html>) to display the page in fullscreen */
      const elem = document.documentElement
      if (elem.requestFullscreen)
        elem.requestFullscreen()
      else if (elem.mozRequestFullScreen)
        /* Firefox */
        elem.mozRequestFullScreen()
      else if (elem.webkitRequestFullscreen)
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen()
      else if (elem.msRequestFullscreen)
        /* IE/Edge */
        elem.msRequestFullscreen()
    },

    // check if event is arrow button or toolbar button
    checkIfIsButton(eventEmit) {
      const elements =
        '.cool-lightbox-button, .cool-lightbox-button *, .cool-lightbox-toolbar__btn, .cool-lightbox-toolbar__btn *, .cool-lightbox-caption h6, .cool-lightbox-caption p, .cool-lightbox-caption a'
      if (event.target.matches(elements))
        return true

      return false
    },

    // start swipe event
    startSwipe(event) {
      if (this.isZooming)
        return false

      // check if is some button
      if (this.checkIfIsButton(event))
        return false

      // clear interval
      clearInterval(this.swipeInterval)
      this.swipeAnimation = null

      // starts swipe
      this.isDraggingSwipe = true
      this.initialMouseX = this.getMouseXPosFromEvent(event)
      this.initialMouseY = this.getMouseYPosFromEvent(event)
    },

    // continue swipe event
    continueSwipe(event) {
      if (this.isDraggingSwipe) {
        this.IsSwipping = true
        const currentPosX = this.getMouseXPosFromEvent(event)
        const currentPosY = this.getMouseYPosFromEvent(event)
        const windowWidth = this.lightboxInnerWidth

        // diffs
        const diffX = Math.abs(currentPosX - this.initialMouseX)
        const diffY = Math.abs(currentPosY - this.initialMouseY)

        // swipe type
        if (this.swipeType == null)
          if (diffY > 5 || diffX > 5)
            if (diffY > diffX)
              this.swipeType = 'v'
            else
              this.swipeType = 'h'

        // swipe
        if (this.swipeType == 'h')
          // swipe wrapper
          if (this.dir === 'rtl')
            this.xSwipeWrapper = windowWidth * this.imgIndex + currentPosX - this.initialMouseX + 30 * this.imgIndex
          else
            this.xSwipeWrapper = -(windowWidth * this.imgIndex) + currentPosX - this.initialMouseX - 30 * this.imgIndex
        else
          this.ySwipeWrapper = currentPosY - this.initialMouseY

        // mobile caseS
        if (event.type === 'touchmove') {
          this.endMouseX = this.getMouseXPosFromEvent(event)
          this.endMouseY = this.getMouseYPosFromEvent(event)
        }
      }
    },

    // end swipe event
    endSwipe(event) {
      if (this.checkIfIsButton(event) && this.initialMouseX === 0)
        return false

      // event check is dragging and swipe
      const self = this
      const swipeType = this.swipeType
      this.isDraggingSwipe = false

      // horizontal swipe type
      if (this.initialMouseX === 0 && swipeType == 'h')
        return false

      // touch end fixes
      if (event.type !== 'touchend') {
        this.endMouseX = this.getMouseXPosFromEvent(event)
        this.endMouseY = this.getMouseYPosFromEvent(event)
      } else {
        if (this.endMouseX === 0) return
      }

      // check if is dragged
      if (
        (this.endMouseX - this.initialMouseX === 0 && swipeType == 'h') ||
        this.isZooming ||
        (this.endMouseY - this.initialMouseY === 0 && swipeType == 'v')
      ) return

      // set swipe animation
      this.setSwipeAnimation()

      // reset swipe data
      setTimeout(function () {
        self.IsSwipping = false
        self.initialMouseX = 0
        self.endMouseX = 0
      }, 10)

      // type of swipe
      if (this.swipeType === 'h') {
        // if the swipe is to the right
        if (this.endMouseX - this.initialMouseX < -40) {
          if (this.dir === 'rtl') return this.swipeToLeft()

          return this.swipeToRight()
        }

        // if the swipe is to the left
        if (this.endMouseX - this.initialMouseX > 40) {
          if (this.dir === 'rtl') return this.swipeToRight()

          return this.swipeToLeft()
        }
      }

      if (this.swipeType === 'v') {
        const diffY = Math.abs(this.endMouseY - this.initialMouseY)

        // diff Y
        if (diffY >= 90) this.close()
        else this.ySwipeWrapper = 0
      }

      this.swipeType = null
      const windowWidth = this.lightboxInnerWidth

      if (this.dir === 'rtl') {
        this.xSwipeWrapper = this.imgIndex * windowWidth + 30 * this.imgIndex
        return
      }

      this.xSwipeWrapper = -this.imgIndex * windowWidth - 30 * this.imgIndex
    },

    // swipe to left effect
    swipeToLeft() {
      if (!this.hasPrevious && this.effect === 'swipe') {
        if (this.dir === 'rtl')
          return (this.xSwipeWrapper = this.imgIndex * this.lightboxInnerWidth + 30 * this.imgIndex)

        return (this.xSwipeWrapper = -this.imgIndex * this.lightboxInnerWidth - 30 * this.imgIndex)
      }

      this.changeIndexToPrev()
    },

    // swipe to right effect
    swipeToRight() {
      if (!this.hasNext && this.effect === 'swipe') {
        if (this.dir === 'rtl')
          return (this.xSwipeWrapper = this.imgIndex * this.lightboxInnerWidth + 30 * this.imgIndex)

        return (this.xSwipeWrapper = -this.imgIndex * this.lightboxInnerWidth - 30 * this.imgIndex)
      }

      this.changeIndexToNext()
    },

    // function that return x position from event
    getMouseXPosFromEvent(event) {
      if (event.type.indexOf('mouse') !== -1)
        return event.clientX

      return event.touches[0].clientX
    },

    // function that return Y position from event
    getMouseYPosFromEvent(event) {
      if (event.type.indexOf('mouse') !== -1)
        return event.clientY

      return event.touches[0].clientY
    },

    // check if the image is cached
    is_cached(src) {
      const image = new Image()
      image.src = src

      return image.complete
    },

    // image loaded event
    imageLoaded() {
      this.imageLoading = false
    },

    // get video url
    itemThumb(itemUrl, itemIndex) {
      const thumb = this.getItemThumb(itemIndex)

      if (thumb) return thumb

      const youtubeID = this.getYoutubeID(itemUrl)
      if (youtubeID)
        return `https://img.youtube.com/vi/${youtubeID}/mqdefault.jpg`

      const vimeoID = this.getVimeoID(itemUrl)
      if (vimeoID) return false

      return itemUrl
    },

    // get item src
    getItemSrc(imgIndex) {
      if (imgIndex === null) return false

      const item = this.items[imgIndex]
      if (this.checkIfIsObject(imgIndex))
        return item[this.srcName]

      return item
    },

    getItemAlt(imgIndex) {
      if (imgIndex === null) return false

      const item = this.items[imgIndex]
      if (this.checkIfIsObject(imgIndex))
        return item.alt

      return null
    },

    getItemThumb(imgIndex) {
      if (imgIndex === null) return false

      const item = this.items[imgIndex]
      if (this.checkIfIsObject(imgIndex))
        return item[this.srcThumb]

      if (this.getVideoUrl(item)) return false

      return item
    },

    // get item media type
    getMediaType(imgIndex) {
      if (imgIndex === null) return false

      if (this.checkIfIsObject(imgIndex)) {
        const item = this.items[imgIndex]

        // item type is specified, so return it
        if (item[this.srcMediaType])
          return item[this.srcMediaType]
      }

      if (this.getVideoUrl(this.getItemSrc(imgIndex)))
        return 'video'
      else if (this.getPDFurl(this.getItemSrc(imgIndex)))
        return 'iframe'
      else return 'image'

      return item
    },

    // toggle play slideshow event
    togglePlaySlideshow() {
      if (!this.slideshow) return false

      if (!this.hasNext && !this.loopData) return false

      this.isPlayingSlideShow = !this.isPlayingSlideShow

      // if is playing move if not stop it
      if (this.isPlayingSlideShow) this.move()
      else this.stopSlideShow()
    },

    // stop slideshow
    stopSlideShow() {
      this.isPlayingSlideShow = false
      clearInterval(this.intervalProgress)
      this.stylesInterval = {
        transform: 'scaleX(0)',
        transition: 'none'
      }
    },

    // move event in zoom
    move() {
      const self = this
      this.progressWidth = 100
      this.intervalProgress = setInterval(frame, this.slideshowDuration + 90)

      self.stylesInterval = {
        transform: 'scaleX(1)',
        background: this.slideshowColorBar,
        'transition-duration': this.slideshowDuration + 'ms'
      }
      function frame() {
        self.stylesInterval = {
          transform: 'scaleX(0)',
          transition: 'none'
        }

        if (self.dir === 'rtl') self.onPrevClick(true)
        else self.onNextClick(true)

        if (!self.hasNext && !self.loopData) self.stopSlideShow()
        else
          setTimeout(function () {
            self.stylesInterval = {
              transform: 'scaleX(1)',
              background: self.slideshowColorBar,
              'transition-duration': self.slideshowDuration + 'ms'
            }
          }, 50)
      }
    },

    // show buttons event
    showButtons(event) {
      if (!this.checkIfIsButton(event)) {
        const self = this
        setTimeout(function () {
          self.buttonsVisible = !self.buttonsVisible
        }, 100)
      }
    },

    // check if is allowed to drag
    checkMouseEventPropButton(button) {
      if (!this.isZooming) return false
      // mouse left btn click
      return button === 0
    },

    // handle mouse down event
    handleMouseDown(e) {
      if (!this.checkMouseEventPropButton(e.button)) return

      this.lastX = e.clientX
      this.lastY = e.clientY
      this.isDraging = true
      e.stopPropagation()
    },

    // handle mouse up event
    handleMouseUp(e) {
      if (!this.checkMouseEventPropButton(e.button)) return

      this.isDraging = false
      this.lastX = this.lastY = 0

      // Fix drag zoom out
      const thisContext = this
      setTimeout(function () {
        thisContext.canZoom = true
      }, 100)
    },

    // handle mouse move event
    handleMouseMove(e) {
      if (!this.checkMouseEventPropButton(e.button)) return

      if (this.isDraging) {
        this.top = this.top - this.lastY + e.clientY
        this.left = this.left - this.lastX + e.clientX
        this.lastX = e.clientX
        this.lastY = e.clientY
        this.canZoom = false

        const item = e.target.parentNode
        const newZoom = 1.6 + this.zoomBar / 10
        item.style.transform = `translate3d(calc(-50% + ${this.left}px), calc(-50% + ${this.top}px), 0px) scale3d(${newZoom}, ${newZoom}, ${newZoom})`
      }
      e.stopPropagation()
    },

    // zoom image event
    zoomImage(indexImage) {
      if (this.disableZoom) return false

      if (window.innerWidth < 700) return false

      if (!this.canZoom) return false

      if (this.IsSwipping) return false

      // item zoom
      let item
      if (this.effect == 'swipe')
        item = this.$refs.items[this.imgIndex].childNodes[0]
      else
        item = this.$refs.items.childNodes[0]

      // zoom variables
      const isZooming = this.isZooming
      const thisContext = this

      // Is zooming check
      if (isZooming) {
        if (!this.isDraging) {
          this.isZooming = false
          this.zoomBar = 0
        }
      } else { this.isZooming = true }

      // check if is zooming
      if (this.isZooming) {
        this.stopSlideShow()

        // add scale
        item.style.transform = 'translate3d(calc(-50%), calc(-50%), 0px) scale3d(1.6, 1.6, 1.6)'

        // hide buttons
        this.buttonsVisible = false

        // fix drag transition problems
        setTimeout(function () {
          thisContext.transition = 'all .0s ease'
        }, 100)
      } else {
        // show buttons
        this.buttonsVisible = true
        this.resetZoom()
      }
    },

    // Reset zoom data
    resetZoom() {
      this.scale = 1
      this.left = 0
      this.top = 0
      this.zoomBar = 0
      this.isZooming = false
      this.swipeType = null
      this.transition = 'all .3s ease'

      // only if index is not null
      if (this.imgIndex != null) {
        let item
        if (this.effect == 'swipe')
          item = this.$refs.items[this.imgIndex].childNodes[0]
        else
          item = this.$refs.items.childNodes[0]

        // reset styles
        if (this.disableZoom)
          item.style.transform =
            'translate3d(calc(-50% + ' + this.left + 'px), calc(-50% + ' + this.top + 'px), 0px)'
        else
          item.style.transform =
            'translate3d(calc(-50% + ' +
            this.left +
            'px), calc(-50% + ' +
            this.top +
            'px), 0px) scale3d(1, 1, 1)'

        this.initialMouseX = 0
        if (window.innerWidth >= 700)
          this.buttonsVisible = true
      }
    },

    // Aspect Ratio responsive video
    setAspectRatioVideo() {
      const thisContext = this
      let el = document.getElementsByClassName('cool-lightbox__inner')
      el = el[0]

      const computedStyle = getComputedStyle(el)
      if (window.innerWidth < 700) {
        const width = el.clientWidth
        const height = Math.round((width / 16) * 9)

        this.aspectRatioVideo.height = height + 'px'
        this.aspectRatioVideo.width = width + 'px'
      } else {
        setTimeout(function () {
          let height = el.clientHeight
          height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)

          const width = (height / 9) * 16

          thisContext.aspectRatioVideo.height = height + 'px'
          thisContext.aspectRatioVideo.width = width + 'px'
        }, 150)
      }
    },

    // close event
    close() {
      this.stopSlideShow()
      this.swipeType = null
      this.$emit('close', this.imgIndex)
      this.showThumbs = false
      this.imgIndex = null
    },

    wheelEvent(event) {
      const delay = 350
      const currentTime = new Date().getTime()
      const direction = event.deltaY > 0 ? 'top' : 'down'

      if (currentTime - this.prevTime < delay) return

      this.prevTime = currentTime

      switch (direction) {
      // eslint-disable-next-line vue/script-indent
        case 'top': return this.changeIndexToPrev()
          // eslint-disable-next-line vue/script-indent
        case 'down': return this.changeIndexToNext()
      }
    },

    // close event click outside
    closeModal(event) {
      if (!this.closeOnClickOutsideMobile)
        if (window.innerWidth < 700)
          return false

      if (this.IsSwipping)
        return false

      const elements = '.cool-lightbox-zoom, .cool-lightbox-zoom *, .cool-lightbox-thumbs, svg, path, rect, .cool-lightbox-thumbs *, .cool-lightbox-button, .cool-lightbox-toolbar__btn, .cool-lightbox-toolbar__btn *, .cool-lightbox-button *, .cool-lightbox__slide__img *, .cool-lightbox-video, .cool-lightbox-caption h6, .cool-lightbox-caption p, .cool-lightbox-caption a'
      if (!event.target.matches(elements))
        this.close()
    },

    // set swipe animation
    setSwipeAnimation() {
      const self = this
      clearInterval(this.swipeInterval)
      this.swipeAnimation = null

      // animation swipe
      this.swipeAnimation = 'all .3s ease'
      this.swipeInterval = setInterval(interval, 330)

      function interval() {
        self.swipeAnimation = null
      }
    },

    // next slide event
    onNextClick(isFromSlideshow = false) {
      if (this.isZooming)
        return false

      if (!isFromSlideshow)
        this.stopSlideShow()

      this.setSwipeAnimation()

      if (this.dir === 'rtl')
        return this.changeIndexToPrev()

      this.changeIndexToNext()
    },

    // prev slide event
    onPrevClick(isFromSlideshow = false) {
      if (this.isZooming) return false

      if (!isFromSlideshow) this.stopSlideShow()

      this.setSwipeAnimation()

      if (this.dir === 'rtl')
        return this.changeIndexToNext()

      this.changeIndexToPrev()
    },

    // change to next index
    changeIndexToNext() {
      if (this.hasNext)
        this.onIndexChange(this.imgIndex + 1)
      else
      // only if has loop prop
      if (this.loopData)
        this.onIndexChange(0)
    },

    // change to prev index
    changeIndexToPrev() {
      if (this.hasPrevious)
        this.onIndexChange(this.imgIndex - 1)
      else
      // only if has loop prop
      if (this.loopData)
        this.onIndexChange(this.items.length - 1)
    },

    // set lightbox inner width
    setLightboxInnerWidth() {
      const el = document.getElementsByClassName('cool-lightbox__inner')
      const width = el[0].clientWidth
      this.lightboxInnerWidth = width
    },

    // x position on resize event
    xPositionOnResize() {
      this.setLightboxInnerWidth()
      const index = this.imgIndex

      if (this.dir === 'rtl') {
        this.xSwipeWrapper = index * this.lightboxInnerWidth + 30 * index
        return
      }

      // set x position
      this.xSwipeWrapper = -index * this.lightboxInnerWidth - 30 * index
    },

    // set x position by img index
    setXPosition(index) {
      if (this.dir === 'rtl') {
        this.xSwipeWrapper = index * this.lightboxInnerWidth + 30 * index
        return
      }

      // set x position
      this.xSwipeWrapper = -index * this.lightboxInnerWidth - 30 * index
    },

    // index change
    onIndexChange(index) {
      this.imgIndex = index
      this.$emit('on-change', index)
    },

    // caption size
    addCaptionPadding() {
      if (
        this.checkIfIsObject(this.imgIndex) &&
        (this.items[this.imgIndex].title || this.items[this.imgIndex].descripcion)
      ) {
        const el = document.getElementsByClassName('cool-lightbox-caption')

        if (el.length > 0)
          this.paddingBottom = el[0].offsetHeight
      } else { this.paddingBottom = 60 }
    },

    getPDFurl(url) {
      if (this.imgIndex === null)
        return false

      // eslint-disable-next-line no-new-wrappers
      const str = new String(url)
      if (str.endsWith('.pdf')) return url

      return false
    },

    // check if is video
    getVideoUrl(itemSrc) {
      const youtubeUrl = this.getYoutubeUrl(itemSrc)
      const vimeoUrl = this.getVimeoUrl(itemSrc)
      const mp4Url = this.checkIsMp4(itemSrc)

      if (youtubeUrl)
        return youtubeUrl

      if (vimeoUrl)
        return vimeoUrl

      if (mp4Url)
        return mp4Url

      return false
    },

    // getYoutube ID
    getYoutubeID(url) {
      // youtube data
      const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
      const ytId = url.match(youtubeRegex) ? RegExp.$1 : false

      if (ytId) return ytId

      return false
    },

    // get youtube url
    getYoutubeUrl(url) {
      // youtube data
      const ytId = this.getYoutubeID(url)

      // if is youtube video
      if (ytId) {
        // check if allows youtube cookies
        if (this.youtubeCookies)
          return 'https://www.youtube.com/embed/' + ytId

        return 'https://www.youtube-nocookie.com/embed/' + ytId
      }

      return false
    },

    // vimeo ID
    getVimeoID(url) {
      // if is vimeo video
      const result = url.match(
        /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
      )
      if (result !== null)
        return result[1]

      return false
    },

    // get vimeo url
    getVimeoUrl(url) {
      // if is vimeo video
      const result = url.match(
        /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
      )
      if (result !== null)
        return (
          '//player.vimeo.com/video/' +
          result[1] +
          '?hd=1&show_title=1&show_byline=1&show_portrait=0&fullscreen=1'
        )

      return false
    },

    // check if video is mp4
    checkIsMp4(url) {
      if (this.imgIndex === null)
        return false

      // eslint-disable-next-line no-new-wrappers
      const str = new String(url)
      if (
        str.indexOf('.mp4') !== -1 ||
        str.indexOf('.mov') !== -1 ||
        str.indexOf('.webm') !== -1 ||
        str.indexOf('.ogg') !== -1 ||
        str.indexOf('.avi') !== -1
      )
        return url

      return false
    },

    // if is video get extension
    getVideoExt(url) {
      if (this.imgIndex === null)
        return false

      // eslint-disable-next-line no-new-wrappers
      const str = new String(url)
      if (str.indexOf('.mp4') !== -1 || str.indexOf('.mov') !== -1)
        return 'mp4'

      if (str.indexOf('.webm') !== -1)
        return 'webm'

      if (str.indexOf('.ogg') !== -1)
        return 'ogg'

      if (str.indexOf('.avi') !== -1)
        return 'avi'

      return false
    },

    // check if item is object
    checkIfIsObject(itemIndex) {
      const item = this.items[itemIndex]
      if (typeof item === 'object' && item !== null)
        return true

      return false
    },

    // arrows and escape events
    eventListener(e) {
      switch (e.keyCode) {
      // eslint-disable-next-line vue/script-indent
        case 39: return this.onNextClick()
          // eslint-disable-next-line vue/script-indent
        case 37: return this.onPrevClick()
          // eslint-disable-next-line vue/script-indent
        case 38:
          // eslint-disable-next-line vue/script-indent
        case 40:
          // eslint-disable-next-line vue/script-indent
        case ' ': return e.preventDefault()
          // eslint-disable-next-line vue/script-indent
        case 27: return this.close()
      }
    }
  },

  computed: {
    // Images wrapper styles to use drag and zoom
    imgWrapperStyle() {
      return {
        top: '50%',
        left: '50%',
        transition: this.transition
      }
    },

    // lightbox styles
    lightboxStyles() {
      return {
        'z-index': this.zIndex,
        'background-color': this.overlayColor
      }
    },

    innerStyles() {
      return {
        'padding-bottom': this.paddingBottom + 'px'
      }
    },

    // get item src
    itemSrc() {
      if (this.imgIndex === null)
        return false

      const item = this.items[this.imgIndex]
      if (this.checkIfIsObject(this.imgIndex))
        return item[this.srcName]

      return item
    },

    // Lightbox classes
    lightboxClasses() {
      const classesReturn = [
        { 'cool-lightbox--can-zoom': this.canZoom && !this.disableZoom },
        { 'cool-lightbox--zoom-disabled': this.disableZoom },
        { 'cool-lightbox--is-zooming': this.isZooming },
        { 'cool-lightbox--show-thumbs': this.showThumbs },
        { 'cool-lightbox--is-swipping': this.isDraggingSwipe }
      ]

      const classString = 'cool-lightbox--thumbs-' + this.thumbsPosition
      classesReturn.push(classString)

      return classesReturn
    },

    // Buttons classes
    buttonsClasses() {
      return {
        hidden: !this.buttonsVisible
      }
    },

    // check if the slide has next element
    hasNextButton() {
      if (this.dir === 'rtl')
        return this.imgIndex - 1 >= 0

      return this.imgIndex + 1 < this.items.length
    },

    // check if the slide has previous element
    hasPreviousButton() {
      if (this.dir === 'rtl')
        return this.imgIndex + 1 < this.items.length

      return this.imgIndex - 1 >= 0
    },

    // check if the slide has next element
    hasNext() {
      return this.imgIndex + 1 < this.items.length
    },

    // check if the slide has previous element
    hasPrevious() {
      return this.imgIndex - 1 >= 0
    }
  }
}
