// 该文件用于创建vuex最为核心的store
import Vue from 'vue';
//引入vuex
import Vuex from 'vuex';
// 准备actions 用于响应组件中的动作
const actions = {
 /*  add(context,value){
    //console.log('actions中的add被调用了',context,value);
    context.commit('ADD',value);
  },
  reduce(context,value){
    context.commit('REDUCE',value);
  }, */
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
}
// 准备mutations 用于操作数据(state)
const mutations = {
  ADD(state,value){
    //console.log('mutations中的add被调用了',state,value);
    state.sum += value;
  },
  REDUCE(state,value){
    state.sum -= value;
  },
}
// 准备state用于存储数据
const state = {
  sum:0,
}


Vue.use(Vuex);//使用vuex插件
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
});
