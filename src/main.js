import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins/index'
import router from "./router";

Vue.use(plugins)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
