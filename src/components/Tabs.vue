<template>
  <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500">
    <li v-for="tab in tabs" :key="tab" class="cursor-pointer">
      <span
        @click="selectTab(tab)"
        class="inline-block p-3 w-20 text-gray-700 hover:bg-gray-100"
        :class="this.currentTabIndex == tab.id ? 'active' : 'inactive'"
        >{{ tab.name }}</span
      >
    </li>
  </ul>

  <hr />
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          id: 'owned',
          name: "Your",
        },
        {
          id: 'all',
          name: "All",
        },
        {
          id: 'blocked',
          name: "Blocked",
        },
      ],
    };
  },
  computed: {
    currentTabIndex() {
      return this.$route.params.id;
    },
  },
  methods: {
    selectTab(tab) {
      this.$router.push({ path: `/cards/${tab.id}` });
    },
  },
};
</script>

<style>
.active {
  font-weight: 700;
  border-bottom: 2px solid #ef4444;
}
.inactive {
  border-bottom: 2px solid #f3f4f6;
}
</style>
