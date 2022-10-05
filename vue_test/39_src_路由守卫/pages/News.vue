<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news001 <input type="text" /></li>
      <li>news002 <input type="text" /></li>
      <li>news003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  mounted(){
    this.timer = setInterval(() => {
      console.log(1);
      this.opacity -= 0.01;
      if(this.opacity < 0) this.opacity = 1;
    },16);
  },
  beforeDestroy(){
    console.log('news组件被销毁了');
  },
  // 路由失活的时候触发
  deactivated(){
    console.log("news组件失效了");
    clearInterval(this.timer);
  },
  // 路由激活的时候触发
  activated(){
    console.log('News组件被激活了');
  }
};
</script>

<style>
</style>