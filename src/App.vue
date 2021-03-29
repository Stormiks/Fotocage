<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.axios.get('/api/list/users', {
        params: {
          count: 5
        }
      }).then(res => {
        console.info(res.data.users)
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
