<template>
  <div class="school" >
    <h2 class="title">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button  @click="getName(name)">把学校名称给App</button>
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
    props:['getSchoolName'],
    methods:{
      getName(name){
        this.getSchoolName(name);
      }
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
