<template>
  <div>
    <div class="blur" />

    <div class="modal">
      <button class="close" @click="$emit('close')"><img src="@/assets/images/close.svg" alt="X"></button>

      <div class="content">
        <h1>Add member</h1>
        <p>Start typing a name or an email address and select the user you want to add as member</p>

        <SearchBox class="search-box" ref="members" v-on:item-selected="itemSelected" v-bind:items="users"/>

        <button class="add-member yellow-button"
                @click="addMember"
                type="submit"
                v-bind:class="{ disabled: disableButton }"
                :disabled="disableButton">
          <div>Add member</div>
          <div><img src="@/assets/images/chevron.svg" alt=">" /></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/utils/SearchBox.vue";

export default {
  name: "SearchAndAddModal",

  components: { SearchBox },

  props: [ "users" ],

  data() {
    return {
      id: null,
    };
  },

  methods: {

    addMember() {
      this.$emit("add-member", this.id);

      // clear the input field after submitting
      this.id = null;
      this.$refs.members.search = "";
    },

    itemSelected(id) {
      this.id = id;
    }
  },

  computed: {
    disableButton() {
      return this.id === null;
    }
  }
};
</script>

<style lang="scss" scoped>
  .modal {
    background-color: $color-light-grey;
    width: 100%;
    height: 100%;
    justify-content: center;
    box-shadow: 1px 1px 3px $color-black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    border-radius: 5px;
  }

  .close {
    margin: 10px;
    float: right;
    border: hidden;
    width: auto;
    background-color: transparent;
  }

  .content {
    padding: $modal-padding;
    text-align: left;
  }

  .search-box {
    width: 100%;
    margin-top: 30px;
  }

  .add-member {
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin: $modal-padding;
  }

  // desktop mode
  @media only screen and (min-width: $switch-width) {
    .modal {
      width: 700px;
      height: 300px;
    }
  }
</style>
