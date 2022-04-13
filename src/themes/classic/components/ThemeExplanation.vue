<template>
<div class="theme-description">
  <div class="desc-wrap">
    <div class="theme-text">
      Choose from a variety of themes
    </div>
    <div class="theme-details">
      Your website should be as unique as your congregation. Choose a site theme that matches your vision.
    </div>  
  </div>

</div>
</template>

<script>
export default {
  name: "ThemeExplanation"
}
</script>

<style scoped lang="scss">
@import '/src/_bits/_mixins';
.theme-description {
    width: 50%;
    margin: auto;
    color: #444444;
    @include hv_center();

    .theme-text {
        font-size: 55px;
        text-align: center;
    }

    .theme-details {
        padding-top: 30px;
        font-size: 20px;
    }
}
</style>
