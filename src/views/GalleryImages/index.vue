<template>
  <section class="main__col-2 block-gallery">
    <div class="coll-2__block-gallery gallery">
      <article class="gallery-post">
        <figure class="image">
          <a
            rel="_blank"
            target="_blank"
            href=""
          >
            <img
              src="/assets/img/placeholder-image-190x160.jpg"
              alt="190x160.jpg"
              class="img"
            />
          </a>
          <figcaption class="title-img">
            <p>
              Image Placeholder
            </p>
          </figcaption>
        </figure>
        <div class="text-post">
          <p class="text-img">
            Example Detailed description
          </p>
        </div>
        <hr />
        <div class="share-icon">
          Will be added later: Icons share social
        </div>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ViewsGalleryImages',
    created() {
      this.axios.get('/api/images').then(res => {
        console.log(res.data)
      })
    }
  }
</script>

<style lang="less" scoped>
  .main__col-1,
  .main__col-2 {
    display: block;
  }

  .main__col-2 {
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
  }

  .block-gallery {
    align-items: normal;
    margin: 0;
    padding: 0;
    height: inherit;
  }

  .gallery {
    margin: 0px;
    padding: 0;
    min-height: 100%;

    &-post {
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.4);
      height: 280px;
      margin: 15px;
      width: 200px;

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
