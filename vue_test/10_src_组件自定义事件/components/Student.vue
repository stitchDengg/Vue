<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>当前求和为{{number}}</h2>
    <button @click="add">点我number++</button><br>
    <button  @click="getName(name)">把学生名称给App</button><br>
    <button @click="unbind">解绑denghao事件</button><br>
    <button @click="death">销毁自己当前Student组件的实例对象</button>
  </div>
  
</template>

<script>
  export default {
    name:'Student',
    data() {
      return {
        sex:'男生',
        name:'张三',
        number:0,

      }
    },
    methods: {
      getName(name){
        // 触发了Student组件的实例对象的denghao事件
        this.$emit('denghao',this.name,666,888,999);
        //this.$emit('demo');
      },
      unbind(){
        this.$off('denghao'); // 解绑一个自定义事件

        //this.$off(['denghao','demo']); // 解绑多个自定义事件

        //this.$off();  // 解绑所有自定义事件
      },
      death(){
        this.$destroy();  //销毁了当前stundet组件实例，销毁后所有Student实例的自定义事件全都不奏效了
      },
      add(){
        console.log('add回调被调用了');
        this.number ++;
      }
    },
  }
</script>


<style lang="less" scoped>
  .student{
    background-color: orange;
    margin-top: 30px;
    padding: 5px;
  }
</style>