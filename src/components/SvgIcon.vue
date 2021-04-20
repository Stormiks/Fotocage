<template>
  <svg
    class="h-7 w-7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      iconPath() {
        let icon = require(`assets/img/svg/${this.name}.svg`)

        if (Object.prototype.hasOwnProperty.call(icon, 'default')) icon = icon.default

        return icon.url
      }
    }
  }
</script>
