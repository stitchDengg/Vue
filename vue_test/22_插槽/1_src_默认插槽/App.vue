<template>
  <div class="container">
    <CategoryVue title="美食">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fvt%2Ff0%2FQJ6859264761.jpg%3Fx-oss-process%3Dstyle%2Fshows&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666960127&t=5e540ea5637a841ec84a25a9f1d931ff"
        alt=""
      />
    </CategoryVue>

    <CategoryVue title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{game}}</li>
      </ul>
    </CategoryVue>

    <CategoryVue title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </CategoryVue>
  </div>
</template>
<script>
import CategoryVue from "./components/Category.vue";
export default {
  components: { CategoryVue },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["英雄联盟", "守望先锋", "穿越火线", "反恐精英"],
      films: ["教父", "拆弹专家", "你好，李焕英", "当幸福来敲门"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  
}
video{
  width: 100%;
}
</style>