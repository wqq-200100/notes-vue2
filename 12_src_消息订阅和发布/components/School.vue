<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

//组件交互相关的代码（数据、方法）
export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  mounted() {
    // console.log('School', this.x);
    /*this.$bus.$on('hello', (data) => {
      console.log('我是School组件，收到了数据', data);
    })*/
    this.pubId = pubsub.subscribe('hello', (msgName,data) => {
      console.log('哈哈哈哈哈哈哈哈哈哈哈哈哈，hello消息',msgName,data);
    })
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
.school {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>