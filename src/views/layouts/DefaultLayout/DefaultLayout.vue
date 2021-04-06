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
  import DefaultNavbar from 'components/Default/DefaultNavbar'
  import DefaultNav from 'components/Default/DefaultNav'
  import DefaultLayoutFooter from 'components/Default/DefaultLayoutFooter'

  export default {
    name: 'DefaultLayout',
    components: {
      DefaultNavbar,
      DefaultNav,
      DefaultLayoutFooter
    }
  }
</script>

<style lang="less" scoped>
  main {
    flex-grow: 1;
  }
</style>
