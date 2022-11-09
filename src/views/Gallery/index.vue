<template>
  <section class="gallery w-full py-4">
    <CoolLightBox
      v-if="files.length && loadedFiles"
      :items="files"
      :index="index"
      @close="index = null"
    >
    </CoolLightBox>

    <VueLoadingIndicator
      v-if="loading"
      class="big primary"
    />

    <div
      v-if="files.length && loadedFiles"
      class="gallery__grid grid grid-cols-auto-200 gap-2 px-3"
    >
      <GalleryImagesCard
        v-for="(img, indexImg) in files"
        :key="`gallery-image-${img.id}`"
        :title="img.title"
        :src="img.src"
        :description="img.description"
      >
        <template v-slot:card-controls>
          <CardControlGroup
            :key="`gallery-file-controls-${img.id}`"
            :show="index === indexImg"
            @open-modal-file="handleSetIndex(indexImg)"
          />
        </template>
      </GalleryImagesCard>
    </div>
    <div
      v-if="!files.length && loadedFiles"
      class="gallery__message text-center m-0 py-5 px-1"
    >
      <p>Ваша галлерея пуста. Вы можете загрузить вашу фото-галлерею на главной странице.</p>
    </div>
  </section>
</template>

<script>
  import VueLoadingIndicator from 'components/vue-loading-indicator'
  import GalleryImagesCard from 'components/GalleryImagesCard'
  import CardControlGroup from 'components/CardControlGroup'
  import CoolLightBox from 'plugins/CoolLightBox/'
  import { images, categories } from '@/api/index.js'

  export default {
    name: 'ViewsGalleryImages',
    data: () => ({
      files: [],
      loading: false,
      loadedFiles: true,
      index: null
    }),
    components: {
      VueLoadingIndicator,
      GalleryImagesCard,
      CardControlGroup,
      CoolLightBox
    },
    created() {
      this.loading = true
      this.loadedFiles = false

      images((res) => {
        if (res?.error) {
          this.loading = false
          this.loadedFiles = false
          return
        }

        this.files = res
        this.loading = false
        this.loadedFiles = true
      })

      categories((res) => {
        console.log(res)
      })
    },
    computed: {
      sortByCategory() {
        return this.files.map((value, index, array) => {
          console.log(value)

          return array
        })
      }
    },
    methods: {
      handleSetIndex(index) {
        this.index = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .gallery {
    &__message {
      text-align: center;
    }
  }
</style>
