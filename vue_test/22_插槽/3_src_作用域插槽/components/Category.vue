<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽，挖个坑的等着组件的使用者进行填充 -->
    <slot :games ="games" hello="hello">我是默认的内容</slot>
  </div>
</template>

<script>
  export default {
    name:'Category',
    props:['title'],
    data() {
      return {
        games: ["英雄联盟", "守望先锋", "穿越火线", "反恐精英"],
      }
    },
  }
</script>
data

<style>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img{
    width: 100%;
  }
</style>