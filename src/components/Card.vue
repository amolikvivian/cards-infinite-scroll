<template>
  <div class="px-4 py-3 border rounded-sm shadow-xl md:w-5/12 w-full mb-10">
    <div class="flex items-center justify-between">
      <div class="flex flex-col">
        <span class="text-2xl tracking-wide"
          ><b>{{ card.name }}</b></span
        >
        <span class="text-sm text-gray-500 mt-1"
          >{{ card.owner_name }} - {{ card.budget_name }}</span
        >
      </div>
      <div class="rounded-full p-2 shadow-md bg-red-100 text-red-500">
        <Icon :name="card.card_type" />
      </div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <button
        class="px-2 border rounded-sm border-gray-500 text-xs tracking-wide text-gray-700"
      >
        <b>{{ capitalize(card.card_type) }}</b>
      </button>
      <span v-if="card.card_type == 'burner'" class="text-gray-700 text-sm">
        <b>Expires : {{ card.expiry }}</b>
      </span>
      <span
        v-if="card.card_type == 'subscription'"
        class="text-gray-700 text-sm"
      >
        Limit : {{ card.limit }} {{ card.spent.currency }}
      </span>
    </div>

    <div class="flex items-center mt-6">
      <div
        class="bg-red-500 h-2"
        :class="availablePercentage == 0 ? 'rounded-lg' : 'rounded-l-lg'"
        :style="`width: ${spentPercentage}%`"
      ></div>
      <div
        class="bg-green-500 h-2"
        :class="spentPercentage == 0 ? 'rounded-lg' : 'rounded-r-lg'"
        :style="`width: ${availablePercentage}%`"
      ></div>
    </div>

    <div class="flex items-center justify-between mt-5">
      <div class="flex items-center">
        <div class="w-2 h-2 rounded-full bg-red-500"></div>
        <span class="pl-2 text-sm tracking-wide"><b>Spent</b></span>
      </div>
      <div>
        <span class="pl-2 text-sm tracking-wide"
          >{{ card.spent.value }} {{ card.spent.currency }}</span
        >
      </div>
    </div>

    <div class="flex items-center justify-between mt-2">
      <div class="flex items-center">
        <div class="w-2 h-2 rounded-full bg-green-500"></div>
        <span class="pl-2 text-sm tracking-wide"
          ><b>Available to spend</b></span
        >
      </div>
      <span class="pl-2 text-sm tracking-wide"
        ><b
          >{{ card.available_to_spend.value }}
          {{ card.available_to_spend.currency }}</b
        ></span
      >
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { capitalize } from "@/helper.js";
export default {
  props: {
    card: Object,
  },
  components: {
    Icon,
  },
  data() {
    return {
      capitalize,
    };
  },
  computed: {
    totalValue() {
      return this.card.spent.value + this.card.available_to_spend.value;
    },
    spentPercentage() {
      return (this.card.spent.value / this.totalValue) * 100;
    },
    availablePercentage() {
      return (this.card.available_to_spend.value / this.totalValue) * 100;
    },
  },
};
</script>

<style></style>
