<template>
  <div class="flex justify-between md:items-center items-baseline w-full">
    <div class="flex md:flex-row flex-col items-baseline ">
      <span class="md:text-4xl text-xl"><b>Virtual cards</b></span>
      <button
        class="bg-gray-100 rounded-sm text-blue-600 border-none px-1 py-1 text-xs md:ml-4 flex items-center"
      >
        <Icon name="vid-rec" />
        <span class="pl-1">Learn More</span>
      </button>
    </div>
    <button
      class="border shadow-md rounded-sm px-3 py-1 text-sm flex items-center justify-between"
    >
      <Icon name="plus"/>
      <span class="pl-2">Virtual Card</span>
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
