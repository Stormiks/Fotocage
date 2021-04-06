<template>
  <header class="flex items-center justify-around flex-wrap text-center">
    <div class="header__left">
      <h1>
        <span>Фотогаллерея</span>
      </h1>
    </div>

    <div class="header__right h-full">
      <slot name="navigations"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'DefaultNavbar'
  }
</script>

<style lang="less" scoped>
  header {
    background: linear-gradient(to top, #e0e0e0, @color-white);
    border-bottom: 1px solid #b1acac;

  }

  .header__left {
    h1 {
      color: #676666;
      font-family: 'Lobster';
      font-size: 26pt;
      text-shadow: 1px 1px 0 #848383;
      letter-spacing: 1px;
    }

    span {
      color: #ff7700;
    }
  }

</style>
