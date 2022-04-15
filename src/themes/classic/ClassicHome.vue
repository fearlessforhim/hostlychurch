<template>
<div class="classic-wrap">
  <HeroHeader />
  <div class="header-bar-wrap">
    <HeaderBar @setLocation="setLocation" />
  </div>
  <div class="page-content-wrap">
    <LandingContent :churchInfo="churchInfo" v-if="selectedTab === 'home'" />
    <BelievePage v-if="selectedTab === 'believe'" :believeBullets="believeBullets" />
    <StaffPage v-if="selectedTab === 'staff'" :staffBios="staffBios"/>
  </div>
</div>
</template>

<script>
import HeaderBar from "@/themes/classic/components/HeaderBar";
import LandingContent from "@/themes/classic/components/LandingContent";
import HeroHeader from "@/themes/classic/components/HeroHeader";
import BelievePage from "@/themes/classic/components/BelievePage";
import StaffPage from "@/themes/classic/components/StaffPage";

export default {
  name: "ClassicHome",
  props: {
    churchInfo: {
      type: Object,
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
    setLocation(l) {
      this.selectedTab = l;
    }
  },
  components: {
    LandingContent,
    HeaderBar,
    HeroHeader,
    BelievePage,
    StaffPage
  }
}
</script>

<style scoped lang="scss">
.classic-wrap {
    font-family: "Roboto Slab", Arial, Helvetica, sans-serif;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header-bar-wrap {
        z-index: 1;
    }

    .page-content-wrap {
        flex: 1;
        z-index: 1;
        overflow: auto;
    }
}
</style>
