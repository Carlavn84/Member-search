<template>
  <div id="app">
    <MainView />
  </div>
</template>

<script>
import MainView from './views/MainView.vue';

export default {
  name: 'App',

  components: {
    MainView,
  },
};
</script>

<style lang="scss">
  // Reset styling at the top of our app
  @import '@/assets/scss/reset.scss';

  // Font
  @import url(https://fonts.googleapis.com/css?family=Poppins);

  // Global layout
  @import '@/assets/scss/global.scss';
</style>
