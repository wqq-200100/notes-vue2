<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="test">点我测试hello</button>
  </div>
</template>

<script>

//组件交互相关的代码（数据、方法）
export default {
  name: 'School',
  data() {
    return {
      schoolName: '尚硅谷呼呼呼',
      address: '北京',
    }
  },
  methods:{
    test(){
      this.hello()
    }
  }
}
</script>

<style scoped>

</style>