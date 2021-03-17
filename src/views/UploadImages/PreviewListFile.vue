<template>
  <div class="preview p-2">
    <ul v-if="listFiles.length">
      <li
        class="preview__item"
        :class="{
          'my-2': ixd > 0 && ixd < (listFiles.length - 1),
          'mt-0': ixd === 0,
          'mb-0': ixd === (listFiles.length - 1)
        }"
        v-for="(file, ixd) in listFiles"
        :key="`preview-image-${file.name.length}-${file.size}`"
      >
        <slot
          :title="file.name"
          :size="file.size"
          :src="file.src"
        ></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PreviewListFile',
    props: {
      listFiles: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="less" scoped>
  .preview {
    display: flex;
    flex-wrap: wrap;

    &__item {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
