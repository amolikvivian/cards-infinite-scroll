<template>
  <div class="flex justify-end items-center">
    <input
      v-if="showSearch"
      type="text"
      ref="searchInput"
      @keyup="getSearchQuery()"
      placeholder="Search by card name"
      v-model="searchQuery"
      class="border-b-2 border-red-500 focus:outline-none mr-4 px-0.5 text-sm"
    />
    <button class="pr-4" @click="toggleSearch()">
      <Icon name="search" />
    </button>
    <button
      class="px-3 py-1 bg-gray-100 text-gray-700 flex items-center text-sm rounded-md mr-1"
      @click="toggleFilterMenu()"
    >
      <Icon name="filter" />
      <span class="pl-1">Filter</span>
    </button>
    <button
      class="px-3 py-1 bg-white text-gray-700 flex items-center text-sm rounded-md"
      @click="cancel(), closeSearch()"
    >
      <Icon name="reset" />
      <span class="pl-1">Reset</span>
    </button>
    <div
      v-if="showFilterMenu"
      class="z-999 bg-white border rounded shadow-lg h-80 w-80 absolute mt-96 mr-12 px-4 py-4"
    >
      <FilterDropdown
        :cardTypes="cardTypes"
        @apply="applyFilter"
        @cancel="cancel"
      />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
import FilterDropdown from "./FilterDropdown";
export default {
  components: { Icon, FilterDropdown },
  data() {
    return {
      showSearch: false,
      searchQuery: null,
      showFilterMenu: false,
      cardTypes: [
        { name: "Burner", val: "burner" },
        { name: "Subscription", val: "subscription" },
      ],
    };
  },
  methods: {
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    closeSearch() {
      this.searchQuery = "";
      this.showSearch = false;
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },
    getSearchQuery() {
      this.$emit("search", this.searchQuery);
    },
    applyFilter(filterPayload) {
      this.$emit("filterData", filterPayload);
      this.showFilterMenu = false;
    },
    cancel() {
      this.$emit("filterData", null);
      this.searchQuery = "";
      this.showFilterMenu = false;
    },
  },
};
</script>

<style></style>
