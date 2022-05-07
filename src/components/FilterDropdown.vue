<template>
  <div>
    <span class="tracking-wide"><b>Filters</b></span>
    <hr class="h-0.5 bg-gray-200 my-1" />
    <div class="px-2 py-4">
      <div class="flex flex-col">
        <span class="text-sm text-gray-500"><b>Type</b></span>
        <div class="flex items-center justify-between">
          <button
            class="flex items-center text-sm mt-3"
            v-for="(type, i) in cardTypes"
            :key="i"
            @click="selectType(type.val)"
          >
            <div
              class="w-4 h-4 border border-gray-500 mr-2"
              :class="selectedType === type.val ? 'bg-green-400' : ''"
            ></div>
            {{ type.name }}
          </button>
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <span class="text-sm text-gray-500"><b>Cardholder</b></span>
        <select
          class="form-select px-1 py-1.5 text-sm font-normal mt-3 text-gray-700 bg-white border border-solid border-gray-300 rounded focus:border-blue-600 focus:outline-none"
        >
          <option selected disabled>Select Cardholder</option>
          <option value="1">One</option>
        </select>
      </div>
      <div class="flex items-center justify-between mt-12">
        <button
          @click="apply()"
          class="text-sm px-4 py-1 bg-red-500 text-white w-28 rounded-md shadow"
        >
          Apply
        </button>
        <button
          @click="clear()"
          class="text-sm px-4 py-1 bg-white text-gray-700 w-28 rounded-md shadow"
        >
          <b>Clear</b>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardTypes: Array,
  },
  data() {
    return {
      selectedType: null,
    };
  },  
  methods: {
    selectType(val) {
      this.selectedType = val;
    },
  },
};
</script>

<style></style>
