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
          id: 0,
          name: "Your",
        },
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "Blocked",
        },
      ],
      selectedTab: null,
    };
  },
  created() {
    this.selectTab(this.tabs[1])
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab.name;
      this.$emit('select', tab.id)
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
