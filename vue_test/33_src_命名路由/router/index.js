// 该文件用来创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Messgae.vue';
import Detail from '../pages/Detail.vue';
// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News,
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component:Detail
            }
          ]
        },
      ]
    },
  ]
})
