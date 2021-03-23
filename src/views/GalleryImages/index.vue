<template>
  <section class="gallery w-full py-4">
    <CoolLightBox
      :items="files"
      :index="index"
      @close="index = null"
    >
    </CoolLightBox>

    <div
      v-if="files.length"
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
      v-else
      class="gallery__message text-center m-0 py-5 px-1"
    >
      <p>Ваша галлерея пуста. Вы можете загрузить вашу фото-галлерею на главной странице.</p>
    </div>
  </section>
</template>

<script>
  import GalleryImagesCard from './GalleryImagesCard'
  import CardControlGroup from './CardControlGroup'
  import CoolLightBox from 'plugins/CoolLightBox/'

  export default {
    name: 'ViewsGalleryImages',
    data: () => ({
      files: [],
      index: null
    }),
    components: {
      GalleryImagesCard,
      CardControlGroup,
      CoolLightBox
    },
    created() {
      this.axios.get('/api/images').then(res => {
        console.log(res.data)
        const images = res.data.images

        if (!images.length) this.files = []

        return images
      }).then(images => {
        this.files = images
      })
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
