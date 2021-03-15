<template>
  <header>
    <div class="head">
      <h1>
        <span>Фотогаллерея</span>
      </h1>
    </div>
    <nav class="nav">
      <div class="list-item link1">
        <router-link :to="{ name: 'Upload-Images' }">
          <img src="/assets/img/bar-img/home.png" alt="Upload" />
          Главная
        </router-link>
      </div>
      <div class="list-item link2">
        <router-link :to="{ name: 'Gallery-Images' }">
          <img src="/assets/img/bar-img/gallery.png" alt="Gallery" />
          Галлерея
        </router-link>
      </div>
      <div class="list-item link3">
        <router-link :to="{ name: 'About' }">
          <img src="/assets/img/bar-img/my-info.png" alt="About" />
          Обо мне
        </router-link>
      </div>
      <div
        class="list-item link4 p-2"
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
    height: 93px;
    width: 220px;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 76px;

    &:hover {
      background: linear-gradient(to top, #bababa, @color-white);
    }
      border-bottom: 3px solid #ff7900;
      transition-duration: 0.5s;
    }

    a {
      align-items: center;
      display: flex;
      color: #787878;
      flex-direction: column;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 10pt;
      height: 36px;
      justify-content: flex-end;
      text-shadow: 1px 1px 0px #ececec;
      width: 57px;

      &:hover {
        color: #444;
      }

      img {
        margin: 3px;
      }
    }

    .link1,
    .link2 {
      border-right: 1px solid #ddd;
    }
  }
</style>
