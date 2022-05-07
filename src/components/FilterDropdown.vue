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
          v-model="selectedCardholder"
          class="px-1 py-1.5 text-sm font-normal mt-3 text-gray-700 bg-white border border-solid border-gray-300 rounded focus:border-blue-600 focus:outline-none"
        >
          <option selected :value="null">Select Cardholder</option>
          <option v-for="(name, i) in names" :key="i" :value="name">
            {{ name }}
          </option>
        </select>
      </div>
      <div class="flex items-center justify-between mt-12">
        <button
          @click="apply()"
          :disabled="disabled"
          class="text-sm px-4 py-1 bg-red-500 text-white w-28 rounded-md shadow"
          :class="disabled ? 'opacity-50' : ''"
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
    selected: Object,
  },
  data() {
    return {
      selectedType: this.selected.type,
      selectedCardholder: this.selected.name,
    };
  },
  computed: {
    names() {
      return this.$store.getters.cardholderNames;
    },
    disabled() {
      return this.selectedType == null && this.selectedCardholder == null;
    },
  },  
  methods: {
    selectType(val) {
      if (this.selectedType == val) {
        this.selectedType = null;
      } else {
        this.selectedType = val;
      }
    },
    apply() {
      const filterPayload = {
        type: this.selectedType,
        name: this.selectedCardholder,
      };
      this.$emit("apply", filterPayload);
    },
    clear() {
      this.$emit("cancel");
    },
  },
};
</script>

<style></style>
