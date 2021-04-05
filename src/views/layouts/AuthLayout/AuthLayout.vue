<template>
  <div
    :style="`background-image: url('${bg}')`"
    class="layout auth-layout items-center justify-center min-h-full"
  >
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout',
    data: () => ({
      bg: require('assets/img/auth-bg.png')
    })
  }
</script>
