<template>
  <section class="auth-registration">
    <AuthFormLayout
      @auth-submit="register(form)"
      :error-form="!$v.validForm.$invalid && !$v.validPasswords.$invalid"
      class="form__auth_registration"
    >
      <h1>Регистрация</h1>
      <AuthFormGroup class="flex flex-col items-end mb-2.5">
        <div class="w-full flex justify-between">
          <label for="login">Введите логин: </label>
          <input
            @blur="$v.form.login.$touch()"
            v-model.trim="form.login"
            :class="{ 'is-invalid': $v.form.login.$error }"
            type="text"
            id="login"
            name="login"
            placeholder="Логин"
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
          v-else-if="$v.form.login.required && !$v.form.login.minLength && $v.form.login.$dirty"
        >
          Минимальная длина логина {{ $v.form.login.$params.minLength.min }} символов
        </span>
      </AuthFormGroup>
      <AuthFormGroup class="flex flex-col items-end mb-2.5">
        <div class="w-full flex justify-between">
          <label for="pass1">Введите пароль: </label>
          <input
            :class="{
              'is-invalid':
                ($v.form.password.$error && $v.form.password.$dirty) ||
                (!$v.form.passwordConfirm.sameAsPassword && !$v.form.passwordConfirm.$invalid)
            }"
            @blur="$v.form.password.$touch"
            v-model.trim="form.password"
            type="password"
            id="pass1"
            name="password1"
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
          Минимальная длина пароля {{ $v.form.password.$params.minLength.min }} символов
        </span>
      </AuthFormGroup>
      <AuthFormGroup class="flex flex-col items-end mb-2.5">
        <div class="w-full flex justify-between">
          <label for="pass2">Подтвердите пароль: </label>
          <input
            :class="{
              'is-invalid': !$v.form.passwordConfirm.sameAsPassword && $v.form.passwordConfirm.$dirty
            }"
            @blur="$v.validPasswords.$touch()"
            v-model.trim="form.passwordConfirm"
            type="password"
            id="pass2"
            name="password2"
            placeholder="Повторите пароль"
          />
        </div>
        <span
          class="px-1 py-0.5 text-red-600"
          v-if="!$v.form.passwordConfirm.sameAsPassword && $v.form.passwordConfirm.$dirty"
        >
          Пароли не совпадают
        </span>
      </AuthFormGroup>
      <AuthFormFooter>
        <input
          :disabled="$v.validForm.$invalid"
          type="submit"
          name="reg"
          value="РЕГИСТРАЦИЯ" />
        <router-link
          :to="{ name: 'Login' }"
          title="Войти"
        >
          Войти
        </router-link>
      </AuthFormFooter>
    </AuthFormLayout>
  </section>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, sameAs } from 'vuelidate/lib/validators'
  import { mapState } from 'vuex'
  import AuthFormLayout from 'components/Auth/AuthFormLayout'
  import AuthFormGroup from 'components/Auth/AuthFormGroup'
  import AuthFormFooter from 'components/Auth/AuthFormFooter'
  import { register } from '@/api/'

  export default {
    components: {
      AuthFormLayout,
      AuthFormGroup,
      AuthFormFooter
    },
    name: 'ViewsRegistration',
    data: () => ({
      form: {
        login: '',
        password: '',
        passwordConfirm: ''
      }
    }),
    validations: {
      validForm: ['form.login', 'form.password', 'form.passwordConfirm'],
      validPasswords: ['form.password', 'form.passwordConfirm'],
      form: {
        login: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(4)
        },
        passwordConfirm: {
          required,
          sameAsPassword: sameAs('password'),
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
      if (to.name !== 'Login') next(this.logged)
      else next()
    },
    methods: {
      register(formData) {
        this.$v.form.$touch()

        if (!this.$v.validForm.$error) register(formData, (user) => {
          if (user.error) return this.$store.dispatch('updateStatusLogin', false)

          this.$store.dispatch('updateStatusLogin', user)

          this.$router.push({ name: 'Home' })
        })
      }
    },
    mixins: [validationMixin]
  }
</script>

<style lang="less" scoped>
  .auth-registration {
    .form__auth_registration {
      overflow: auto;

      .form__group {
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

          &.is-invalid {
            border-color: #ef4444;
          }
        }
      }
    }
  }
</style>
