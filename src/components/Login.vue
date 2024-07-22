<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login">
      <label>
        <input v-model="email" placeholder="email" class="form-control">
      </label>
      <br />
      <label>
        <input v-model="pass" placeholder="password" type="password" class="form-control">
      </label> (hint: password1)<br>
      <button type="submit" class="btn btn-primary">login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
