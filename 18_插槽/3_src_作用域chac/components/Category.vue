<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games" msg="hello">我是默认值</slot>

  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data(){
    return{
      games:['王者荣耀','英雄联盟','超级玛丽','穿越火线',],
    }
  }
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3{
  text-align: center;
  background-color: orange;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>