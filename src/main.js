import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue Directives
Vue.directive('red', {
  bind (el, binding, vnode) {
    if (binding.value === true) {
      el.style.color = '#bd0a0a'
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
