<template>
  <div class="px-4 py-3 border rounded-sm shadow-xl md:w-5/12 w-full mb-10">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <span class="text-2xl tracking-wide"><b>MixMax</b></span>
        <span class="text-sm text-gray-500 mt-1">Rajesh - Sales Singapore</span>
      </div>
      <div class="rounded-full p-2 shadow-md bg-red-100 text-red-500">
        <Icon name="flame" />
      </div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <button
        class="px-2 border rounded-sm border-gray-500 text-tiny tracking-wide text-gray-700"
      >
        <b>BURNER</b>
      </button>
      <span class="text-gray-700 text-xs">
        <b>Expires : 9 June, 2022</b>
      </span>
    </div>

    <div class="flex items-center mt-6">
      <div
        class="bg-red-500 h-2 rounded-l-lg"
        :style="`width: ${spend}%`"
      ></div>
      <div
        class="bg-green-500 h-2 rounded-r-lg"
        :style="`width: ${left}%`"
      ></div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <div class="flex items-center">
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
        <span class="pl-2 text-sm tracking-wide"><b>Spent</b></span>
      </div>
      <div>
        <span class="pl-2 text-sm tracking-wide">0 SGD</span>
      </div>
    </div>

    <div class="flex items-center justify-between mt-2">
      <div class="flex items-center">
        <div class="w-2 h-2 rounded-full bg-green-500"></div>
        <span class="pl-2 text-sm tracking-wide"
          ><b>Available to spend</b></span
        >
      </div>
      <span class="pl-2 text-sm tracking-wide"><b>9 SGD</b></span>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      spend: 10,
      left: 90,
    };
  },
};
</script>

<style></style>
