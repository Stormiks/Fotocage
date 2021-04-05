<template>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    <div class="ml-3 relative">
      <div>
        <button
          type="button"
          class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          id="user-menu"
          @click="onShowUserMenu"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
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
  export default {
    name: 'DefaultNavbarProfile',
    data: () => ({
      showUserMenu: false
    }),
    methods: {
      onShowUserMenu() {
        this.showUserMenu = !this.showUserMenu
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
