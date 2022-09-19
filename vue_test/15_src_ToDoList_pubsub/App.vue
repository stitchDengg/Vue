<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader @addTodo="addTodo"></MyHeader>
          <MyList :todos="todos"></MyList>
          <MyFooter 
          :allNum="allNum" 
          :doneNum="doneNum" 
          @deleteAll="deleteAll"
          @checkAllTodo="checkAllTodo"></MyFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
import PubSub from "pubsub-js";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos:JSON.parse(window.localStorage.getItem('todos')) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(x){
      this.todos.unshift(x);
    },
    // 勾选or取消勾选一个todo
    checkTodo(_,id){
      this.todos.forEach(e => {
        if(e.id === id) e.done = !e.done;
      })
    },
    // 删除一个todo
    deleteTodo(_,id){
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    // 删除所有已完成
    deleteAll(){
      this.todos = this.todos.filter(todo => todo.done === false);
    },
    // 全选/取消全选
    checkAllTodo(done){
      this.todos.forEach(todo => {
        todo.done = done;
      })
    }
  },
  computed:{
    allNum(){
      return this.todos.length;
    },
    doneNum(){
      /*  let sum = 0;
      this.todos.forEach(e => {
        if(e.done === true) sum++;
      })
      return sum; */
      let sum = this.todos.reduce((pre,current) => {
        return pre + (current.done ? 1 : 0);
      },0)
      return sum;
    }
  },
  watch:{
    /* todos(newVlaue){
      window.localStorage.setItem('todos',JSON.stringify(newVlaue));
    } */
    todos:{
      // 开启深度监视
      deep:true,
      handler(newVlaue){
        window.localStorage.setItem('todos',JSON.stringify(newVlaue));
      }
    }
  },
  mounted(){
    // 利用全局事件总线给MyItem组件穿数据
    /* this.$bus.$on('checkTodo',this.checkTodo);
    this.$bus.$on('deleteTodo',this.deleteTodo); */

    // 订阅MyItem组件传来的消息
    PubSub.subscribe('checkTodo',this.checkTodo);
    PubSub.subscribe('deleteTodo',this.deleteTodo);
  },
  beforeDestroy(){
    // 在组件销毁之前 取消订阅
    PubSub.unsubscribe('checkTodo');
    PubSub.unsubscribe('deleteTodo');
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>