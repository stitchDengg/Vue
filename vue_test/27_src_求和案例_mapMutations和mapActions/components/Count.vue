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
      // 2.靠mapState从state中读取数据自动生成的计算属性(对象写法)
      // mapState函数返回值是一个对象，使用剩余运算符合并
      
      //借助mapState生成计算属性：sum、school、subject（对象写法）
      //...mapState({sum:'sum',school:'school',subject:'subject'}),

      //借助mapState生成计算属性：sum、school、subject（数组写法）
      ...mapState(['sum','school','subject']),  

      //借助mapGetters生成计算属性bigSum（对象写法）
      //...mapGetters({bigSum:'bigSum'}),

      ...mapGetters(['bigSum'])
    },
    methods:{
     /*  increment:function(){
        this.$store.commit('ADD',this.num);
      },
      decrement(){
        this.$store.commit('REDUCE',this.num);
      }, */
      //借助mapMutations生产对应的方法，方法中会调用commit会联系mutations(对象写法)
      //...mapMutations({increment:'ADD',decrement:'REDUCE'}),

      //借助mapMutations生产对应的方法，方法中会调用commit会联系mutations(数组写法)
      ...mapMutations(['ADD','REDUCE']),

      
      
      /*********************************/
      
      // incrementOdd(){
      //   this.$store.dispatch('addOdd',this.num);
      // },
      // incrementWait(){
      //   this.$store.dispatch('addWait',this.num);
      // }

      //借助mapActions生产对应的方法，方法中会调用dispatch会联系actions(对象写法)  
      //...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),

      //借助mapActions生产对应的方法，方法中会调用dispatch会联系actions(数组写法)  
      ...mapActions(['addOdd','addWait']),
    },
    }
</script>

<style>
  
</style>