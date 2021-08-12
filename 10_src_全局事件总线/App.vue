<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School/>
    <Student/>

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
}
</script>
<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>