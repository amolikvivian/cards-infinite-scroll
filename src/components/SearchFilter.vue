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
      class="ml-2 py-1 bg-white text-gray-700 flex items-center text-sm rounded-md"
      @click="closeSearch(), cancelFilter()"
    >
      <span class="pl-1">Reset</span>
    </button>
    <div
      v-if="showFilterMenu"
      class="z-10 bg-white border rounded shadow-lg h-80 w-80 absolute mt-96 mr-12 px-4 py-4"
    >
      <FilterDropdown
        :cardTypes="cardTypes"
        :selected="selected"
        @apply="applyFilter"
        @cancel="cancelFilter"
      />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import FilterDropdown from "@/components/FilterDropdown";
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
      selected: {
        type: null,
        name: null,
      },
    };
  },
  watch: {
    "$route.params.id": function () {
      this.selected = { type: null, name: null };
    },
  },
  methods: {
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    closeSearch() {
      this.searchQuery = null;
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
      this.selected = filterPayload;
      this.showFilterMenu = false;
      this.$emit("filterData", filterPayload);
    },
    cancelFilter() {
      this.selected = { type: null, name: null };
      this.showFilterMenu = false;
      this.searchQuery = null;
      this.$emit("filterData", null);
    },
  },
};
</script>

<style></style>
