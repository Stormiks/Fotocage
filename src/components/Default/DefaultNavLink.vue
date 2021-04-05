<template>
  <router-link
    v-if="isUrlName"
    class="flex items-center justify-center flex-grow flex-col px-1"
    :to="{ name: urlName }"
    :title="title"
  >
    <SvgIcon :name="iconNameLower" />
    {{ title }}
  </router-link>
  <a
    v-else
    href="#"
    :title="title"
    class="flex items-center justify-center flex-grow flex-col px-1"
  >
    <SvgIcon :name="iconNameLower" />
    {{ title }}
  </a>
</template>

<script>
  import SvgIcon from 'components/SvgIcon'

  export default {
    components: { SvgIcon },
    name: 'DefaultNavLink',
    props: {
      title: String,
      iconName: String,
      urlName: String
    },
    computed: {
      iconNameLower() {
        return this.iconName.toLowerCase()
      },
      isUrlName() {
        return this.urlName !== '' || this.urlName !== undefined || this.urlName !== null
      }
    }
  }
</script>
