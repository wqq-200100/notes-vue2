<template>
  <div>
    <h2> 我是Home组件内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <!--    让不展示的路由保持挂载-->
    <!--缓存一个    -->
    <keep-alive include="News">
      <router-view/>
    </keep-alive>
    <!--缓存多个    -->
    <!--    <keep-alive :include="['News','Message']">
          <router-view/>
        </keep-alive>-->
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>