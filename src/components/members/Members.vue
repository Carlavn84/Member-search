<template>
  <div class="members">
    <div class="top">
      <h1>List of members</h1>
      <button class="yellow-button" @click="showModal=true">
        <div><img src="@/assets/images/plus.svg" alt="+" /></div>
        <div>Add member</div>
      </button>
    </div>

    <MemberList class="list" v-bind:members="members" v-on:delete-member="deleteMember"/>

    <SearchAndAddModal v-if="showModal" v-bind:users="users" @close="showModal = false" v-on:add-member="addMember"/>
  </div>
</template>

<script>
import userApi from "@/api/userApi";
import SearchAndAddModal from './SearchAndAddModal.vue';
import MemberList from './MemberList.vue';

export default {
  components: { MemberList, SearchAndAddModal },

  name: 'Members',

  data() {
    return {
      members: [],
      showModal: false,
      users : [],
    };
  },

  mounted() {
    userApi.getUsers().then((data) => {
      this.users = data.map((user) => {
            const name = `${user.first_name} ${user.last_name}`;
            return { text:name, search:user.email, ...user }; // add extra fields to objects
          });
    });
  },

  methods: {

    addMember(id) {
      if (id === null)
        return;

      // not allowed to add if the member is already in the list
      if (this.members.find((member) => (member.id === id))){
        return;
      }

      // get matching user data
      const user = this.users.find(it => id === it.id);
      this.members = [...this.members, user];
    },

    deleteMember(id) {
      this.members = this.members.filter((member) => member.id !== id);
    },
  }
};
</script>

<style lang="scss" scoped>
  .top button {
    margin-bottom: 50px;
  }

  // desktop mode
  @media only screen and (min-width: $switch-width) {
    .top h1 {
      float: left;
    }

    .top button {
      float: right;
    }

    .list {
      clear: both;
    }
  }
</style>
