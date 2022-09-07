<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
  
</template>

<script>
   // 引入一个混合
  import {mixin,mixin2}  from '../mixin.js';
  export default {
    name:'Student',
    data() {
      return {
        sex:'男生',
        name:'张三',
      }
    },
    mixins:[mixin,mixin2],
  }
</script>
