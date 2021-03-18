<template>
  <section class="main__col-2 block-gallery py-4">
    <div
      v-if="files.length"
      class="grid grid-cols-4 gap-x-1 gap-y-2 coll-2__block-gallery gallery px-3"
    >
      <article
        v-for="img in files"
        :key="`gallery-image-${img.id}`"
        class="gallery-post justify-self-center align-self-center overflow-hidden"
      >
        <figure class="image">
          <a
            href=""
            :title="img.title"
          >
            <img
              v-if="!img.src"
              src="/assets/img/placeholder-image-190x160.jpg"
              alt="190x160.jpg"
              class="img"
            />
            <img
              v-else
              :src="img.src"
              :alt="img.title"
              class="img"
            />
          </a>
          <figcaption class="title-img">
            <p class="truncate">
              {{ img.title }}
            </p>
          </figcaption>
        </figure>
        <div class="text-post">
          <p class="text-img">
            {{ img.description }}
          </p>
        </div>
        <hr />
        <div class="share-icon">
          Will be added later: Icons share social
        </div>
      </article>
    </div>
    <div
      v-else
      class="coll-2__block-gallery gallery__message text-center m-0 py-5 px-1"
    >
      <p>Ваша галлерея пуста. Вы можете загрузить вашу фото-галлерею на главной странице.</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ViewsGalleryImages',
    data: () => ({
      files: []
    }),
    created() {
      this.axios.get('/api/images').then(res => {
        console.log(res.data)
        const images = res.data.images

        if (!images.length) this.files = []

        return images
      }).then(images => {
        this.files = images
      })
    }
  }
</script>

<style lang="less" scoped>
  .gallery__message {
    text-align: center;
  }

  .main__col-1,
  .main__col-2 {
    display: block;
  }

  .main__col-2 {
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .gallery {
    min-height: 100%;

    &-post {
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
      width: 200px;

      &:nth-of-type(4n) {
        margin-right: 0;
      }

      hr {
        width: 190px;
        margin: 6px;
      }
    }
  }

  .image {
    display: inline-block;
    height: 160px;
    margin: 5px;
    width: 190px;

    a {
      width: 190px;
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;

      > .img {
        border-radius: 5px;
        height: inherit;
      }
    }
  }

  .title-img,
  .text-img {
    color: #616060;
    font-family: 'Roboto Regular';
    text-align: center;
  }

  .title-img {
    font-size: 12pt;
  }

  .text-post {
    display: flex;
  }

  .text-img {
    font-size: 10pt;
    margin: 8px 0;
    text-align: center;
    width: 100%;
  }

  .share-icon {
    color: #a3a2a2;
    font-size: 9pt;
    padding: 2px;
    text-align: center;
  }
</style>
