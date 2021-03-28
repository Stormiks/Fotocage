<template>
  <div
    class="nav__list__item nav__link flex p-2"
  >
    <router-link
      v-if="urlName !== ''"
      class="flex items-center justify-center flex-grow flex-col px-1"
      :to="{ name: urlName }"
    >
      <SvgIcon :name="iconName" />
      {{ title }}
    </router-link>
    <a
      v-else
      @click="logout"
      class="flex items-center justify-center flex-grow flex-col px-1"
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
      text-shadow: 1px 1px 0 #ececec;
      color: #787878;
      font-family: 'Helvetica Roman';
      font-size: 13px;

      svg {
        margin-bottom: .2rem;
      }

      &:hover {
        color: #444;
      }
    }
  }
</style>
