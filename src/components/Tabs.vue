<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200"
  >
    <li v-for="tab in tabs" :key="tab" class="cursor-pointer">
      <a
        @click="selectTab(tab)"
        class="inline-block py-3 w-20 text-gray-700 rounded-t-lg hover:bg-gray-50"
        :class="this.selectedTab == tab.name ? 'active' : null"
        >{{ tab.name }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          name: "Your",
        },
        {
          name: "All",
        },
        {
          name: "Blocked",
        },
      ],
      selectedTab: "All",
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab.name;
    },
  },
};
</script>

<style>
.active {
  font-weight: 700;
  border-bottom: 2px solid #ef4444;
}
</style>
