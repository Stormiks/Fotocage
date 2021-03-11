<template>
  <section class="auth-login">
    <form class="form form__auth form__auth_login" id="validate-form">
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
  }
</script>

<style lang="less" scoped>
.auth-login {
  max-width: 460px;
}
</style>
