<template>
  <div class="container">
    <!-- 搜索区 -->
    <SearchVue></SearchVue>
    <!-- 用户区 -->
    <ListVue></ListVue>
  </div>
</template>

<script>
import ListVue from "./components/List.vue";
import SearchVue from "./components/Search.vue";
export default {
  name: "App",
  components: {
    SearchVue,
    ListVue,
  },
};
</script>

<style>
</style>