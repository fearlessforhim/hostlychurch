<template>
<div class="electric-wrap">
  <div class="header-bar-wrap">
    <HeaderBar :churchName="churchName" />
  </div>
  <div class="slider-wrap">
    <FancySlider :slide-list="slideData" />
  </div>
  <div class="footer-bar-wrap">
    <FooterBar/>
  </div>
</div>
</template>

<script>
import HeaderBar from "@/themes/electric/components/HeaderBar";
import FancySlider from "@/themes/electric/components/FancySlider";
import FooterBar from "@/themes/electric/components/FooterBar";

export default {
  name: "ElectricHome",
  props: {
    churchName: {
      type: String,
      required: true
    },
    slideData: {
      type: Array,
      required: true
    }
  },
  components: {
    FancySlider,
    HeaderBar,
    FooterBar
  }
}
</script>

<style scoped lang="scss">
.electric-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;

  .slider-wrap {
    flex: 1;
  }
}
</style>
