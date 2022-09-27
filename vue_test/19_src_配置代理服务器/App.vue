<template>
  <div>
    <button @click="getStundents">获取学生信息</button><br>
    <button @click="getCars">获取汽车信息</button>
    <ul>
      <li v-for="(d,index) in stundentsData" :key="index">{{d}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "App",
    components: {

    },
    data() {
      return {
        stundentsData:'',
      };
    },
    methods: {
      getStundents(){
        // 代理服务器地址是8080 配置在vue.config.js里 
        // 如果请求的资源8080本来就有 就不会把请求转发给5000
        axios.get('http://localhost:8080/api/students').then(
          res => {
            console.log('请求成功了',res.data);
            this.stundentsData = res.data;
          }
        ).catch(err => {
          console.log('请求失败了',err.message);
        })
      },
      getCars(){
        axios.get('http://localhost:8080/demo/cars').then(
          res => {
            console.log(res.data);
          }
        ).catch(
          err => {
            console.log(err.message);
          }
        )
      }
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
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(15, 123, 165);
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