import Vue from 'vue'
import Router from 'vue-router'
import Chat from './views/chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/chat',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '/chat',
          name: 'chat',
          component: Chat
        }
      ]
    }
  ]
})
