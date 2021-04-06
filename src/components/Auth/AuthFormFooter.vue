<template>
  <div class="form__footer mt-3">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AuthFormFooter'
  }
</script>

<style lang="less" scoped>
  .form__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    input[type="submit"],
    button[type="submit"] {
      background-color: #ffb94b;
      background-image: linear-gradient(to bottom, #fddb6f, #ffb94b);
      border-radius: 3px;
      text-shadow: 0 1px 0 rgba(@color-white, 50%);
      text-transform: uppercase;
      box-shadow: 0 0 1px rgba(#000, 30%), 0 1px 0 rgba(@color-white, 30%) inset;
      border-width: 1px;
      border-style: solid;
      border-color: #d69e31 #e3a037 #d5982d #e3a037;
      padding: 0 .75rem;
      cursor: pointer;
      font: bold 15px/2.2 'Helvetica';
      color: #8f5a0a;
      transition: all .23s ease-in-out 0s;

      &[disabled] {
        filter: grayscale(.4);
        pointer-events: none;
        cursor: default;
      }

      &:hover,
      &:focus {
        background-color: #fddb6f;
        border: none;
        box-shadow: 0 1px 2px 1px rgba(#000, 20%) inset, 0 0 5px 2px rgba(#000, 15%) inset;
      }

      &:focus {
        border: 1px solid #000;
      }

      &:active,
      &:active {
        outline: none;
        box-shadow: 0 1px 4px rgba(#000, 50%) inset;
      }
    }

    a {
      color: #3151A2;
      line-height: 35px;
      margin-left: 10px;
    }
  }
</style>
