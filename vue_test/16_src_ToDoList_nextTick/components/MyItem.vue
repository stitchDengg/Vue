<template>
  <li>
    <label>
      <input type="checkbox" 
      :checked="todo.done" 
      @change="handleCheck(todo.id)">
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text"
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        @keyup.enter="handleBlur(todo,$event)"
        ref="editInput"
        >
    </label>
    <button class="btn btn-danger" @click="handleTodo(todo.id)">删除</button>
    <button 
      v-show="!todo.isEdit" 
      class="btn btn-edit" 
      @click="handleEdit(todo)"
      >
      编辑
    </button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
  name: "MyItem",
  props:['todo'],
  methods:{
    // 勾选or取消勾选
    handleCheck(id){
      // 通知App组件将对应的done值取反
      // this.$bus.$emit('checkTodo',id);
      PubSub.publish('checkTodo',id);
    },
    // 删除
    handleTodo(id){
      if(confirm('确定删除吗')){
        //this.$bus.$emit('deleteTodo',id);
        PubSub.publish('deleteTodo',id);
      }
    },
    // 编辑
    handleEdit(todo){
      //直接添加不是响应式数据
      //todo.isEdit = true;
      if(todo.isEdit){
        todo.isEdit = true;
      }else{
        this.$set(todo,'isEdit',true);
      }

      // 先对焦
      //this.$refs.editInput.focus();  //没成功 原因是要函数回调执行完毕才会改变模板
      /* setTimeout(() => {
        this.$refs.editInput.focus();
      }, 200); */

      // nextTick所指定的回调会在dom节点更新完毕以后再执行
      this.$nextTick(function(){
        this.$refs.editInput.focus();
      })
    },
    // 失去焦点回调，真正执行修改逻辑
    handleBlur(todo,e){
      this.todo.isEdit = false; 
      this.$bus.$emit('updateTodo',todo.id,e.target.value);
    }
  }
};
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  li:hover{
    background-color: #ddd;
  }
  li:hover button{
    display: block;
  }
</style>