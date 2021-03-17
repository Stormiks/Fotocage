<template>
  <div class="preview__image">
    <button
      type="button"
      @click="$emit('preview-remove', { name })"
      class="preview__image__remove preview_remove"
      :data-name="name"
    >&times;</button>

    <div class="preview__image__size preview_size">
      <span>{{ bytesToSize }}</span>
    </div>

    <figure>
      <img
        :src="src"
        :alt="name"
      />
      <figcaption class="preview__image__info preview_info">
        <p>
          <span :title="name">{{ name }}</span>
        </p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'PreviewImage',
    props: {
      sizes: {
        type: Array,
        default: () => (['Bytes', 'KB', 'MB', 'GB', 'TB']),
        validate: (val) => {
          return Array.isArray(val)
        }
      },
      name: String,
      size: Number,
      src: String
    },
    computed: {
      bytesToSize() {
        const sizes = this.sizes

        if (!this.size) return '0 Byte'

        const i = parseInt(Math.floor(Math.log(this.size) / Math.log(1024)))

        return Math.round(this.size / Math.pow(1024, i)) + ' ' + sizes[i]
      }
    }
  }
</script>

<style lang="less" scoped>
  .preview {
    &_remove {
      width: 20px;
      height: 20px;
      font-weight: bold;
      cursor: pointer;
      transition: all .22s;
    }

    &_size {
      color: #000;
      font-size: .8rem;
      line-height: 1.2;
      font-family: 'Roboto Regular';
      text-align: center;
    }

    &_info {
      font-size: .8rem;

      p {
        color: #616060;
        font-family: 'Roboto Regular';
        text-align: center;
        margin: 0;
        padding: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        &:hover {
          cursor: help;
        }
      }
    }

    &__image {
      display: flex;
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
      position: relative;
      margin-bottom: .5rem;
      margin-right: .5rem;
      overflow: hidden;
      width: 100%;
      max-width: 180px;

      &__size {
        background: rgba(@color-white, 60%);
        opacity: 0;
        position: absolute;
        padding: .2em;
        left: 0;
        top: 0;
        transition: opacity .22s;
      }

      figure {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
        padding: .3em;
        width: inherit;
      }

      &:only-of-type {
        margin-right: 0;
        margin-bottom: 0;
      }

      img {
        border-radius: 5px;
        height: 180px;
        width: 180px;
        height: auto;
      }

      &:hover {
        .preview__image__remove,
        .preview__image__size {
          opacity: 1;
        }
      }
    }

    &__image__remove {
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      background: rgba(@color-white, 54%);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: @color-white;
      }
    }

    &__image__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 .55em .2em;
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
