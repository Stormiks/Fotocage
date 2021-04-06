<template>
  <div class="preview py-2 sm:px-2">
    <ul
      v-if="listFiles.length"
      class="w-full"
    >
      <li
        class="preview__item"
        :class="{
          'my-2': ixd > 0 && ixd < (listFiles.length - 1),
          'mt-0': ixd === 0,
          'mt-2': ixd === 1 && listFiles.length == 2,
          'mb-2': ixd === 0 && listFiles.length == 2,
          'mb-0': ixd === (listFiles.length - 1)
        }"
        v-for="(file, ixd) in listFiles"
        :key="`preview-image-${file.name.length}-${file.size}`"
      >
        <slot
          :index="ixd"
          :title="file.name"
          :size="file.size"
          :src="file.src"
          :description="file.description"
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
