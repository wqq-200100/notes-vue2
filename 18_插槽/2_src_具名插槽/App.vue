<template>
  <div class="container">
    <category title="美食" >
      <img slot="center" src="./components/foods.jpg" alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </category>

    <category title="游戏" >
      <ul slot="center" >
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </category>

    <category title="电影" >
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4 >欢迎前来观看</h4>
      </template>
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
.container,.foot{
  display: flex;
  justify-content: space-around;
}

h4{
  text-align: center;
}
</style>
