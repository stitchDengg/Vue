<template>
  <div class="todo-footer" v-show="allNum">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span> <span>已完成{{doneNum}}</span> / 全部{{allNum}} </span>
    <button class="btn btn-danger" @click="handleAllDelete">清除已完成任务</button>
  </div>
</template>

<script>

export default {
  name: "MyFooter",
  props:['allNum','doneNum','deleteAll','checkAllTodo'],
  methods: {
    handleAllDelete(){
      if(confirm('确定删除已完成吗')){
        this.deleteAll();
      }
    },
  /*   checkAll(e){
      this.checkAllTodo(e.target.checked);
    } */
  },
  computed:{
    isAll:{
      get(){
        return this.allNum ===  this.doneNum && this.allNum > 0;
      },
      set(value){
        this.checkAllTodo(value);
      }
    }
    /* isAll(){
      return this.allNum ===  this.doneNum && this.allNum > 0;
    } */
  }
};
</script>

<style scoped>
  /*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>