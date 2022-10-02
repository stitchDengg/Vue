<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="add">
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  import {mapMutations, mapState} from 'vuex';
  export default {
    name:'Person',
    data() {
      return {
        name:'',
      }
    },
    computed:{
      // 拿到state数据
      // ...mapState(['personList']),
      personList(){
        return this.$store.state.personAbout.personList;
      },
      sum(){
        return this.$store.state.countAbout.sum;
      }
    },
    methods:{
      //...mapMutations('personAbout',['ADD_PERSON']),
      add(){
        const personObj = {id:nanoid(),name:this.name};
        //this.ADD_PERSON(peronObj);
        this.$store.commit('personAbout/ADD_PERSON',personObj)
        this.name = '';
      }
    }
  }
</script>
