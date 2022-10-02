// 该文件用于创建vuex最为核心的store
import Vue from 'vue';
//引入vuex
import Vuex from 'vuex';
//使用vuex插件
Vue.use(Vuex);

// 准备actions 用于响应组件中的动作
const actions = {
  addOdd(context,value){
    if(context.state.sum % 2) {
      context.commit('ADD',value);
    }
  },
  addWait(context,value){
    setTimeout(() => {
      context.commit('ADD',value);
    }, 1000);
  }
};

// 准备mutations 用于操作数据(state)
const mutations = {
  ADD(state,value){
    //console.log('mutations中的add被调用了',state,value);
    state.sum += value;
  },
  REDUCE(state,value){
    state.sum -= value;
  },
  ADD_PERSON(state,value){
    state.personList.push(value);
  }
};

// 准备state用于存储数据
const state = {
  sum:0,  //当前的和
  school:'cuc',
  subject:'前端',
  personList:[
    {id:'001',name:'张三'},
  ]
};

// 准备getters用于当state中的数据需要经过加工后再使用时
const getters = {
  bigSum(state){
    return state.sum * 10;
  }
};

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
