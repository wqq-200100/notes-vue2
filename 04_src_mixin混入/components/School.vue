<template>
  <div class="demo">
    <h2 @click="showName">学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
/*import {mixin} from "../mixin";*/

//组件交互相关的代码（数据、方法）
export default {
  name:'School',
  data() {
    return {
      schoolName: '尚硅谷',
      address: '北京',
    }
  },
  /*mixins:[mixin]*/
}
</script>

<style scoped>

</style>