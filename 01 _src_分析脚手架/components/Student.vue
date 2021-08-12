<template>

  <div>
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name:'Student',
  data(){
    return {
      studentName:'大清',
      age:19
    }
  },
}
</script>

<style scoped>

</style>