<template>
  <div
    class="nav__list__item nav__link p-2"
  >
    <router-link
      v-if="urlName !== ''"
      class="px-1"
      :to="{ name: urlName }"
    >
      <SvgIcon :name="iconName" />
      {{ title }}
    </router-link>
    <a
      v-else
      @click="logout"
      class="px-1"
    >
      <SvgIcon :name="`logout`" />
      {{ title }}
    </a>
  </div>
</template>

<script>
  import SvgIcon from 'components/SvgIcon'

  export default {
    components: { SvgIcon },
    name: 'DefaultLayoutNavbarItem',
    props: {
      title: String,
      iconName: String,
      urlName: String
    },
    methods: {
      logout() {
        this.$store.dispatch('logout').then(status => this.$router.push({ name: 'Login' }))
      }
    }
  }
</script>

<style lang="less" scoped>
  .nav__link {
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
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-end;
      text-shadow: 1px 1px 0px #ececec;
      color: #787878;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 13px;
      height: 36px;

      img {
        margin: 3px;
      }

      &:hover {
        color: #444;
      }
    }
  }
</style>
