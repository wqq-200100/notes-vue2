<template>
  <ul>
    <li :style="{opacity}">欢迎学习啊啊啊啊</li>
    <li>new001 <input type="text"></li>
    <li>new002 <input type="text"></li>
    <li>new003 <input type="text"></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1
    }
  },
 /* beforeDestroy() {
    clearInterval(this.timer)
  },*/
  /*mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  }*/

  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) this.opacity = 1
    }, 16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>

</style>