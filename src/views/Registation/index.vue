<template>
  <section class="auth-registation">
    <form
      @submit.prevent="register"
      class="form form__auth form__auth_registation"
    >
      <h1>Регистрация</h1>
      <div class="form__group form-line">
        <label for="login">Введите логин: </label>
        <input type="text" id="login" name="login" placeholder="Логин" />
      </div>
      <div class="form__group form-line">
        <label for="pass1">Введите пароль: </label>
        <input type="password" id="pass1" name="password1" placeholder="Пароль" />
      </div>
      <div class="form__group form-line">
        <label for="pass2">Подтвердите пароль: </label>
        <input type="password" id="pass2" name="password2" placeholder="Повторите пароль" />
      </div>
      <div class="form__footer">
        <input type="submit" name="reg" value="РЕГИСТРАЦИЯ" />
        <router-link :to="{ name: 'Login' }" title="Войти">
          Войти
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'ViewsRegistation',
    methods: {
      register() {
        this.axios.post('/api/registration', {
          login: 'Test',
          password: 'test',
          passwordRepeat: 'test'
        }).then(res => {
          console.log('register', res)

          if (res.status) {
            this.$store.dispatch('updateStatusLogin', true)

            this.$router.push({ name: 'Gallery-Images' })
          } else
            this.$store.dispatch('updateStatusLogin', false)
        }).catch(e => console.log(e))
      }
    }
  }
</script>

<style lang="less" src="./style.less" scoped />
