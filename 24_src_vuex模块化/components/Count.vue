<template>
  <div>
    <h1>当前计数为：{{sum }}</h1>
    <h3>当前求和值放大10倍：{{ bigSum }}</h3>
    <h3>我在{{school }}，学习{{subject }}</h3>
    <h3 style="color: red">下Person组件的总人数：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数再加</button>
    <button @click="incrementWait(n)">等一等在加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    }
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),
    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters('countAbout',['bigSum'])
  },
  methods: {
    // 借助MapMutations生成对应的方法，方法中会调用commit去联系mutations (对象写法)
    ...mapMutations('countAbout',{increment: 'JIA', decrement: 'JIAN'}),

    // 借助MapMutations生成对应的方法，方法中会调用commit去联系actions (对象写法)
    ...mapActions('countAbout',{incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
  },
  mounted() {
    // const x = mapState({sum: 'sum', school: 'school', subject: 'subject'})
    // console.log(x);
  }
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>
