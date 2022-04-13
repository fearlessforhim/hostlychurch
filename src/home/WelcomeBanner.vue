<template>
  <div className="welcome-banner">
    <div class="banner-icon fa fa-place-of-worship" />
    <div className="banner-large">
      Welcome to BigCChurch.com
    </div>
    <div className="banner-small">
      The start of your church's online presence
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeBanner"
}
</script>

<style scoped lang="scss">
.welcome-banner {
    width: 100%;
    text-align: center;
    padding: 80px 0;
    box-shadow: inset 0 -10px 10px -10px green;

    .banner-icon {
        font-size: 256px;
        color: green;

    }

    .banner-large {
        margin-top: 10px;
        font-size: 48px;
    }
    .banner-small {
        font-size: 24px;
    }
}
</style>
