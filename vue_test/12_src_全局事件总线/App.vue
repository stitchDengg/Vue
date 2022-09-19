<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  components: {
    Student,
    School,
},
  data() {
    return {
      msg:'你好啊',
    };
  },
};
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>