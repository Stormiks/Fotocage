<template>
  <section class="auth-registation">
    <form class="form form__auth form__auth_registation">
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
  }
</script>

<style lang="less" scoped>
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
      margin-top: .7em;
    }

    label {
      display: flex;
      align-items: center;
      text-align: left;
      position: relative;
      margin-right: 5px;

      + input {
        margin-left: .4em;
      }
    }

    input {
      padding: 5px 5px 5px 15px;
      margin: 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff;
    }
  }
}
</style>
