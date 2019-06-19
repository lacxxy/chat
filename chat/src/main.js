// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import index from './components/index'
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
import store from './store/store';
import common from './common/common';
import axios from 'axios';
Vue.use(ElementUI)
Vue.use(VueSocketio, socketio('http://111.230.63.143:3005/'));
Vue.config.productionTip = false
Vue.prototype.$common=common;
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
