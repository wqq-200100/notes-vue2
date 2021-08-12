<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      msg: '我是尚硅谷学生',
      myAge:this.age
    }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  },
  //简单声明接收
  props: ['name', 'age', 'sex']

  //接受的同时对数据进行类型限制
  /*props:{
    name:String,
    age:Number,
    sex:String
  }*/

  //接受的同时对数据：进行类型限制+默认值的指定+必要性的限制
  /*props: {
    name:{
      type:String,
      required:true //名字是必要的
    },
    age:{
      type:Number,
      default:99 //默认值
    },
    sex:{
      type:String,
      required: true
    }
  }*/
}
</script>

<style scoped>

</style>