<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /* beforeDestroy(){
      console.log('About组件即将被销毁了');
    }, */
  /*  mounted(){
      console.log('About组件挂载完毕了',this);
      window.aboutRoute = this.$route;
      window.aboutRouter = this.$router;
    } */
  //通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    // ...
    console.log('About-beforeRouteEnter',to,from,);
    if (to.meta.isAuth) {
      // 验证是否符合条件通过路由守卫
      if (localStorage.getItem("school") === "cuc") {
        // 通过路由
        next();
      } else {
        alert("学校名无权限查看");
      }
    } else {
      next();
    }
    //next();
  },
  // 通过路由规则离开该组件时被调用
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('About-beforeRouteLeave',to,from,);
    next();
  }
};
</script>

<style>
</style>