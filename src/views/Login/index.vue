<template>
  <section class="auth-login">
    <form
      @submit.prevent="login"
      class="form form__auth form__auth_login"
    >
      <h1>Приветствую тебя пользователь!</h1>
      <div class="form__group flex flex-col">
        <input
          id="username"
          name="name"
          type="text"
          placeholder="Логин"
          autofocus />
        <input
          id="password"
          name="pass"
          type="password"
          placeholder="Пароль" />
      </div>
      <div class="form__footer">
        <input
          type="submit"
          name="val"
          value="ВОЙТИ" />
        <router-link
          :to="{ name: 'Registation' }"
          title="Регистрация">
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
}
</style>
