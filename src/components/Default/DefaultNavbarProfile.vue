<template>
  <div class="inset-y-0 right-0 flex items-center pr-2 static sm:inset-auto sm:ml-6 sm:pr-0">
    <div class="ml-3 relative">
      <div>
        <button
          type="button"
          class="profile__avatar bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          @click="onShowUserMenu"
          :aria-expanded="showUserMenu"
          aria-haspopup="true"
        >
          <img
            v-if="avatar"
            class="h-12 w-12 rounded-full"
            :src="avatar"
            :alt="login"
          />
          <SvgIcon
            class="h-12 w-12 rounded-full"
            v-else
            :name="'user-avatar'"
          />
        </button>

        <DefaultDropdownMenu
          v-if="menu.length"
          :is-open="showUserMenu"
        >
          <div class="dropdown__group">
            <span class="block px-3 py-1.5">{{ login }}</span>
          </div>
          <div
            class="dropdown__group"
          >
            <router-link
              v-for="link in menu"
              :key="link.name"
              :to="link.url"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              role="menuitem"
            >{{ link.title }}</router-link>
          </div>
        </DefaultDropdownMenu>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SvgIcon from 'components/SvgIcon'
  import DefaultDropdownMenu from './DefaultDropdownMenu'

  export default {
    name: 'DefaultNavbarProfile',
    data: () => ({
      showUserMenu: false,
      menu: [
        // {
        //   title: 'Мой профиль',
        //   url: '#'
        // },
        // {
        //   title: 'Настройки профиля',
        //   url: '#'
        // }
      ]
    }),
    components: {
      DefaultDropdownMenu,
      SvgIcon
    },
    computed: {
      ...mapState({
        avatar: state => state.avatar,
        login: state => state.login
      })
    },
    methods: {
      onShowUserMenu() {
        this.showUserMenu = !this.showUserMenu
      }
    }
  }
</script>

<style lang="less" scoped>
  .profile__avatar {
    border: 3px solid #cc6100;
    transition: all .2s ease-in 0s;

    &[aria-expanded="true"] {
      box-shadow: 0 2px 6px 0px rgba(#000, 46%);
    }
  }

  .dropdown__group {
    &:not(:first-child) {
      border-top-color: #d1d5db;
      border-top-style: solid;
      border-top-width: 1px;
    }
  }
</style>
