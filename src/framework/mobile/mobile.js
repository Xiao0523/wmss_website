// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/mobile'
import '../../assets/style/base.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/css/anim.scss'
import VueLazyLoad from 'vue-lazyload'
// import style
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAwesomeSwiper)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)

Vue.use(iView)
Vue.use(VueLazyLoad, {
  error: './static/error.png',
  loading: './static/loading.png'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
