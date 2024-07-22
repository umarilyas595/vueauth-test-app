import Vue from 'vue'
import Router from 'vue-router'
import App from './index.js'

Vue.config.productionTip = false;
Vue.use(Router);

new Vue({
  render: h => h(App),
}).$mount('#app')
