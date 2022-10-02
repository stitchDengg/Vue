<template>
  <div class="container">
    <CountVue></CountVue>
    <hr><hr>
    <PersonVue></PersonVue>
  </div>
</template>
<script>

  import CountVue from './components/Count';
  import PersonVue from './components/Person';
  export default {
    components: {CountVue,PersonVue},
    data() {
      return {

      };
    },
  };
</script>

<style scoped>

</style>