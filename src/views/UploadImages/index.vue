<template>
  <section class="upload-images">
    <div class="form__upload mx-auto p-2">
      <div
        class="form__upload__input"
        :class="{
          'form__list_visible': files.length > 1
        }"
      >
        <div
          class="input_box w-full px-2 py-1"
          :class="{
            'form__list_show': showListUploadImages
          }"
        >
          <input
            type="file"
            id="uploadImage"
            multiple
            @change="onChangeInputUploadFile"
          />
          <span
            class="form__upload__image image_title"
          >
            <template v-if="files.length === 1">
              {{ files[0].name }}
            </template>
            <template v-else-if="files.length > 1">
              <span @click.stop="onShowListUploadImages">
                Количество файлов для загрузки: {{ files.length }}
              </span>
            </template>
          </span>
          <button
            class="btn py-1 px-3"
            @click.stop="onShowWindowUploadFile"
          >Открыть</button>
        </div>

        <UploadListImages
          v-show="showListUploadImages"
          :list-names="listNameFiles"
          v-slot="{ text }"
        >
          {{ text }}
        </UploadListImages>
      </div>
      <button
        class="btn primary px-5 py-1 ml-3"
        :disabled="!files.length"
        @click.stop="onUpload"
        type="button"
      >Загрузить</button>
    </div>
    <PreviewListFile
      v-show="files.length"
      :list-files="files"
      v-slot="{ title, size, src }"
    >
      <PreviewImage
        :name="title"
        :size="size"
        :src="src"
        @preview-remove="onDeleteDownloadFile"
        :key="`upload-image-${title.length}-${size}`"
      />
    </PreviewListFile>
  </section>
</template>

<script>
  import PreviewListFile from './PreviewListFile'
  import PreviewImage from './PreviewImage'
  import UploadListImages from './UploadListImages'

  export default {
    name: 'ViewsUploadImages',
    components: {
      PreviewListFile,
      PreviewImage,
      UploadListImages
    },
    props: {
      idInputFile: {
        type: String,
        default: 'uploadImage'
      }
    },
    data: () => ({
      files: [],
      showListUploadImages: false
    }),
    computed: {
      listNameFiles() {
        const arr = []

        this.files.forEach(f => arr.push(f.name))

        return arr
      }
    },
    methods: {
      onShowWindowUploadFile() {
        return document.getElementById(this.idInputFile).click()
      },
      onChangeInputUploadFile(e) {
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
      onDeleteDownloadFile(e) {
        if (!e.name) return

        const { name } = e
        this.files = this.files.filter(file => file.name !== name)
      },
      onShowListUploadImages() {
        this.showListUploadImages = !this.showListUploadImages
      },

      // clearPreview(el) {
      //   el.style.bottom = '4px'
      //   el.innerHTML = '<div class="preview-info-progress"></div>'
      // },
      onUploadProgress(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log('onUploadProgress', percentCompleted)
      },

      onUpload() {
        console.log('[onUpload]:', this.files)
        this.files.forEach(f => {
          const data = new FormData()
          data.append('name', f.name)
          data.append('file', f)

          console.log(data)

          this.axios.put('/api/upload/image', { data: data }, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: this.onUploadProgress
          }).then(res => {
            console.log('progress bar', res)
          }).catch(err => {
            console.log('ERROR', err)
          })
        })

      //   preview.querySelectorAll('.preview-remove').forEach(e => e.remove())
      //   const previewInfo = preview.querySelectorAll('.preview-info')
      //   previewInfo.forEach(clearPreview)
      //   onUpload(files, previewInfo)
      }
    }
  }
</script>

<style lang="less" scoped>
  .form__list_visible {
    position: relative;

    &:hover {
      .input_box {
        cursor: pointer;
        border-color: darken(#cacaca, 8%);
        box-shadow: inset 0 0 5px 1px darken(#e2dada, 4%);
      }
    }

    &:focus-within {
      .input_box {
        background-color: rgba(#f3cfb7, 41%);
      }
    }
  }

  .form__upload {
    display: flex;
    max-width: 75%;

    &__input {
      flex-grow: 1;

      &.form__list_show:hover {
        border-radius: 5px 5px 0 0;
      }
    }

    &__image {

    }

    > .btn {
      color: @color-white;
      font-size: 22px;
      font-family: "Helvetica Bold", serif;
      border-radius: 5px;
      background-image: linear-gradient(to top, #ff6600, #ffa400);
      transition: all .33s;

      &:disabled {
        background-image: linear-gradient(to top, #b9b9b9, #dcdcdc);
        pointer-events: none;
        transition: all .33s;
      }
    }
  }

  .image_title {
    font-size: 20px;
    font-family: serif;
  }

  .input_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 2px 5px 0 #e2dada;
    border-radius: 5px;
    border: 1px solid #cacaca;
    transition: all .33s;

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
