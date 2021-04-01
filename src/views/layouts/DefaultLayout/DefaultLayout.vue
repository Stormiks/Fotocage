<template>
  <div class="layout layout-default">
    <DefaultNavbar v-slot:navigations>
      <DefaultNav />
    </DefaultNavbar>

    <main class="main">
      <router-view />
    </main>

    <DefaultLayoutFooter />
  </div>
</template>

<script>
  import DefaultNavbar from './components/DefaultNavbar'
  import DefaultNav from './components/DefaultNav'
  import DefaultLayoutFooter from './components/DefaultLayoutFooter'

  export default {
    components: {
      DefaultNavbar,
      DefaultNav,
      DefaultLayoutFooter
    },
    name: 'DefaultLayout',
  }
</script>

<style lang="less" scoped>
  main {
    flex-grow: 1;
  }
</style>
