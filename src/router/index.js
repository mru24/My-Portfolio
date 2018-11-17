import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Contact from '@/components/contact'
import Work from '@/components/work'
import Success from '@/components/success'
import Fail from '@/components/fail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/fail',
      name: 'Fail',
      component: Fail
    }
  ]
})
