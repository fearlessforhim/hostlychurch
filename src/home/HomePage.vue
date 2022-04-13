<template>
<div className="home-page-parent">
  <div class="welcome-banner-wrap">
    <WelcomeBanner />
  </div>
  <div class="home-card-wrap">
    <HomeCards />
  </div>
</div>
</template>

<script>
import WelcomeBanner from './WelcomeBanner';
import HomeCards from './HomeCards';
export default {
  name: "HomePage",
  components: {
    WelcomeBanner,
    HomeCards
  }
}
</script>

<style scoped lang="scss">
.home-page-parent {
    display: flex;
    flex-direction: column;
    height: 100%;

    .home-card-wrap {
        flex: 1;
    }
}
</style>
