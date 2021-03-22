<template>
  <section class="auth-registation">
    <form
      @submit.prevent="register"
      class="form form__auth form__auth_registation"
    >
      <h1>Регистрация</h1>
      <div class="form__group form-line">
        <label for="login">Введите логин: </label>
        <input
          v-model="user.login"
          type="text"
          id="login"
          name="login"
          placeholder="Логин" />
      </div>
      <div class="form__group form-line">
        <label for="pass1">Введите пароль: </label>
        <input
          v-model="user.password"
          type="password"
          id="pass1"
          name="password1"
          placeholder="Пароль" />
      </div>
      <div class="form__group form-line">
        <label for="pass2">Подтвердите пароль: </label>
        <input
          v-model="user.passwordConfirm"
          type="password"
          id="pass2"
          name="password2"
          placeholder="Повторите пароль" />
      </div>
      <div class="form__footer">
        <input
          type="submit"
          name="reg"
          value="РЕГИСТРАЦИЯ" />
        <router-link
          :to="{ name: 'Login' }"
          title="Войти">
          Войти
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
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

<style lang="less" src="./style.less" scoped />
