import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import goods from '@/components/goods/goods'
import seller from '@/components/seller/seller'
import ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/',
      name: 'seller',
      component: seller
    },
    {
      path: '/',
      name: 'ratings',
      component: ratings
    }
  ]
})


