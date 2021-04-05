<template>
  <div class="preview_box flex">
    <div class="preview__image">
      <button
        v-if="!download"
        type="button"
        @click="$emit('preview-remove', { name })"
        class="preview__image__remove preview_remove"
        :disabled="download"
      >&times;</button>

      <div class="preview__image__size preview_size">
        <span>{{ bytesToSize }}</span>
      </div>

      <figure>
        <img
          :src="src"
          :alt="name"
        />
        <figcaption class="preview__image__info preview_info mt-0.5">
          <p>
            <span :title="title">{{ name }}</span>
          </p>

          <div
            v-show="progressDownload > 0"
            class="preview__progress_box progress_download"
          >
            <div
              class="progress_bar"
              :style="{ 'width': `${progressDownload}%` }"
            ></div>
            <span>{{ progressDownload }}%</span>
          </div>
        </figcaption>
      </figure>
    </div>

    <div class="preview__image__data image__data flex-grow ml-2 py-1">
      <div class="flex">
        <strong class="mr-1">Полное имя:</strong>
        <span
          contenteditable="false"
          data-editable-field="title"
          data-placeholder="Кликните, чтобы отредактировать"
          @click.stop="changeStateContenteditable($event, 'true')"
          @blur="updateContent"
        >{{ titleEdit }}</span>
      </div>

      <div class="flex align-center">
        <strong class="mr-1">Описание:</strong>
        <span
          class="preview__image__desc"
          contenteditable="false"
          data-editable-field="description"
          data-placeholder="Кликните, чтобы отредактировать"
          @click.stop="changeStateContenteditable($event, 'true')"
          @blur="updateContent"
        >{{ descriptionEdit }}</span>
      </div>
    </div>
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
      description: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      size: Number,
      src: String
    },
    data: () => ({
      progressDownload: 0,
      download: false,
      titleEdit: '',
      descriptionEdit: ''
      // enableEditor: false
    }),
    watch: {
      description: {
        handler: function (newText) {
          // eslint-disable-next-line no-unused-expressions
          this.description !== '' ? this.descriptionEdit = newText : ''
        },
        immediate: true
      },
      title: {
        handler: function (newText) {
          // eslint-disable-next-line no-unused-expressions
          this.name !== '' ? this.titleEdit = newText : ''
        },
        immediate: true
      }
    },
    computed: {
      bytesToSize() {
        const sizes = this.sizes

        if (!this.size) return '0 Byte'

        const i = parseInt(Math.floor(Math.log(this.size) / Math.log(1024)))

        return Math.round(this.size / Math.pow(1024, i)) + ' ' + sizes[i]
      }
    },
    methods: {
      updateContent(e) {
        const dataVariable = `${e.target.dataset.editableField}Edit`
        const text = e.target.textContent
        this[dataVariable] = String(text).trim()

        this.$el.querySelectorAll('span[contenteditable="true"').forEach(n => {
          n.contentEditable = 'false'
        })

        this.saveInfo()
      },
      changeStateContenteditable(e, bool) {
        e.target.contentEditable = bool
        e.target.focus()
      },
      saveInfo() {
        // this.enableEditor = true
        this.$emit('update-preview-info', {
          title: this.titleEdit,
          description: this.descriptionEdit
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  span {
    &[contentEditable="false"] {
      &[data-placeholder]:empty::before {
        content: attr(data-placeholder);
        color: rgba(#616060, 80%)
      }
    }

    &[contentEditable="true"] {
      padding: .15rem;

      &[data-placeholder]:empty::before {
        content: attr(data-placeholder);
        color: rgba(#616060, 0%);
        opacity: 0;
      }
    }
  }

  .progress {
    &_bar {
      background: #42b983;
      transition: width .22s;
    }

    &_download {
      color: #000;
      border-radius: 3px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      span:not(class) {
        letter-spacing: 1px;
      }
    }
  }

  .preview {
    &_box {
      box-shadow: 0 0 5px 1px rgba(#000, 40%);
      max-height: 216px;
      overflow: hidden;
    }

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

    &__progress_box {
      background-color: @color-white;
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      span:not(class) {
        z-index: 2;
      }
    }

    .progress_bar {
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &_info {
      font-size: .8rem;
      position: relative;

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
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 180px;

      &__size {
        background: rgba(@color-white, 60%);
        opacity: 0;
        position: absolute;
        padding: .2rem;
        left: 0;
        top: 0;
        transition: opacity .22s;
      }

      figure {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
        padding: .3rem;
        width: inherit;
      }

      &:only-of-type {
        margin-right: 0;
        margin-bottom: 0;
      }

      img {
        border-radius: 3px;
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
      padding: 0 .55rem .2rem;
    }
  }

  .image__data {
    padding: .3rem;
  }
</style>
