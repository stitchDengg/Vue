<template>
  <div class="demo">
    <h2 class="qwe">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
  
</template>

<script>
  export default {
    name:'Student',
    data() {
      return {
        sex:'男生',
        name:'张三',
      }
    },
  }
</script>


<style lang="less" scoped>
  .demo{
    background-color: orange;
    .qwe{
      font-size: 40px;
    }
  }
</style>