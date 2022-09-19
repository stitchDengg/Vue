<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStundentName">把学生名给School组件</button>
  </div>
  
</template>

<script>
  import PubSub from 'pubsub-js';
  export default {
    name:'Student',
    data() {
      return {
        sex:'男生',
        name:'张三',
      }
    },
    methods:{
      sendStundentName(){
        // 触发hello事件
        //this.$bus.$emit('hello',this.name)
        PubSub.publish('hello',666);
      }
    }
  }
</script>


<style lang="less" scoped>
  .student{
    background-color: orange;
    margin-top: 30px;
    padding: 5px;
  }
</style>