import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import auth from './auth'
import App from './components/App.vue'
import ArtWork from './components/ArtWork.vue'
import Login from './components/Login.vue'

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/art-work', component: ArtWork, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

export default {
  router,
  render: h => h(App)
}
