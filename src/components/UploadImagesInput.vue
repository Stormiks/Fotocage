<template>
  <div
    class="input_box flex flex-wrap md:flex-nowrap items-center justify-between w-full relative rounded-md px-2 py-1"
    :class="{
      'mb-10': filesCount === 0
    }"
  >
    <input
      type="file"
      :id="idInputFile"
      multiple
      :accept="acceptFormatsFile"
      @change="$emit('change-input', $event)"
    />
    <span class="form__upload__image image_title">
      <template v-if="filesCount === 0">
        <span class="text-gray-400 absolute w-full top-full">Выберите файлы для загрузки с вашего компьютера</span>
      </template>
      <template v-else-if="filesCount === 1">
        {{ firstFileName }}
      </template>
      <template v-else-if="filesCount > 1">
        <span @click.stop="$emit('visible-list-files')">
          Количество файлов для загрузки: {{ filesCount }}
        </span>
      </template>
    </span>
    <button
      class="btn py-1 px-3"
      @click.stop="onShowWindowUploadFile"
    >Открыть</button>
  </div>
</template>

<script>
  export default {
    name: 'UploadImagesInput',
    props: {
      idInputFile: {
        type: String,
        default: 'uploadImage'
      },
      acceptFormatsFile: {
        type: String,
        default: '.jpg, .jpeg'
      },
      firstFileName: {
        type: String,
        default: ''
      },
      filesCount: {
        type: Number,
        default: 0
      }
    },
    methods: {
      onShowWindowUploadFile() {
        return document.getElementById(this.idInputFile).click()
      }
    }
  }
</script>

<style lang="less" scoped>
  .form__list_visible {
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

  .input_box {
    box-shadow: inset 0 2px 5px 0 #e2dada;
    border: 1px solid #cacaca;
    transition: all .33s;

    input[type="file"] {
      display: none;
    }

    button {
      background-color: #969292;
      border-radius: 5px;
      color: @color-white;
      font-family: "Helvetica Medium";
      letter-spacing: 1px;
      transition: all .33s;

      &:hover,
      &:focus {
        background-color: rgba(#969292, 74%);
      }
    }
  }

  .image_title {
    font-size: 18px;
    font-family: 'Roboto Regular', 'Helvetica Roman';
  }
</style>
