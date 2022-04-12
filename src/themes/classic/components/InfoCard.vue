<template>
<div class="info-card">
  <div class="info-card-icon fa" :class="icon" />
  <div class="info-card-title">{{title}}</div>
  <div class="info-card-text">{{text}}</div>
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
.info-card {
    flex: 1;
    border-radius: 10px;
    margin: 0 10px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 10px 51px 3px;
    height: 300px;
    cursor: pointer;

    .info-card-icon {
        background: #A0CE4E;
        border-radius: 50%;
        color: white;
        width: 60px;
        height: 60px;
        margin: 40px auto 0;
        font-size: 20px;

        &:before {
            height: 100%;
            display: flex;
            box-sizing: border-box;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    }

    .info-card-text {
        padding-top: 10px;
    }

    .info-card-title {
        padding-top: 10px;
    }

    &:hover {
        .info-card-title {
            color: #A0CE4E;
        }
    }
}
</style>
