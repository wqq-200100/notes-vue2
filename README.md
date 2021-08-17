# vue-test

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## ref属性
   1.被用来给元素或子组件注册引用信息（id的替代者）
   2.应用在HTML标签上获取的是真实DOM元素，应用在组件标签上是组件实例化对象（vc)
   3.使用方式：
     打标识：<h1 ref="xxx">....</h1> 或 <School ref="xxx"></School>
     获取：this.$refs.xxx'

## 配置props
  功能：让组件接收外部传过来的数据
    （1）传递数据
        <Demo name="xxx"/>
    （2）接收数据
        第一种方式(只接受)：
          props:['name']
        第二种方式(限制类型)：
          props:{
            name:String
          }
        第三种方式：(限制类型、限制必要性、指定默认值)：
          props:{
            name:{
              type:String,
              required:true,
              default:'大清'  
           }
         }

## mixin(混合)
  功能：可以把多个组件共用的的配置提取成一个混入对象
  使用方法：
    第一部定义混合：例如：
      {
        data(){...},
        methods:{...}
        ...
      }
    第二部使用混合，例如：
      （1）全局混入：Vue.mixin(xxx)
      （2）局部混入：mixin:['xxx']

## 插件
  功能：用于增强vue
  本质：包含install方法的一个对象，install第一个参数是vue,第二个以后的参数是插件使用者传递的参数
  插件的定义：install = function (vue,option) {
   // 1.添加全局过滤器
   Vue.filter(...)

   // 2.添加全局指令
   Vue.directive(...)

   // 3.配置全局混合
   Vue.mixin(...)

   // 4. 添加实例方法
   Vue.prototype.$myMethod = function () {...}
   Vue.prototype.$myMyPrototype = xxx

}

使用插件：Vue.use()

## scoped样式
  作用：让样式在局部生效，防止冲突
  写法：<style scoped>

  
## 模块化命名空间
目的：让代码更好维护，让多种数据分类更加明确