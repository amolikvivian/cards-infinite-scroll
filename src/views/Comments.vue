<template>
  <div>
    <ul>
      <li class="list-item" v-for="item in items" :key="item.id">
        {{ item.name }}

      </li>
    </ul>
    <Observer @intersect="intersected" />
    <div v-if="loading" class="text-blue-500">Loading</div>
  </div>
</template>

<script>
import Observer from "@/components/Observer";

export default {
  components: {
    Observer,
  },
  data() {
    return {
      page: 1,
      items: [],
      loading: true,
    };
  },
  methods: {
    async intersected() {
      this.loading = true;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${this.page}&_limit=50`
      );

      this.page++;
      const items = await res.json();
      this.items = [...this.items, ...items];
      this.loading = false;
    },
  },
};
</script>
