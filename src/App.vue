<template>
  <div id="app" class="page-wrap">
    <router-view/>
  </div>
</template>
<style lang="scss">

  @import '@fortawesome/fontawesome-free/css/all.css';

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
