<template>
  <div div class="grid member-list">
    <div v-for="member in members" :key="member.id">
      &gt; <span class="member" @click="$emit('delete-member', member.id)">
        {{ member.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberList",

  props: ["members"],
};
</script>

<style lang="scss" scoped>
  .member {
    text-decoration: underline;
    cursor: pointer;
    color: $color-purple;
    padding: 0px;
    margin: 0px;
  }
</style>
