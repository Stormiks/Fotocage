<template>
  <div>
    <section class="main__col-1">
      <div
        id="drop-files"
        ondragover="return false"
        class="col-1__block-upload"
      >
        <h3>Пожалуйста выберите изображение на устройстве</h3>
        <p>
          <span><a href="help.html">Правила загрузки</a></span>
        </p>
        <p>Перетащите изображение сюда</p>
        <form
          id="frm"
          enctype="multipart/form-data"
        >
          <input
            type="file"
            id="files"
            name="picture"
          />
          <input
            type="submit"
            value="Загрузить"
          />
        </form>
      </div>
    </section>

    <section class="main__col-2">
      <div
        id="result"
        class="coll-2__block-gallery"
      >
        <div id="uploaded-holder">
          <div id="dropped-files">
            <div id="upload-button">
              <div class="center">
                <span>0 Файлов</span>
                <a
                  href="#"
                  class="upload"
                >Загрузить</a>
                <a
                  href="#"
                  class="delete"
                >Удалить</a>
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

<style lang="less" scoped>
  .viewImage {
    display: flex;
  }

  .col-1__block-upload {
    padding: 4px;

    h3 {
      color: #676666;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  .file-upload {
    display: flex;
    flex-direction: row;
    align-items: center;

    > input {
      background: #ff7700;
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      font-weight: 700;
      font-size: 14pt;
      color: @color-white;
      margin-left: 5px;
      height: 44px;
      border: none;
      border-radius: 4px;
      padding: 0px 9px;
      letter-spacing: 1px;
    }
  }

  div.upload-form {
    align-items: center;
    background: #e3dcb0;
    box-shadow: inset 0 0 6px 0 #919191;
    font-size: 1em;
    height: 34px;
    line-height: 2em;
    padding: 5px;
    border-radius: 2px;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    margin-right: 5px;

    > input {
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      opacity: 0;
      left: 0;
    }

    > .button {
      border-radius: 3px;
      width: 100px;
      line-height: 30px;
      text-align: center;
      background: #c1bfbf;
      transition: background 0.2s;
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: @color-white;
      display: inline-block;
    }

    .input {
      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 11pt;
      width: 300px;
      display: inline-block;
    }

    &:hover > .button {
      background: #db975c;
    }
  }

  /* Конец формы */
  .coll-2__block-gallery {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: center;
    width: 100%;
  }

  /* Превью предпросмотра */
  #drop-files {
    width: 500px;
    height: 140px;
    margin: 15px auto;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 2px dashed rgba(234, 111, 0, 0.5);
    text-align: center;
    font-weight: bold;
    transition-duration: 2s;

    p {
      clear: none;
      padding: 0;
      margin: 0;
    }

    &:hover {
      background-color: #fff1de;
      border: 2px solid #ff9000;
    }
  }

  #frm {
    margin-top: 10px;

    input[type="file"] {
      border-radius: 14px;
      background-color: rgb(208, 122, 16);
      color: @color-white;
      display: inline-block;
      font-size: 13px;
    }
  }

  #uploaded-holder {
    display: none;
    position: relative;
    width: 100%;
  }

  .drop-button {
    display: block;
    position: absolute;
    z-index: 9999;
    padding: 5px;
    background: rgba(0, 0, 0, 0.6);
    font-size: 1em;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    color: @color-white;
    margin: 0;
  }

  #upload-button {
    z-index: 9999;
    display: none;
    margin: 20px 0;

    .ss-upload {
      font-size: 0.7em;
    }

    a {
      text-decoration: none;
      color: @color-white;
      font-weight: bold;
      box-shadow: 0 0 1000px 10px rgba(255, 255, 255, 1), inset 0 -35px 40px -10px #ea6f00;
      font-size: 20px;
      padding: 10px 20px;
      background-color: #ea6f00;
      border-radius: 10px;

      &:hover {
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 1), inset 0 -5px 40px 0px #ff902c;
      }
    }

    span {
      position: relative;
      text-align: center;
      background: white;
      border-radius: 10px;
      font-size: 1.1em;
      padding: 6px;
      margin-right: 8px;
      width: 146px;
    }

    .center {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  #dropped-files {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    .image {
      position: relative;
      border: 4px solid @color-white;
      box-shadow: 0 0 10px rgba(214, 132, 10, 0.43);
      background: @color-white;
      border-radius: 4px;
      overflow: hidden;
      height: 160px;
      width: 190px;
    }

    #upload-button {
      .delete {
        padding: 7px 6px 4px 6px;
        border-radius: 100px;
        background: rgba(0, 0, 0, 0.6);
        box-shadow: none;
        font-size: 1em;
        margin-left: 8px;

        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }

  #loading {
    display: none;
    width: 100%;
    position: relative;
    margin: 20px;

    &-bar {
      width: 404px;
      height: 40px;
      background: @color-white;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 2px;
    }

    &-content {
      position: relative;
      top: 15px;
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      width: 405px;
    }
  }

  .loading-color {
    width: 0%;
    height: 100%;
    transition: all 0.1s ease-in;
    border-radius: inherit;
    background-color: #dc6800;
  }

  #file-name-holder {
    width: 100%;
    /* float: left; */

    h1 {
      text-align: center;
      padding: 20px 0;
      font-size: 3em;
      margin: 0;
    }
  }

  #uploaded-files {
    list-style: none;
    margin: 0 auto;
    padding: 10px;
    color: #545454;

    li {
      padding: 10px;
      border-bottom: 1px solid #eee;
      font-size: 1.5em;
      font-weight: bold;
      line-height: 25px;
      color: #545454;
    }

    a {
      color: #ea6f00;
    }
  }
</style>
