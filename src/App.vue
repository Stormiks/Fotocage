<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.axios.get('/api/list/users').then(res => {
        console.log(res.data)
      })
      this.axios.get('/api/images').then(res => {
        console.log(res.data)
      })
    }
  }
</script>

<style lang="less" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: inherit;
  }
</style>
