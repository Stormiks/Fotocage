<template>
  <div class="layout layout-default">
    <DefaultNavbar>
      <template v-slot:navigations>
        <DefaultNav />
      </template>
      <template v-slot:navbar-profile>
        <DefaultNavbarProfile />
      </template>
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
  import DefaultNavbarProfile from 'components/Default/DefaultNavbarProfile'

  export default {
    components: {
      DefaultNavbar,
      DefaultNav,
      DefaultNavbarProfile,
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
