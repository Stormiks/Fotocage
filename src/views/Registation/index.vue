<template>
  <section class="auth-registation">
    <AuthFormLayout
      :authSubmit="register"
      class="form__auth_registation"
    >
      <h1>Регистрация</h1>
      <AuthFormGroup class="mb-2.5">
        <label for="login">Введите логин: </label>
        <input
          v-model="user.login"
          type="text"
          id="login"
          name="login"
          placeholder="Логин" />
      </AuthFormGroup>
      <AuthFormGroup class="mb-2.5">
        <label for="pass1">Введите пароль: </label>
        <input
          v-model="user.password"
          type="password"
          id="pass1"
          name="password1"
          placeholder="Пароль" />
      </AuthFormGroup>
      <AuthFormGroup class="mb-2.5">
        <label for="pass2">Подтвердите пароль: </label>
        <input
          v-model="user.passwordConfirm"
          type="password"
          id="pass2"
          name="password2"
          placeholder="Повторите пароль" />
      </AuthFormGroup>
      <AuthFormFooter>
        <input
          :disabled="!validForm"
          type="submit"
          name="reg"
          value="РЕГИСТРАЦИЯ" />
        <router-link
          :to="{ name: 'Login' }"
          title="Войти">
          Войти
        </router-link>
      </AuthFormFooter>
    </AuthFormLayout>
  </section>
</template>

<script>
  import AuthFormLayout from 'layoutAuth/components/AuthFormLayout'
  import AuthFormGroup from 'layoutAuth/components/AuthFormGroup'
  import AuthFormFooter from 'layoutAuth/components/AuthFormFooter'

  export default {
    components: {
      AuthFormLayout,
      AuthFormGroup,
      AuthFormFooter
    },
    name: 'ViewsRegistation',
    data: () => ({
      user: {
        login: '',
        password: '',
        passwordConfirm: ''
      },
      validLogin: false,
      validPassword: false,
      validPasswordConfirm: false
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
      },
      'user.passwordConfirm': {
        immediate: true,
        handler: function (newVal) {
          if (newVal !== '' && newVal !== null && newVal.length >= 4)
            this.validPasswordConfirm = true
          else this.validPasswordConfirm = false
        }
      }
    },
    computed: {
      validForm() {
        return this.validLogin === true && this.validPassword === true && this.validPasswordConfirm === true && (this.password === this.passwordConfirm)
      }
    },
    methods: {
      register() {
        if (this.validForm)
          this.axios.post('/api/registration', { ...this.user }).then(res => {
            if (res.status) {
              this.$store.dispatch('updateStatusLogin', {
                auth: true,
                id: res.data.user.id
              })

              this.$router.push({ name: 'Gallery-Images' })
            } else { this.$store.dispatch('updateStatusLogin', false) }
          }).catch(e => console.log(e))
      }
    }
  }
</script>

<style lang="less" scoped>
  .auth-registation {
    .form__auth_registation {
      overflow: auto;

      .form__group {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border: 0;
        padding: 0;
        margin: 0;

        + .form__group {
          margin-top: .7rem;
        }

        label {
          display: flex;
          align-items: center;
          text-align: left;
          position: relative;
          margin-right: 5px;

          + input {
            margin-left: .4rem;
          }
        }

        input {
          padding: 5px 5px 5px 15px;
          margin: 0;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 1px 1px #ccc inset, 0 1px 0 @color-white;
        }
      }
    }
  }
</style>
