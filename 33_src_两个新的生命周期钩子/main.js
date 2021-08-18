import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from './router'

Vue.config.productionTip = false //关闭Vue生产提示

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
