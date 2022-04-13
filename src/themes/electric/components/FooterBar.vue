<template>
<div class="footer-wrap">
  <div class="service-times">
    Service Times
    <div v-for="(s) in churchInfo.serviceTimes" :key="s">
      <span>- {{s}}</span>
    </div>
  </div>
  <div class="spacer" />
  <div class="location-info">
    Join us here:
    <div class="name">
      {{churchInfo.name}}
    </div>
    <div class="street">
      {{churchInfo.address.street}}
    </div>
    <div class="city-state">
      {{churchInfo.address.cityState}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FooterBar",
  props: {
    churchInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
$header-bg: #2c3e50;
.footer-wrap {
    display: flex;
    background: $header-bg;
    color: white;
    z-index: 9;
    padding: 10px;
    color: #999;

    > div {
      flex: 1;
    }

    .location-info {
      text-align: right;
    }
}
</style>
