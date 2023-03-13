<template>
  <nav class="nav__list flex flex-row">
    <ul class="inline-flex">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li v-for="(link, ixd) in routes">
        <DefaultNavItem
          :key="`nav-link-${ixd}`"
          :class="{
            'active': link.name === activeRouterName
          }"
        >
          <DefaultNavLink
            :title="link.title"
            :key="`nav-link-${link.name}`"
            :icon-name="link.icon"
            :url-name="link.name"
          />
        </DefaultNavItem>
      </li>
      <li>
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
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
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
        logged: state => state.isLoggedIn
      }),
      ...mapGetters({
        routes: 'routesAccessByUser'
      }),
      activeRouterName() {
        return this.$route.name
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/logout').then(status => this.$router.push({ name: 'Login' }))
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
