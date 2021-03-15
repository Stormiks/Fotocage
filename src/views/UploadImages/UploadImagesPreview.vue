<template>
  <div
    class="preview-image"
  >
    <div
      @click="$emit('preview-remove', file)"
      class="preview-remove"
      :data-name="file.name"
    >&times;</div>
    <img
      :src="file.src"
      :alt="file.name"
    />
    <div class="preview-info">
      <span>{{ file.name }}</span>
      {{ bytesToSize }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UploadImagesPreview',
    props: {
      file: {
        type: File,
        default: () => ({})
      },
      sizes: {
        type: Array,
        default: () => (['Bytes', 'KB', 'MB', 'GB', 'TB']),
        validate: (val) => {
          return Array.isArray(val)
        }
      }
    },
    computed: {
      bytesToSize() {
        const sizes = this.sizes

        if (!this.file.size) return '0 Byte'

        const i = parseInt(Math.floor(Math.log(this.file.size) / Math.log(1024)))

        return Math.round(this.file.size / Math.pow(1024, i)) + ' ' + sizes[i]
      }
    }
  }
</script>

<style lang="less" scoped>
  .preview {
    &-image {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: .5rem;
      margin-right: .5rem;
      overflow: hidden;
      max-height: 180px;
      max-width: 180px;

      &:only-of-type {
        margin-right: 0;
        margin-bottom: 0;
      }

      &.removing {
        transform: scale(0);
        transition: transform .3s;
      }

      img {
        width: 180px;
        height: auto;
      }

      &:hover {
        .preview-remove {
          opacity: 1;
        }

        .preview-info {
          bottom: 4px;
        }
      }
    }

    &-remove {
      opacity: 0;
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0;
      top: 0;
      font-weight: bold;
      background: rgba(255, 255, 255, .5);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: opacity .22s;
    }

    &-info {
      position: absolute;
      right: 0;
      bottom: -30px;
      left: 0;
      height: 24px;
      font-size: .8rem;
      background: rgba(255, 255, 255, .5);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px;
      transition: bottom .22s;
    }

    &-info-progress {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: #42b983;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: width .22s;
    }
  }
</style>
