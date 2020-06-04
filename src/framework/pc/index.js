// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/pc'

import VueParticles from 'vue-particles'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/anim.css'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueAwesomeSwiper)
Vue.use(VueParticles)
Vue.use(VueAxios, axios) /* 引入公共样式 */
Vue.use(ElementUI)
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
