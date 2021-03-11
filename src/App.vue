<template>
  <div id="app">
    <components :is="layout">
      <router-view/>
    </components>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
}
</script>
