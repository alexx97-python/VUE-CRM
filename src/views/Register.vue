<template>
<form class="card auth-card" @submit.prevent="submitHandler">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
      >
      <label for="email">Email</label>
      <small
        class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required">Email is required</small>
      <small
        class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email">Email is not valid</small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.email.$dirty && !$v.password.minLength)}"
      >
      <label for="password">Пароль</label>
      <small
        class="helper-text invalid"
        v-if="$v.password.$dirty && !$v.password.required">Password is required</small>
      <small
        class="helper-text invalid"
        v-else-if="$v.password.$dirty && !$v.password.minLength">Password must contain at least {{$v.password.$params.minLength.min}} symbols</small>
    </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: $v.name.$dirty && $v.name.required}"
      >
      <label for="name">Имя</label>
      <small
        class="helper-text invalid"
        v-if="$v.password.$dirty && !$v.password.required">Name field is required</small>
    </div>
    <p>
      <label>
        <input type="checkbox" v-model="agree"/>
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators';

export default {
  name: 'Register',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: ''
  }),
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return 
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/') 
      } catch (e) {}

    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(8)
    },
    name: {
      required
    },
    agree: {
      checked: v => v
    }
  }
}
</script>