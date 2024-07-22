<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Vue Test</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/art-work" class="nav-link">Art Work</router-link>
            </li>

            <li class="nav-item">
              <router-link v-if="loggedIn" to="/logout" class="nav-link">Log out</router-link>
              <router-link v-if="!loggedIn" to="/login" class="nav-link">Log in</router-link>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
    <div class="row">
      <div class="container">
        <div class="col-md-12 mt-5">
          <template v-if="$route.matched.length">
            <router-view></router-view>
          </template>
          <template v-else>
            <p>{{ loggedIn ? 'Welcome To Art Work' : 'You need to login first to see the art work.' }}</p>
          </template>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
