<template>
  <main class="main container">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'TheMain',
};
</script>

<style lang="scss" scoped>
  .main {
    background-color: $color-white;
  }
</style>
