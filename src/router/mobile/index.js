import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/mobile/Home'

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
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = './#/'
    return
  }
  next()
})

export default router
