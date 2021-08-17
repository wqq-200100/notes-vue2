<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html使用a标签实现页面跳转-->
          <!-- <a href="./about.html" class="list-group-item active">about</a>-->
          <!-- <a href="./home.html" class="list-group-item">Home</a>-->

          <!--借助router-link实现页面跳转 -->
          <router-link class="list-group-item" active-class="active" to="/about">about</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组建的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
export default {
  name: "App",
  components:{
    Banner
  }

}
</script>
