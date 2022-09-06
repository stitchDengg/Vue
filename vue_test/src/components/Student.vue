<template>
  <div>
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学校年龄：{{ age }}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name:'Student',
      studentName: "邓浩",
      age: 18,
    };
  },
};
</script>
