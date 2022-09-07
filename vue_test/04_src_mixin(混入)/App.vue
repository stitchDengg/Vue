<template>
  <div>
    <Student></Student>
    <hr>
    <School></School>
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
    School
  },
  data() {
    return {
    };
  },
};
</script>

