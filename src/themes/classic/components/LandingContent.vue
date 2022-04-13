<template>
<div class="landing-content">
  <ThemeExplanation />
  <InfoCards
    :churchInfo="churchInfo"
  />
</div>
</template>

<script>
import ThemeExplanation from "@/themes/classic/components/ThemeExplanation";
import InfoCards from "@/themes/classic/components/InfoCards";

export default {
  name: "LandingContent",
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
  components: {
    InfoCards,
    ThemeExplanation,
  }
}
</script>

<style scoped lang="scss">
.landing-content {
  height: 100%;
  display: flex;
  flex-direction: column;
   > div {
     flex: 1;
   }
}
</style>
