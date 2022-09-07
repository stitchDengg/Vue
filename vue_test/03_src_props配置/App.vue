<template>
  <div>
    <Student name="李四" sex="女" :age="18"></Student>
  </div>
</template>

<script>
  // 引入School组件
  import Student from './components/Student';
  export default {
    name:'App',
    components:{
      Student,
    },
    data() {
      return {
        
      }
    },
  }
</script>

