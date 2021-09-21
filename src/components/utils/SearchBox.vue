<template>
  <div class="search-box">
    <form @submit.prevent="filter">
      <input
        type="text"
        class="search-input"
        autocomplete="off"
        v-model.trim="search"
      />
    </form>

    <div class="dropdown-list" v-show="showDropdown">
      <ul>
        <li v-for="item in highlightedItems(results)" :key="item.id"
            @click="itemClicked(item)">
          {{ item.highlight[0] }}<span class="highlighted-text" >{{ item.highlight[1] }}</span>{{ item.highlight[2] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Autocomplete",

  props: ["items"],

  data() {
    return {
      search: '',
      selectedItem: null,
      results: [],
    };
  },

  methods: {

    filter() {
      // only start searching from at least 3 characters length, as the design looks that way (not clear if it should be 3 or 4)
      // however, that can be a problem with my last name...
      if (this.search.length < 3) {
        this.results = [];
      } else {
        this.results = this.items.filter((it) =>
            `${ it.text }`.toLowerCase().includes(this.search.toLowerCase()) ||
            `${ it.search }`.toLowerCase().includes(this.search.toLowerCase())
            // backticks make sure it's always a string
        );
      }
    },

    itemClicked(item) {
      this.search = item.text;
      this.selectedItem = item;
    },

    // split item texts into an array: ["beginning", "part to highlight", "end"]
    highlightedItems(items) {
      return items.map( it => {
        const startPosition = `${ it.text }`.toLowerCase().indexOf(this.search.toLowerCase());
        const endPosition = startPosition + this.search.length;
        const extendedItem = it;

        if (startPosition === -1)
          extendedItem.highlight = [it.text, "", ""]; // nothing to highlight, the search value must be in an invisible field
        else
          extendedItem.highlight =
            [
              it.text.slice(0, startPosition),
              it.text.slice(startPosition, endPosition),
              it.text.slice(endPosition)
            ];

        return extendedItem;
      });
    },
  },

  computed: {
    showDropdown() {
      // show only if there are results and we did not select anything yet
      return this.results.length > 0 && this.selectedItem === null;
    },
  },

  watch: {
    search() {
      this.filter();

      // if the search text gets changed after selecting something, reset selection
      if (this.selectedItem !== null && this.search !== this.selectedItem.text) {
        this.selectedItem = null;
      }
    },

    selectedItem() {
      this.$emit('item-selected', this.selectedItem ? this.selectedItem.id : null);
    }
  },
};
</script>

<style lang="scss" scoped>
  .search-box {
    position: relative; // for drop-down to take the right width
  }

  .search-input {
    width: calc(100% - 20px);
  }

  .highlighted-text {
    font-weight: bold;
  }

  .dropdown-list {
    position: absolute;
    width: calc(100% - 40px);
    max-height: 300px;
    margin-top: 0px;
    overflow-y: auto;
    background: $color-white;
    border-radius: 8px;
    z-index: 99999;
    color: $color-purple;
    padding: 20px;
  }

  .dropdown-list li {
    margin: 10px;
    cursor: pointer;
  }

  .dropdown-list li:hover {
    margin-left: 15px;
  }
</style>
