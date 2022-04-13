<template>
<div class="hero-header">
  <div class="hero-image">
    <div class="svg-wrap" style="font-size:0;line-height:0;">
      <svg class="waves-opacity" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 0 1024 216" preserveAspectRatio="none">
        <path class="st0" d="M0 216.068h1024l.1-105.2c-14.6-3.2-30.2-5.8-47.1-7.6-178.6-19.6-279.5 56.8-464.3 41.3-206.5-17.2-248.4-128.8-455-143.8-19-1.3-38.3-.2-57.7.3v215z"></path>
        <path class="st1" d="M0 20.068v196.144h1024v-79.744c-22.7-6.4-47.9-11.4-76.2-14.6-178.6-19.8-272.2 53.9-457.1 38.4-206.6-17.2-197.3-124.7-403.9-139.8-27.2-2-56.6-2-86.8-.4z"></path>
        <path class="st2" d="M0 216.212h1024v-35.744c-45.1-15.4-95.2-27.7-150-33.7-178.6-19.8-220.6 46.8-405.4 31.3-206.6-17.2-197.8-114.7-404.4-129.7-20.4-1.5-42-2-64.2-1.7v169.544z"></path>
        <path class="st3" d="M0 216.312h1024v-3.044c-50.8-17.1-108.7-30.7-172.7-37.9-178.6-19.8-220 36.8-404.9 21.3-206.6-17.2-228-126.5-434.5-141.6-3.9-.3-7.9-.5-11.9-.7v161.944z"></path>
      </svg>
    </div>
    <!-- <div class="hero-text">
                <div class="hero-text-title">
                    Your Church Website, On Your Budget
                </div>
                <div class="hero-text-subtitle">Donation Supported</div>
            </div> -->
  </div>
</div>
</template>

<script>
export default {
  name: "HeroHeader"
}
</script>

<style scoped lang="scss">
.hero-header {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 0;
    .hero-image {
        height: 500px;
    }

    .svg-wrap {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background: #A0CE4E;

        .waves-opacity path:nth-child(1) {
            opacity: 0.18;
        }

        .waves-opacity path:nth-child(2) {
            opacity: 0.28;
        }

        .waves-opacity path:nth-child(3) {
            opacity: 0.50;
        }
    }

    // .hero-text {
    //     padding-top: 100px;
    //     position: absolute;
    //     top: 30px;
    //     left: 0;
    //     right: 0;
    //     text-align: center;
    //     color: white;
    //     font-size: 40px;
    //
    //     font-weight: 300;
    //     line-height: 1.14;
    //     letter-spacing: 0;
    //     font-style: normal;
    //
    //     &-subtitle {
    //         padding-top: 20px;
    //         color: darken(#A0CE4E, 30);
    //         font-size: 25px;
    //         font-variant-caps: all-small-caps;
    //     }
    // }
}
</style>
