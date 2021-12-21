<template>
  <form class="card auth-card" @submit.prevent="submitHendler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="email"
            v-model.trim="email"
        >
        <label for="email">Email</label>
        <!-- -->
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Email is not required</small>
        <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">Email is not email </small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model="password"
        >
        <label for="password">Пароль</label>
        <!-- -->
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">Password is not required.</small>
        <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to='/register'>Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, reqiered, minLength } from 'vuelidate/lib/validators'
// console.log(this.$v)
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, reqiered },
    password: { reqiered, minLength: minLength(6) }
  },
  methods: {
    submitHendler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }

      console.log(formData)
      /*
      if (this.$v.$invalid) {
        this.$v.$touch()
      }
      */
      // this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
