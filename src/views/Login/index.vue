<template>
  <section class="auth-login">
    <form
      @submit.prevent="login"
      class="form form__auth form__auth_login"
    >
      <h1>Приветствую тебя пользователь!</h1>
      <div class="form__group flex flex-col">
        <input id="username" name="name" type="text" placeholder="Логин" autofocus />
        <input id="password" name="pass" type="password" placeholder="Пароль" />
      </div>
      <div class="form__footer">
        <input type="submit" name="val" value="ВОЙТИ" />
        <router-link :to="{ name: 'Registation' }" title="Регистрация">
          Регистрация
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'ViewsLogin',
    methods: {
      login() {
        this.axios.post('/api/login', {
          login: 'Test',
          password: 'test'
        }).then(res => {
          console.log('login', res)

          if (res.status) {
            this.$store.dispatch('updateStatusLogin', true)

            this.$router.push({ name: 'Home' })
          } else
            this.$store.dispatch('updateStatusLogin', false)
        }).catch(e => console.log(e))
      }
    }
  }
</script>

<style lang="less" scoped>
.auth-login {
  max-width: 460px;
}
</style>
