<template>
  <header>
    <div class="head">
      <h1>
        <span>Фотогаллерея</span>
      </h1>
    </div>
    <nav class="nav">
      <div
        :class="{
          active: 'Upload-Images' === activeRouterName
        }"
        class="list-item p-2"
      >
        <router-link
          class="px-1"
          :to="{ name: 'Upload-Images' }"
        >
          <img
            src="/assets/img/bar-img/home.png"
            alt="Upload"
          />
          Главная
        </router-link>
      </div>
      <div
        :class="{
          active: 'Gallery-Images' === activeRouterName
        }"
        class="list-item p-2"
      >
        <router-link
          class="px-1"
          :to="{ name: 'Gallery-Images' }"
        >
          <img
            src="/assets/img/bar-img/gallery.png"
            alt="Gallery"
          />
          Галлерея
        </router-link>
      </div>
      <div
        :class="{
          active: 'About' === activeRouterName
        }"
        class="list-item p-2"
      >
        <router-link
          class="px-1"
          :to="{ name: 'About' }"
        >
          <img
            src="/assets/img/bar-img/my-info.png"
            alt="About"
          />
          Обо мне
        </router-link>
      </div>
      <div
        :class="{
          active: 'Logout' === activeRouterName
        }"
        class="list-item p-2"
        @click="logout"
      >
        <a
          class="px-1"
          title="Выйти"
        >
          <img
            src="/assets/img/bar-img/logout.png"
            alt="Logout"
          />
          Выйти
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'DefaultLayoutNavbar',
    computed: {
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
  @font-face {
    font-family: 'Lobster';
    src: local('Lobster'), url('/assets/fonts/Lobster1.4.ttf');
  }

  @font-face {
    font-family: 'Roboto Regular';
    src: local('Roboto Regular'), url('/assets/fonts/RobotoRegular.ttf');
  }

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

  .head {
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

  .nav {
    display: flex;
    flex-direction: row;
    padding-left: 4px;
    padding-right: 4px;
    height: inherit;

    .list-item + .list-item {
      border-left: 1px solid #ddd;
    }
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid transparent;
    transition-duration: 0.5s;

    &:hover {
      background: linear-gradient(to top, #bababa, @color-white);
    }

    &.active {
      border-bottom: 3px solid darken(#ff7900, 10%);

      &, * {
        cursor: not-allowed;
      }
    }

    &:not(.active)&:hover {
      cursor: pointer;
      border-bottom: 3px solid #ff7900;
    }

    a {
      align-items: center;
      display: flex;
      color: #787878;
      flex-direction: column;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 13px;
      height: 36px;
      justify-content: flex-end;
      text-shadow: 1px 1px 0px #ececec;

      &:hover {
        color: #444;
      }

      img {
        margin: 3px;
      }
    }
  }
</style>
