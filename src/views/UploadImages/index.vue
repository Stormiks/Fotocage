<template>
  <section class="upload-images">
    <div class="form__upload mx-auto p-2">
      <div
        @click.stop="uploadInput"
        class="form__upload__input input_box px-2 py-1"
      >
        <input
          type="file"
          id="uploadImage"
          multiple
          @change="changeHandler"
        />
        <span class="form__upload__image image_title"></span>
        <button
          class="btn py-1 px-3"
          @click.stop="uploadInput"
        >Открыть</button>
      </div>
      <button
        class="btn primary px-5 py-1"
        @click.stop="uploadHandler"
        type="button"
      >Загрузить</button>
    </div>
    <div
      class="preview"
      v-if="files.length"
    >
      <UploadImagesPreview
        v-for="(file, ixd) in files"
        @preview-remove="removeHandler"
        :file="file"
        :key="`preview-image-${ixd}-${file.size}`"
      />
    </div>
  </section>
</template>

<script>
  import UploadImagesPreview from './UploadImagesPreview'

  export default {
    name: 'ViewsUploadImages',
    components: { UploadImagesPreview },
    props: {
      idInputFile: {
        type: String,
        default: 'uploadImage'
      }
    },
    data: () => ({
      files: []
    }),
    methods: {
      uploadInput() {
        return document.getElementById(this.idInputFile).click()
      },
      changeHandler(e) {
        if (!e.target.files.length) return

        const files = Array.from(e.target.files)

        files.forEach(file => {
          if (!file.type.match('image')) return

          this.addFileToPreview(file)
        })
      },
      addFileToPreview(img) {
        const reader = new FileReader()

        reader.onload = e => {
          const src = e.target.result

          img.src = src

          this.files.push(img)
        }

        reader.readAsDataURL(img)
      },
      removeHandler(e) {
        if (!e.name) return

        const { name } = e
        this.files = this.files.filter(file => file.name !== name)
      },

      // clearPreview(el) {
      //   el.style.bottom = '4px'
      //   el.innerHTML = '<div class="preview-info-progress"></div>'
      // },

      uploadHandler() {
      //   preview.querySelectorAll('.preview-remove').forEach(e => e.remove())
      //   const previewInfo = preview.querySelectorAll('.preview-info')
      //   previewInfo.forEach(clearPreview)
      //   onUpload(files, previewInfo)
      }
    }
  }
</script>

<style lang="less" scoped>
  .upload-images {
    .preview {
      display: flex;
      flex-wrap: wrap;
      padding: .5rem;
    }
  }

  .form__upload {
    display: flex;
    max-width: 75%;

    &__input {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: space-between;

      + .btn {
        margin-left: .7em;
      }
    }

    &__image {

    }

    > button:last-child {
      color: @color-white;
      font-size: 22px;
      font-family: "Helvetica Bold", serif;
      border-radius: 5px;
      background-image: linear-gradient(to top, #ffa400, #ff6600);
    }
  }

  .image_title {
    font-size: 20px;
    font-family: serif;
  }

  .input_box {
    box-shadow: inset 0 2px 5px 0 #e2dada;
    border-radius: 5px;
    border: 1px solid #cacaca;
    transition: all .33s;

    &:hover {
      cursor: pointer;
      border-color: darken(#cacaca, 8%);
      box-shadow: inset 0 0 5px 1px darken(#e2dada, 4%);
    }

    &:focus-within {
      background-color: rgba(#f3cfb7, 41%);
    }

    input[type="file"] {
      display: none;
    }

    button {
      background-color: #969292;
      border-radius: 5px;
      color: @color-white;
      transition: all .33s;

      &:hover,
      &:focus {
        background-color: rgba(#969292, 74%);
      }
    }
  }
</style>
