import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './css/float.scss'

import components from './components'
export default {
  install(Vue) {
    Vue.use(components);
  }
};
