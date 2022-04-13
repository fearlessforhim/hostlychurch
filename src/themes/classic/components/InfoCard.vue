<template>
<div class="info-card">
  <div class="info-card-inner">
    <div class="info-card-icon fa" :class="icon" />
    <div class="info-card-title">{{title}}</div>
    <div class="info-card-text">{{text}}</div>
  </div>

</div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "/src/_bits/_mixins";
.info-card {
    flex: 1;
    border-radius: 10px;
    margin: 0 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 10px 51px 3px;
    height: 100%;
    box-sizing: border-box;
    cursor: pointer;
    @include hv_center();

    .info-card-icon {
        background: #A0CE4E;
        border-radius: 50%;
        color: white;
        width: 120px;
        height: 120px;
        margin: 40px auto 0;
        font-size: 40px;

        &:before {
            height: 100%;
            display: flex;
            box-sizing: border-box;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }

    .info-card-title {
        padding-top: 10px;
        font-size: 24px;
    }

    .info-card-text {
        padding-top: 10px;
        font-size: 16px;
    }

    &:hover {
      .info-card-icon {
        background: darken(#A0CE4E, 20);
      }
        .info-card-title {
            color: darken(#A0CE4E, 20);
        }
    }
}
</style>
