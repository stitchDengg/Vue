<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <input type="text" v-fbind:value="name">
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
