<template>
  <div>
    <Student name='大清' :age=19 sex="女"/>
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: "App",
  components:{
    Student
  },
}
</script>