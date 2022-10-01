<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍后为：{{bigSum}}</h3>
    <h3>我在{{school}}学习{{subject}}</h3>
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
  import {mapState,mapGetters} from 'vuex';
  export default {
    name:'Count',
    data() {
      return {
        // 用户选择的数字
        num:1,
      }
    },
    computed:{
      //1.靠程序员亲自写计算属性
    /*   sum(){
        return this.$store.state.sum;
      },
      subject(){
        return this.$store.state.subject;
      },
      school(){
        return this.$store.state.school;
      }, */

      // 2.靠mapState从state中读取数据自动生成的计算属性(对象写法)
      // mapState函数返回值是一个对象，使用剩余运算符合并
      //借助mapState生成计算属性：sum、school、subject（对象写法）
      //...mapState({sum:'sum',school:'school',subject:'subject'}),

      //借助mapState生成计算属性：sum、school、subject（数组写法）
      ...mapState(['sum','school','subject']),


      /* bigSum(){
        return this.$store.getters.bigSum;
      }, */

      ...mapGetters(['bigSum'])
    },
    methods:{
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