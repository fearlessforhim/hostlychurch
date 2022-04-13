<template>
<div class="electric-wrap">
  <div class="header-bar-wrap">
    <HeaderBar :churchName="churchInfo.name"
    @setLocation="setLocation" />
  </div>
  <div class="content-wrap">
    <FancySlider :slide-list="slideData" v-if="selectedTab === 'home'" />
    <BelievePage v-if="selectedTab === 'believe'" :believeBullets="believeBullets"/>
    <StaffPage v-if="selectedTab === 'staff'" :staffBios="staffBios"/>
  </div>
  <div class="footer-bar-wrap">
    <FooterBar :churchInfo="churchInfo" />
  </div>
</div>
</template>

<script>
import HeaderBar from "@/themes/electric/components/HeaderBar";
import FancySlider from "@/themes/electric/components/FancySlider";
import FooterBar from "@/themes/electric/components/FooterBar";
import BelievePage from "@/themes/electric/components/BelievePage";
import StaffPage from "@/themes/electric/components/StaffPage";

export default {
  name: "ElectricHome",
  props: {
    churchInfo: {
      type: Object,
      required: true
    },
    slideData: {
      type: Array,
      required: true
    },
    believeBullets: {
      type: Array,
      required: true
    },
    staffBios: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      selectedTab: 'home'
    }
  },
  methods: {
    setLocation (l) {
      this.selectedTab = l;
    }
  },
  components: {
    FancySlider,
    HeaderBar,
    FooterBar,
    BelievePage,
    StaffPage
  }
}
</script>

<style scoped lang="scss">
.electric-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;

    .content-wrap {
        flex: 1;
        overflow: auto;
    }
}
</style>
