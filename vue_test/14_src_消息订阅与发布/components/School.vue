<template>
  <div class="school" >
    <h2 class="title">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
  
</template>

<script>
  import PubSub from 'pubsub-js';
  export default {
    name:'School',
    data() {
      return {
        name:'cuc',
        address:'beijing',
      }
    },
    mounted() {
      //console.log('School',this.x);
     /*  this.$bus.$on('hello', data => {
        console.log('我是School组件，收到了数据',data);
      }); */
      this.pubId = PubSub.subscribe('hello',(msgName,data) => {
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
        console.log(this);
      });
    },
    beforeDestroy(){
      // 在销毁前解绑自定义事件
      //this.$bus.$off('hello');
      PubSub.unsubscribe(this.pubId);
    }
  }
  
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>
