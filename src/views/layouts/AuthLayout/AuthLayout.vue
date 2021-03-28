<template>
  <div class="layout auth-layout items-center justify-center min-h-full">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout'
  }
</script>

<style lang="less" scoped>
  .auth-layout {

    background-image: url('assets/auth-bg.png');
  }
</style>
