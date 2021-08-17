//该文件用于创建vuex中最为核心的store
import Vue from "vue";
import Vuex from 'vuex'
import countOptions from "./count";
import personOptions from "./person";

//使用插件
Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})