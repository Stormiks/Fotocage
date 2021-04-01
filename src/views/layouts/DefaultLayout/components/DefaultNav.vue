<template>
  <nav class="nav__list flex flex-row">
    <DefaultNavItem
      v-for="(link, ixd) in routes"
      :key="`nav-link-${ixd}`"
      :class="{
        'active': link.name === activeRouterName
      }"
    >
      <DefaultNavLink
        :title="link.meta.title"
        :key="`nav-link-${link.name}`"
        :icon-name="link.name"
        :url-name="link.name"
      />
    </DefaultNavItem>

    <DefaultNavItem>
      <DefaultNavLink
        v-if="!logged"
        :key="`nav-link-Login`"
        :url-name="'Login'"
        :icon-name="'Logout'"
        :title="'Войти'"
      />
      <DefaultNavLink
        v-if="logged"
        :key="`nav-link-Logout`"
        :icon-name="'Logout'"
        :title="'Выйти'"
        @click.native.prevent="logout"
      />
    </DefaultNavItem>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  import DefaultNavItem from './DefaultNavItem'
  import DefaultNavLink from './DefaultNavLink'

  export default {
    name: 'DefaultNav',
    components: {
      DefaultNavItem,
      DefaultNavLink
    },
    computed: {
      ...mapState({
        logged: state => state.isLoggedIn,
        routes: state => state.routesMenu
      }),
      activeRouterName() {
        return this.$route.name
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout').then(status => this.$router.push({ name: 'Login' }))
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav__list {
    padding-left: 4px;
    padding-right: 4px;
    height: inherit;

    &__item {
      + .nav__list__item {
        border-left: 1px solid #ddd;
      }
    }
  }
</style>
