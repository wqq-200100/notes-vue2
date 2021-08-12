<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="senStudentName">把学生名字给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'Student',
  data(){
    return {
      name:'大清',
      sex:'女'
    }
  },
  methods:{
    senStudentName(){
      /*this.$bus.$emit('hello',this.name)*/
      pubsub.publish('hello',666666)
    }
  },
  mounted() {
    // console.log('School', this.x);
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