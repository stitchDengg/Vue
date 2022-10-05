// 引入Vue
import Vue from 'vue';
// 引入App
import App from './App.vue';

//引入element-ui组件库
import ElementUI from 'element-ui';
// 引入element-UI全部样式
import 'element-ui/lib/theme-chalk/index.css';

//使用element插件
Vue.use(ElementUI);


// 创建vm
new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;   //安装全局事件
  },
})
