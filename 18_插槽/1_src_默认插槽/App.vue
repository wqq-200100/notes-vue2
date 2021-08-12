<template>
  <div class="container">
    <category title="美食" >
      <img src="./components/foods.jpg" alt="">
    </category>

    <category title="游戏" >
      <ul >
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </category>

    <category title="电影" >
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components:{
    Category
  },
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排',],
      games:['王者荣耀','英雄联盟','超级玛丽','穿越火线',],
      films:['《教父》','《拆弹专家》','《你好啊》','《哈哈哈哈》'],
    }
  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: space-around;
}
</style>
