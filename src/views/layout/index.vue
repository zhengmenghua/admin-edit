<template>
  <div class="home">
    <siderBar/>
    <div class="app-body">
      <appHeader/>
      <appMain/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appHeader from './appHeader.vue';
import siderBar from './siderBar.vue';
import appMain from './appMain.vue';

export default {
  name: 'HomeView',
  components: {
    appHeader,
    siderBar,
    appMain
  }
}
</script>
<style scoped>
  .home{
    display: grid;
    grid-template-columns: minmax(150px, 20%) 1fr;
  }
</style>
