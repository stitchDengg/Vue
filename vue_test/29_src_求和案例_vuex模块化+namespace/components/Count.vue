<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍后为：{{bigSum}}</h3>
    <h3>我在{{school}}学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数是{{personList.length}}</h3>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="ADD(num)">+</button>
    <button @click="REDUCE(num)">-</button>
    <button @click="addOdd(num)">当前求和为奇数再加</button>
    <button @click="addWait(num)">等一等再加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters, mapMutations, mapActions} from 'vuex';
  export default {
    name:'Count',
    data() {
      return {
        // 用户选择的数字
        num:1,
      }
    },
    computed:{
      ...mapState('countAbout',['sum','school','subject']),  
      ...mapState('personAbout',['personList']),  
      ...mapGetters('countAbout',['bigSum'])
    },
    methods:{
      ...mapMutations('countAbout',['ADD','REDUCE']),
      ...mapActions('countAbout',['addOdd','addWait']),
    },
    mounted(){
      console.log(this.$store);
    }
    }
</script>

<style>
  
</style>