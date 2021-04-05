<template>
  <div class="form__upload__list px-2">
    <ul
      v-if="listNames.length > 1"
      class="list__images upload__images"
    >
      <li
        v-for="(name, ixd) in listNames"
        :key="`upload-image-title-${ixd}`"
        class="list__images__item images__title py-0.5"
      >
        <slot :text="name"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'UploadListImages',
    props: {
      listNames: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="less" scoped>
  .form__upload__list {
    position: absolute;
    top: 100%;
    left: 1px;
    right: 1px;
    width: calc(100% - 2px);
    z-index: 1;
    background-color: @color-white;
    box-shadow: 0 1px 2px 0 rgba(#000, 78%);
    border-radius: 0 0 3px 3px;
  }
</style>
