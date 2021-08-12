<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
        appear
        name="animate_animate animate_bounce"
        enter-active-class="animate_swing"
        leave-active-class="animate_backOutUp"
    >
      <h1 v-show="!isShow" key="1">你好啊啊啊</h1>
      <h1 v-show="isShow" key="2">按吧按吧按吧</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "Test",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }


</style>