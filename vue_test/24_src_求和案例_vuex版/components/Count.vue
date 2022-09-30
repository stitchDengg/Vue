<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <select v-model="num">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name:'Count',
    data() {
      return {
        // 用户选择的数字
        num:1,
      }
    },
    methods: {
      increment:function(){
        this.$store.commit('ADD',this.num);
      },
      decrement(){
        this.$store.commit('REDUCE',this.num);
      },
      incrementOdd(){
        this.$store.dispatch('addOdd',this.num);
      },
      incrementWait(){
          this.$store.dispatch('addWait',this.num);
      }
    },
    }
</script>

<style>
  
</style>