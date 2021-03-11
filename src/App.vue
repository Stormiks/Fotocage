<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: inherit;
  }
</style>
