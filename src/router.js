import Vue from "vue";
import Router from "vue-router";
import AppHeader from './layout/AppHeader'

Vue.use(Router);

const routes = [
  {
    path: '/',
    components: {
      header: AppHeader,
      default: () => import('./components/HelloWorld.vue')
    }
  }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
