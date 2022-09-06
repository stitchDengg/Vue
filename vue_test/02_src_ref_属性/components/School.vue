<template>
  <div class="schoolName">
    <h2 >学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'cuc',
      address:'beijing',
    }
  },
}
</script>

<style>
  .schoolName{
    background-color: skyblue;
  }
</style>