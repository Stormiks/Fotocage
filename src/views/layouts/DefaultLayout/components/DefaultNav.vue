<template>
  <nav class="nav__list flex flex-row">
    <DefaultNavItem
      v-for="(link, ixd) in links"
      :key="`nav-link-${ixd}`"
      :title="link.title"
      :icon-name="link.icon"
      :url-name="link.urlName"
      :class="{
        'active': link.urlName === activeRouterName
      }"
    />
  </nav>
</template>

<script>
  import DefaultNavItem from './DefaultNavItem'

  export default {
    name: 'DefaultNav',
    components: {
      DefaultNavItem
    },
    data: () => ({
      links: [
        {
          title: 'Главная',
          urlName: 'Upload-Images',
          icon: 'home-page'
        },
        {
          title: 'Галлерея',
          urlName: 'Gallery-Images',
          icon: 'gallery'
        },
        {
          title: 'Обо мне',
          urlName: 'About',
          icon: 'members'
        },
        {
          title: 'Выйти',
          urlName: '',
          icon: 'logout'
        }
      ]
    }),
    computed: {
      activeRouterName() {
        return this.$route.name
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
