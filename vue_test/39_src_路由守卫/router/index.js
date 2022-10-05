// 该文件用来创建整个应用的路由器
import VueRouter from "vue-router";
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import News from '../pages/News.vue';
import Message from '../pages/Messgae.vue';
import Detail from '../pages/Detail.vue';
// 创建并暴露一个路由器
const router =  new VueRouter({
  routes:[
    // 跳转到about组件
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
    // 跳转到home组件
    {
      name:'shouye',
      path:'/home',
      component:Home,
      children:[
        {
          name:'xinwen',
          path:'news',
          component:News,
        },
        {
          name:'xiaoxi',
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component:Detail,
              //props的第一种写法，值为对象,该对象中所有的key-value都会以props的形式传给detail组件
              //props:{a:1,b:'hello'}

              //props第二种写法,值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              //props:true,

              //props第三种写法，值为函数，
              /* props($route){
                return {id:$route.query.id,title:$route.query.title}
              } */
              // 结构赋值
              props({query:{id,title}}){
                return {id,title}
              }
            }
          ]
        },
      ]
    },
  ]
})

// 全局前置路由守卫---每次路由切换之前被调用，初始化的时候被调用
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log('@',to,from);
  if(to.name === 'xinwen' || to.name === 'xiaoxi'){
    // 验证是否符合条件通过路由守卫
  if(localStorage.getItem('school') === 'cuc'){
    // 通过路由
    next();
  }else{
    alert("学校名无权限查看")
  }
  }else{
    next();
  }
})

export default router;
