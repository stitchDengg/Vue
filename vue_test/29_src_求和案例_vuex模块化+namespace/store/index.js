// 该文件用于创建vuex最为核心的store
import Vue from 'vue';
//引入vuex
import Vuex from 'vuex';
//使用vuex插件
Vue.use(Vuex);

// 求和功能相关的配置
const countAbout = {
  namespaced:true,
  actions: {
    addOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit('ADD', value);
      }
    },
    addWait(context, value) {
      setTimeout(() => {
        context.commit('ADD', value);
      }, 1000);
    }
  },
  mutations: {
    ADD(state, value) {
      //console.log('mutations中的add被调用了',state,value);
      state.sum += value;
    },
    REDUCE(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,  //当前的和
    school: 'cuc',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
}

// 人员管理功能相关的配置
const personAbout = {
  namespaced:true,
  actions: {},
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.push(value);
    }
  },
  state: {
    personList: [
      { id: '001', name: '张三' },
    ]
  },
  getters: {}
}

//创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout,
    personAbout
  }
});
