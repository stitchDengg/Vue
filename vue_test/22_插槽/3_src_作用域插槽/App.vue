<template>
  <div class="container">
    <CategoryVue title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(game, index) in atguigu.games" :key="index">
            {{ game }}
          </li>
        </ul>
        <p>{{atguigu.hello}}</p>
      </template>
    </CategoryVue>

    <CategoryVue title="游戏">
      <template scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </CategoryVue>

    <CategoryVue title="游戏">
      <template scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </CategoryVue>
  </div>
</template>
<script>
import CategoryVue from "./components/Category.vue";
export default {
  components: { CategoryVue },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
p{
  text-align: center;
}
</style>