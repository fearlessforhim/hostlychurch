<template>
<div class="believe-wrap">
  <div class="believe-bullets">
    <div v-for="(b, idx) in believeBullets" v-bind:key="idx">
      <h1>{{b.headerText}}</h1>
      <p>
        {{b.content}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BelievePage",
  props: {
    believeBullets: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      selectedTab: 'home'
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.believe-wrap {
    min-height: 100%;
    padding: 30px 0;
    overflow: auto;

    .believe-bullets {
        width: 40%;
        margin: auto;
        p {
            font-size: 20px;
        }
    }
}
</style>
