<template>
  <div>
    <button @click="isShow = !isShow ">显示/隐藏</button>
    <transition name="hello" :appear="true">
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Test',
  data() {
    return {
      isShow:true,
    }
  },
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }

  .hello-enter-active{
    animation: denghao 1s ease;
  }

  .hello-leave-active{
    animation: denghao 1s reverse;
  }

  @keyframes denghao {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>