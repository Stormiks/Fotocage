<template>
  <div>
    <section class="main__col-1">
      <div id="drop-files" ondragover="return false" class="col-1__block-upload">
        <h3>Пожалуйста выберите изображение на устройстве</h3>
        <p>
          <span><a href="help.html">Правила загрузки</a></span>
        </p>
        <p>Перетащите изображение сюда</p>
        <form id="frm" enctype="multipart/form-data">
          <input type="file" id="files" name="picture" />
          <input type="submit" value="Загрузить" />
        </form>
      </div>
    </section>

    <section class="main__col-2">
      <div id="result" class="coll-2__block-gallery">
        <div id="uploaded-holder">
          <div id="dropped-files">
            <div id="upload-button">
              <div class="center">
                <span>0 Файлов</span>
                <a href="#" class="upload">Загрузить</a>
                <a href="#" class="delete">Удалить</a>
                <div id="loading">
                  <div id="loading-bar">
                    <div class="loading-color"></div>
                  </div>
                  <div id="loading-content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="file-name-holder">
          <ul id="uploaded-files">
            <h1>Загруженные файлы</h1>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ViewsUploadImages',
  }
</script>

<style lang="less" src="./style.less" scoped />
