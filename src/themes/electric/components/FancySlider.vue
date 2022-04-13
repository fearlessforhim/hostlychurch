<template>
<div class="slider-wrap-inner">
  <div class="slide-select left-arrow fa fa-chevron-left" @click="previousSlideClick" />
  <div class="slide-select right-arrow fa fa-chevron-right" @click="nextSlideClick" />
  <FancySlide v-for="(s) in slideList" :key="s.id" :slide-data="s" :active="s.id === activeSlideIdx" />
</div>
</template>

<script>
import FancySlide from "@/themes/electric/components/FancySlide";

export default {
  name: "FancySlider",
  components: {
    FancySlide
  },
  props: {
    slideList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeSlideIdx: 0,
      timeout: null
    }
  },
  mounted() {
    this.timeout = setInterval(() => this.nextSlide(), 15000)
  },
  methods: {
    nextSlideClick() {
      clearTimeout(this.timeout);
      this.nextSlide();
      this.timeout = setInterval(() => this.nextSlide(), 15000)
    },
    previousSlideClick() {
      clearTimeout(this.timeout);
      this.previousSlide();
      this.timeout = setInterval(() => this.nextSlide(), 15000)
    },
    nextSlide() {
      let nextActiveId = this.activeSlideIdx + 1;
      if (nextActiveId >= this.slideList.length) {
        nextActiveId = 0;
      }
      this.activeSlideIdx = nextActiveId;
    },
    previousSlide() {
      let nextActiveId = this.activeSlideIdx - 1;
      if (nextActiveId < 0) {
        nextActiveId = this.slideList.length - 1;
      }
      this.activeSlideIdx = nextActiveId;
    }
  }
}
</script>

<style scoped lang="scss">
@import '/src/_bits/_mixins';
.slider-wrap-inner {
    height: 100%;
    position: relative;

    .slide-select {
        width: 50px;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 8;

        &.left-arrow {
          left: 0;
        }

        &.right-arrow {
          right: 0;
        }

        &:before {
          height: 100%;
          color:white;
          font-size: 40px;
          @include hv_center();
        }

        &:hover {
          background: rgba(0,0,0, .2);
        }
    }
    // .slider-select {
    //     position: relative;
    //     top: 0;
    //     right: 0;
    //     left: 0;
    //     bottom: 0;
    //
    //     .left-arrow,
    //     .right-arrow {
    //         top: 0;
    //         bottom: 0;
    //         color: white;
    //         font-size: 40px;
    //         position: absolute;
    //         z-index: 8;
    //         width: 50px;
    //         line-height: 400px;
    //         padding: 0 20px;
    //         cursor: pointer;
    //         background: rgba(0,0,0, .5);
    //
    //         &:hover {
    //             color: darken(white, 10);
    //         }
    //     }
    //
    //     .left-arrow {
    //         left: 0;
    //     }
    //
    //     .right-arrow {
    //         right: 0;
    //     }
    // }
}
</style>
