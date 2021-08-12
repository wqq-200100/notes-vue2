import Vue from 'vue'
import App from './App.vue'
import {mixin} from "./mixin";

Vue.config.productionTip = false //关闭Vue生产提示
Vue.mixin(mixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
