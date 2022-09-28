<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
        @keyup.enter="getUsers"
      />&nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "Search",
  data() {
    return {
      keyWord:'',
    }
  },
  methods:{
    getUsers(){
      
      // 请求前更新List的数据
      this.$bus.$emit('updateListData',{users:[],isFirst:false,isLoading:true,errMsg:''});
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        res => {
          //this.$bus.$emit('sendUsers',res.data.items);
          this.$bus.$emit('updateListData',{users:res.data.items,isLoading:false,errMsg:''});
        }
      ).catch(
        err => {
          console.log(err.message);
          this.$bus.$emit('updateListData',{users:[],isLoading:false,errMsg:err.message});
        }
      )
    }
  }
};
</script>

<style>
</style>