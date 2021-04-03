<template>
  <section class="auth-login">
    <AuthFormLayout
      @auth-submit="login(form)"
      :error-form="!$v.validForm.$invalid"
      class="form__auth_login"
    >
      <h1>Чтобы добавлять свои фотографии, войдите!</h1>
      <AuthFormGroup class="flex flex-col mb-4">
        <div class="form__input_box mb-2.5">
          <div class="relative">
            <div class="form__input_icon flex items-center px-2 absolute">
              <SvgIcon
                :name="`login-user`"
              />
            </div>
            <input
              class="w-full border"
              :class="{ 'is-invalid': $v.form.login.$error }"
              v-model.trim="form.login"
              id="username"
              name="name"
              type="text"
              placeholder="Логин"
              autofocus
            />
          </div>
          <span
            class="px-1 py-0.5 text-red-600"
            v-if="!$v.form.login.required && $v.form.login.$dirty"
          >
            Введите логин
          </span>
          <span
            class="px-1 py-0.5 text-red-600"
            v-else-if="!$v.form.login.minLength && $v.form.login.$dirty"
          >
            Минимальная длина логина {{ $v.form.login.$params.minLength.min }}
          </span>
        </div>
        <div class="form__input_box">
          <div class="relative">
            <div class="form__input_icon flex items-center px-2 absolute">
              <SvgIcon
                :name="`login-key`"
              />
            </div>

            <input
              class="w-full border"
              :class="{ 'is-invalid': $v.form.password.$error }"
              v-model.trim="form.password"
              id="password"
              name="pass"
              type="password"
              placeholder="Пароль"
            />
          </div>
          <span
            class="px-1 py-0.5 text-red-600"
            v-if="!$v.form.password.required && $v.form.password.$dirty"
          >
            Введите пароль
          </span>
          <span
            class="px-1 py-0.5 text-red-600"
            v-else-if="!$v.form.password.minLength && $v.form.password.$dirty"
          >
            Минимальная длина пароля {{ $v.form.password.$params.minLength.min }}
          </span>
        </div>
      </AuthFormGroup>
      <AuthFormFooter>
        <input
          :disabled="$v.validForm.$invalid"
          type="submit"
          name="val"
          value="ВОЙТИ" />
        <router-link
          :to="{ name: 'Registration' }"
          title="Регистрация">
          Регистрация
        </router-link>
      </AuthFormFooter>
    </AuthFormLayout>
  </section>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength } from 'vuelidate/lib/validators'
  import { mapState } from 'vuex'
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
      form: {
        login: '',
        password: ''
      }
    }),
    validations: {
      validForm: ['form.login', 'form.password'],
      form: {
        login: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(4)
        }
      }
    },
    computed: {
      ...mapState({
        logged: state => state.isLoggedIn
      })
    },
    beforeRouteLeave(to, from, next) {
      if (to.name !== 'Registration') next(this.logged)
      else next()
    },
    methods: {
      login(formData) {
        this.$v.form.$touch()

        if (!this.$v.validForm.$error)
          this.axios.post('/api/login', { ...formData }).then(res => {
            if (res.data.status) {
              this.$store.dispatch('updateStatusLogin', res.data.user)

              this.$router.push({ name: 'Home' })
            } else { this.$store.dispatch('updateStatusLogin', { auth: false }) }
          }).catch(e => console.log(e))
      }
    },
    mixins: [validationMixin]
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

        &.is-invalid {
          border-color: #ef4444;
        }

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
