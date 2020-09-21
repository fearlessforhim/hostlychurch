<template>
  <div id="app" class="page-wrap">
    <router-view/>
  </div>
</template>
<script>


  export default {
    name: 'App',
    components: {
    },
    data() {
      return {

      }
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .page-wrap {
    margin: -8px;
  }
</style>