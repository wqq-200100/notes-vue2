<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息内容：{{title}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title'],
  computed:{
    /*id(){
      return this.$route.query.id
    },
    title(){
      return this.$route.query.title
    }*/
  }
}
</script>

<style scoped>

</style>