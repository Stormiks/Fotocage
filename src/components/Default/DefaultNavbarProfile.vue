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
            class=" h-12 w-12 rounded-full"
            :src="avatar"
            :alt="`User`"
          />
          <SvgIcon
            class=" h-12 w-12 rounded-full"
            v-else
            :name="'user-avatar'"
          />
        </button>
      </div>

      <transition
        mode="in-out"
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
        appear
      >
        <div
          class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
          v-show="showUserMenu"
        >
          <router-link
            to="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Мой профиль
          </router-link>
          <router-link
            to="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Настройки профиля
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SvgIcon from 'components/SvgIcon'
  export default {
    name: 'DefaultNavbarProfile',
    data: () => ({
      showUserMenu: false
    }),
    components: {
      SvgIcon
    },
    computed: {
      ...mapState({
        avatar: state => state.avatar
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
</style>
