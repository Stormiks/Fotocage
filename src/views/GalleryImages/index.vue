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
      <article
        v-for="(img, indexImg) in files"
        :key="`gallery-image-${img.id}`"
        class="gallery__card justify-self-center align-self-center overflow-hidden"
      >
        <figure class="gallery__card__figure card-figure m-1.5">
          <a
            :title="img.title"
            :data-fancybox-href="img.src"
            @click.stop.prevent="setIndex(indexImg)"
          >
            <img
              v-if="!img.src"
              src="/assets/img/placeholder-image-190x160.jpg"
              alt="190x160.jpg"
              class="card-figure__image"
            />
            <img
              v-else
              :src="img.src"
              :alt="img.title"
              class="card-figure__image"
            />
          </a>
          <figcaption class="card-figure__caption mt-1">
            <p class="truncate">
              {{ img.title }}
            </p>
          </figcaption>
        </figure>
        <div class="card-figure__desc my-2">
          <p class="text-center">
            {{ img.description }}
          </p>
        </div>
        <hr class="m-1.5" />
        <div class="card-figure__socials share-icon text-center p-1">
          <span>
            Will be added later: Icons share social
          </span>
        </div>
      </article>
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
  import CoolLightBox from 'plugins/CoolLightBox/'

  export default {
    name: 'ViewsGalleryImages',
    data: () => ({
      files: [],
      index: null
    }),
    components: {
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
      setIndex(index) {
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

    &__card {
      box-shadow: 0 0 5px 1px rgba(#000, 40%);
      width: 200px;

      p {
        color: #616060;
        font-family: 'Roboto Regular';
        text-align: center;
      }

      hr {
        width: calc(100% - (2 * @tailwind-margin1-5));
      }

      &__figure {
        display: inline-block;
        height: 160px;
        width: calc(100% - (2 * @tailwind-margin1-5));
      }

      &:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }

  .card-figure {
    img {
      height: inherit;
    }

    a {
      max-height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;

      > &__image {
        border-radius: 5px;
      }
    }

    &__caption {
      p {
        font-size: 12pt;
      }
    }

    &__desc {
      p {
        font-size: 10pt;
      }
    }

    /* TODO: Когда будут кнопки социальных сетей */
    &__socials {
      // span:not(class) {
        color: #a3a2a2;
        font-size: 9pt;
      // }
    }
  }
</style>
