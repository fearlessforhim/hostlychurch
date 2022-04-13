<template>
<div class="classic-wrap">
  <HeroHeader/>
  <div class="header-bar-wrap">
    <HeaderBar />
  </div>
  <div class="page-content-wrap">
    <LandingContent
      :churchInfo="churchInfo"
    />
  </div>
</div>
</template>

<script>
import HeaderBar from "@/themes/classic/components/HeaderBar";
import LandingContent from "@/themes/classic/components/LandingContent";
import HeroHeader from "@/themes/classic/components/HeroHeader";

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
    },
    cardInfo: {
      type: Array,
      required: true
    }
  },
  components: {
    LandingContent,
    HeaderBar,
    HeroHeader
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
    }
}
</style>
