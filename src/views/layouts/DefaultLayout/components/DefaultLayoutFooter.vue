<template>
  <footer>
    <div class="footer-info">
      <p class="copy">&copy; 2017 Сайт сделан <a href="http://skylinkertu.github.io">Skylinker</a></p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'DefaultLayoutFooter',
  }
</script>

<style lang="less" scoped>
  footer {
    // border-top: 1px dashed #e6e5e5;
    height: 86px;

    &-info {
      margin: 7px;
      padding: 10px;
    }
  }

  .copy {
    color: #616060;
    font-family: 'Times New Roman', Times, Baskerville, Georgia, serif;
    text-align: right;

    a {
      &,
      &:visited {
        text-decoration: none;
        font-family: 'Exo 2 Semi Bold', 'Times New Roman', Times, serif;
        font-size: 14pt;
        color: #adadad;
        padding: 7px;
      }

      &:hover {
        cursor: pointer;
        border-radius: 7px;
        background: #f3f3f3;
        box-shadow: 0 0 5px #ada9a9;
        padding: 7px;
        color: #02adc6;
        text-decoration: underline solid #847b7b;
      }
    }
  }
</style>
