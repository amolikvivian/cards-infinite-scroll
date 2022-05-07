<template>
  <div class="flex justify-end items-center">
    <!-- <button class="pr-4"><Icon name="search" /></button> -->
    <button
      class="px-3 py-2 bg-gray-100 text-gray-700 flex items-center text-sm rounded-md"
      @click="toggleFilterMenu()"
    >
      <Icon name="filter" />
      <span class="pl-1">Filter</span>
    </button>
    <div
      v-if="showFilterMenu"
      class="z-999 bg-white border rounded shadow-lg h-80 w-80 absolute mt-96 mr-12 px-4 py-4"
    >
      <FilterDropdown :cardTypes="cardTypes" />
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
  },
};
</script>

<style></style>
