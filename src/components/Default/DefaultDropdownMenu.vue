<template>
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
      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
      v-show="isOpen"
    >
      <slot/>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'DefaultDropdownMenu',
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>

</style>
