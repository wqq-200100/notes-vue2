<template>
  <div class="app">
    <h2>{{ msg }},学生姓名是：{{studentName}}</h2>

    <!--    通过父组件给子组件传递函数类型的props实现：子给夫传递数据-->
    <School :getSchoolName="getSchoolName"/>

    <!--    通过父组件给子组件绑定一个自定义事件实现：子给夫传递数据-->
    <!--        <student @atguigu="getStudentName" @demo="m1"/>-->

    <!--    通过父组件给子组件绑定一个自定义事件实现：子给夫传递数据-->
        <student ref="student" @click.native="show"/>

  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    School,
    Student
  },
  data() {
    return {
      msg: '你好！！！',
      studentName:''
    }
  },
  methods: {
    getSchoolName(name,...params) {
      console.log('收到了学习名字', name,params);
    },
    getStudentName(name) {
      console.log('demo被调用了', name);
      this.studentName = name
    },
    m1(){
      console.log('demo事件被触发了');
    },
    show(){
      alert('哈哈哈哈哈呼呼呼')
    }
  },
  mounted() {
    this.$refs.student.$on('atguigu',this.getStudentName)  //绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName) // 绑定自定义事件(一次性)
  }
}
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>