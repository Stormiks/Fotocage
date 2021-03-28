<template>
  <section class="auth-login">
    <AuthFormLayout
      :authSubmit="login"
      class="form__auth_login"
    >
      <h1>Чтобы добавлять свои фотографии, войдите!</h1>
      <AuthFormGroup class="flex flex-col mb-4">
        <div class="form__input_box mb-2.5 relative">
          <div class="form__input_icon flex items-center px-2 absolute">
            <SvgIcon
              :name="`login-user`"
            />
          </div>

          <input
            class="w-full"
            v-model="user.login"
            id="username"
            name="name"
            type="text"
            placeholder="Логин"
            autofocus />
        </div>
        <div class="form__input_box relative">
          <div class="form__input_icon flex items-center px-2 absolute">
            <SvgIcon
              :name="`login-key`"
            />
          </div>

          <input
            class="w-full"
            v-model="user.password"
            id="password"
            name="pass"
            type="password"
            placeholder="Пароль" />
        </div>
      </AuthFormGroup>
      <AuthFormFooter>
        <input
          :disabled="!validForm"
          type="submit"
          name="val"
          value="ВОЙТИ" />
        <router-link
          :to="{ name: 'Registation' }"
          title="Регистрация">
          Регистрация
        </router-link>
      </AuthFormFooter>
    </AuthFormLayout>
  </section>
</template>

<script>
  import AuthFormLayout from 'layoutAuth/components/AuthFormLayout'
  import AuthFormGroup from 'layoutAuth/components/AuthFormGroup'
  import AuthFormFooter from 'layoutAuth/components/AuthFormFooter'
  import SvgIcon from 'components/SvgIcon'

  export default {
    components: {
      AuthFormLayout,
      AuthFormGroup,
      AuthFormFooter,
      SvgIcon
    },
    name: 'ViewsLogin',
    data: () => ({
      user: {
        login: '',
        password: ''
      },
      validLogin: false,
      validPassword: false
    }),
    watch: {
      'user.login': {
        immediate: true,
        handler: function (newVal) {
          if (newVal !== '' && newVal !== null)
            this.validLogin = true
          else this.validLogin = false
        }
      },
      'user.password': {
        immediate: true,
        handler: function (newVal) {
          if (newVal !== '' && newVal !== null && newVal.length >= 4)
            this.validPassword = true
          else this.validPassword = false
        }
      }
    },
    computed: {
      validForm() {
        return this.validLogin === true && this.validPassword === true
      }
    },
    methods: {
      login() {
        if (this.validForm)
          this.axios.post('/api/login', { ...this.user }).then(res => {
            if (res.data.status) {
              this.$store.dispatch('updateStatusLogin', res.data.user)

              this.$router.push({ name: 'Gallery-Images' })
            } else { this.$store.dispatch('updateStatusLogin', { auth: false }) }
          }).catch(e => console.log(e))
      }
    }
  }
</script>

<style lang="less" scoped>
  .auth-login {
    max-width: 460px;

    .form__input {
      &_box {
        > svg {
          height: 42px;
          width: 42px;
        }
      }

      &_icon {
        top: 0;
        left: 0;
        bottom: 0;
      }
    }

    .form__group {
      input {
        padding: 15px 15px 15px 45px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 1px 1px #ccc inset, 0 1px 0 @color-white;

        &:focus {
          background-color: @color-white;
          border-color: #e8c291;
          outline: none;
          box-shadow: 0 0 0 1px #e8c291 inset;
        }
      }
    }
  }
</style>
