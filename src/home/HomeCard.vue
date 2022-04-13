<template>
<div className="card-wrap">
  <div class="card-content">
    <div class="info-card-icon fa" :class="icon" />
    <div class="info-card-title">{{title}}</div>
    <div class="info-card-text">{{text}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeCard",
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
.card-wrap {
    box-shadow: 4px 4px 10px green;
    border-radius: 5px;
    background: white;

    &:hover {
        box-shadow: 2px 2px 5px green;

        .card-content .info-card-icon {
            background: darken(#A0CE4E, 10);
        }
    }

    .card-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
        align-items: center;

        .info-card-icon {
            background: #A0CE4E;
            border-radius: 50%;
            color: white;
            width: 60px;
            height: 60px;
            font-size: 20px;
            transition: background 1s;

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
            font-size: 24px;
            padding-top: 10px;
        }

        .info-card-text {
            padding: 10px 40px;
            color: #888;
        }

    }
}
</style>
