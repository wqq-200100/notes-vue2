<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">点我提交学生名字</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁事件</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return {
      name:'大清',
      sex:'女'
    }
  },
  methods:{
    sendStudentName(){
      //触发Student组件实例化身上的atguigu事件
      this.$emit('atguigu',this.name)
      // this.$emit('demo')
    },
    unbind(){
      this.$off('atguigu') //只适用于一个解绑事件
      // this.$off(['atguigu','demo']) //解绑多个自定义事件
      // this.$off() //解绑所有
    },
    death(){
      this.$destroy() //销毁了当前Student组件的实例，销毁后所欲Student实例中的自定义事件全都不奏效
    }
  }
}
</script>

<style scoped>
.student {
  background-color: greenyellow;
  padding: 5px;
  margin-top: 30px;
}
</style>