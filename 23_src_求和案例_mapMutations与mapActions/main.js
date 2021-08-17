import Vue from 'vue'
import App from './App.vue'

import store from "./store";

Vue.config.productionTip = false //关闭Vue生产提示


new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
