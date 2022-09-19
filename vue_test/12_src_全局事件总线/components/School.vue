<template>
  <div class="school" >
    <h2 class="title">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
  
</template>

<script>
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
      this.$bus.$on('hello', data => {
        console.log('我是School组件，收到了数据',data);
      });
    },
    beforeDestroy(){
      // 在销毁前解绑自定义事件
      this.$bus.$off('hello');
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
