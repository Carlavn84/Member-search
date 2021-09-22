<template>
  <div class="header">
    <p class="title">DummyData.</p>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 80px;
    background-color: $color-yellow;
  }

  .title {
    margin: 20px;
    color: $color-purple;
    font-size: 40px;
    font-weight: bold;
  }
</style>
