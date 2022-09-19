// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

// 关闭Vue生产提示
Vue.config.productionTip = false;

// 创建公共组件实例挂载在Vue原型上
/* const demo = Vue.extend({});
Vue.prototype.x = new demo(); */

// 创建vm
new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;   //安装全局事件
  }
})