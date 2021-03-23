<template>
  <article class="gallery__card justify-self-center align-self-center overflow-hidden">
    <figure class="gallery__card__file card-file m-1.5">
      <a
        :title="title"
        :data-fancybox-href="src"
        class="gallery__card__control card-control"
      >
        <slot name="card-controls"></slot>

        <img
          v-if="!src"
          src="/assets/img/placeholder-image-190x160.jpg"
          alt="190x160.jpg"
          class="card-file__image"
        />
        <img
          v-else
          :src="src"
          :alt="title"
          class="card-file__image"
        />
      </a>
      <figcaption class="card-file__caption mt-1">
        <p class="truncate">
          {{ title }}
        </p>
      </figcaption>
    </figure>
    <div class="card-file__desc my-2">
      <p class="text-center">
        {{ description }}
      </p>
    </div>
    <hr class="m-1.5" />
    <div class="card-file__socials share-icon text-center p-1">
      <span>
        Will be added later: Icons share social
      </span>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'GalleryImagesCard',
    props: {
      file: {
        type: Object,
        default: () => ({})
      },
      title: {
        type: String,
        default: ''
      },
      src: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less" scoped>
  .card-file {
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

  .gallery {
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

      &__file {
        display: inline-block;
        height: 160px;
        width: calc(100% - (2 * @tailwind-margin1-5));
      }

      &__control {
        position: relative;

        > div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }

      &:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
</style>
