<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">点我提交学校名字</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法）
export default {
  name:'School',
  props:['getSchoolName'],
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name,666,888,999)
    }
  }
}
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>