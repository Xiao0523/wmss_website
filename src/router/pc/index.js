import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pc/Home'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // window.location.href = '/mobile.html#/'

    // 由于展示网页路径问题，需要将
    window.location.href = './mobile.html#/'
    return
  }
  next()
})

export default router
