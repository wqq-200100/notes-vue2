import Vue from 'vue'
import App from './App.vue'

//引入插件
import plugins from "./plugins";

//应用插件
Vue.use(plugins)

Vue.config.productionTip = false //关闭Vue生产提示

new Vue({
  render: h => h(App),
}).$mount('#app')
