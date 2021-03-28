<template>
  <div class="form__group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AuthFormGroup'
  }
</script>

<style lang="less" scoped>
  .form__group {
    input {
      padding: 15px 15px 15px 45px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 1px 1px #ccc inset, 0 1px 0 @color-white;

      &:focus {
        background-color: @color-white;
        border-color: #e8c291;
        outline: none;
        box-shadow: 0 0 0 1px #e8c291 inset;
      }
    }
  }
</style>
