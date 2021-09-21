<template>
  <div id="app">
    <ThePage>
      <Members />
    </ThePage>
  </div>
</template>

<script>
import ThePage from '@/components/layout/ThePage.vue';
import Members from '@/components/members/Members.vue';

export default {
  name: 'MainView',

  components: { ThePage, Members },
};
</script>

<style lang="scss">
</style>
