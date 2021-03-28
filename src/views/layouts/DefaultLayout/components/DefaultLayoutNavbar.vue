<template>
  <header>
    <div class="header__nav_title">
      <h1>
        <span>Фотогаллерея</span>
      </h1>
    </div>
    <nav class="nav__list">
      <DefaultLayoutNavbarItem
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
  </header>
</template>

<script>
  import DefaultLayoutNavbarItem from './DefaultLayoutNavbarItem'

  export default {
    name: 'DefaultLayoutNavbar',
    components: { DefaultLayoutNavbarItem },
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
  header {
    height: 92px;
    background: linear-gradient(to top, #e0e0e0, @color-white);
    border-bottom: 1px solid #b1acac;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }

  .header__nav_title {
    h1 {
      color: #676666;
      font-family: 'Lobster';
      font-size: 26pt;
      text-shadow: 1px 1px 0px #848383;
      letter-spacing: 1px;
    }

    span {
      color: #ff7700;
    }
  }

  .nav__list {
    display: flex;
    flex-direction: row;
    padding-left: 4px;
    padding-right: 4px;
    height: inherit;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;

      + .nav__list__item {
        border-left: 1px solid #ddd;
      }
    }
  }
</style>
