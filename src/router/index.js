import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import Notepad from '@/components/Notepad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      components: {
        default: Counter,
        detail: Notepad
      }
    },
    {
      path: '/',
      name: 'Notepad',
      component: Notepad
    }
  ]
})
