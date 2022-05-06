<template>
  <div class="flex justify-end items-center">
    <button class="pr-4"><Icon name="search" /></button>
    <button class="px-3 py-2 bg-gray-100 text-gray-700 flex items-center text-sm rounded-md">
      <Icon name="filter" />
      <span class="pl-1">Filter</span>
    </button>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  components: { Icon },
};
</script>

<style></style>
