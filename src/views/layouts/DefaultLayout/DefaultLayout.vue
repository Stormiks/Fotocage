<template>
  <div class="layout layout-default">
    <DefaultLayoutNavbar />

    <main class="main">
      <router-view />
    </main>

    <DefaultLayoutFooter />
  </div>
</template>

<script>
  import DefaultLayoutFooter from './components/DefaultLayoutFooter'
  import DefaultLayoutNavbar from './components/DefaultLayoutNavbar'

  export default {
    components: { DefaultLayoutNavbar, DefaultLayoutFooter },
    name: 'DefaultLayout',
  }
</script>

<style lang="less" scoped>
  main {
    flex-grow: 1;
  }
</style>
