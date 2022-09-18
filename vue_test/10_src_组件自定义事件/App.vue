<template>
  <div class="app">
    <h1>{{msg}},学生姓名是{{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用v-on) -->
    <!-- <Student @denghao="getStudentName" @demo="m1"></Student> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student" @click.native="show"></Student>
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
      msg:'你好啊',
      studentName:'',
    };
  },
  methods:{
    getSchoolName(name){
      console.log(name);
    },
    getStudentName(name,...args){
      console.log('demo',name,args);
      this.studentName = name;
    },
    m1(){
      console.log('demo事件被触发了');
    },
    show(){
      alert(123);
    }
  },
  mounted(){
    // 这样写灵活性比较强
    /*  setTimeout(() => {
      this.$refs.student.$on('denghao',(name) => {
      console.log(name);
      this.msg = name;
    });
    }, 3000); */

    // 触发一次自定义事件
   /*  this.$refs.student.$once('denghao',(name,...args) => {
      console.log(name,args);
      let [x,y,z] = args;
      console.log(x,y,z);
      this.msg = name;
    }) */
    // 推荐回调函数写在methods中，否则要使用箭头函数否则this指向触发此定义事件的组件实例对象
    this.$refs.student.$once('denghao',this.getStudentName);
  }
};
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>