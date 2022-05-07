<template>
  <div class="px-4">
    <div class="mt-6">
      <SearchFilter @search="search" @filter="filter" @clear="clear" />
    </div>
    <div class="my-8 flex flex-wrap justify-between">
      <Card v-for="(data, i) in list" :key="i" :card="data" />
    </div>
    <Observer @intersect="intersected" :key="$route.params.id" />
    <div class="flex items-center justify-center min-w-screen">
      <span class="text-lg text-gray-400" v-if="loading"><Loader /></span>
      <span
        class="text-lg text-gray-400"
        v-if="list.length == 0 && loading == false"
        >No Data Found!</span
      >
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import SearchFilter from "@/components/SearchFilter";
import Observer from "@/components/Observer";
import Loader from "@/components/Loader";
import {
  getAllData,
  getDataByOwnerId,
  getDataByStatus,
} from "@/services/api.js";
export default {
  name: "Home",
  components: {
    Card,
    SearchFilter,
    Observer,
    Loader,
  },
  data() {
    return {
      list: [],
      loading: true,
      page: 1,
      loadFlag: true,
    };
  },
  created() {
    this.$store.dispatch("getData");
  },
  computed: {
    currentId() {
      return this.$store.getters.currentId;
    },
    tab() {
      return this.$route.params.id;
    },
  },
  watch: {
    tab: function () {
      this.loading = true;
      this.loadFlag = true;
      this.list = [];
      this.page = 1;
    },
  },
  methods: {
    async intersected() {
      if (this.loadFlag) {
        this.loading = true;
        let append = [];
        if (this.tab === "all") {
          append = await getAllData(this.page);
        } else if (this.tab === "your") {
          append = await getDataByOwnerId(this.currentId, this.page);
        } else if (this.tab === "blocked") {
          append = await getDataByStatus("blocked", this.page);
        }

        this.list = [...this.list, ...append];
        this.page += 1;
        this.loading = false;
      }
    },
    async search(query) {
      if (query.length === 0) {
        this.loadFlag = true;
        const append = await getAllData(1);
        this.list = [...append];
      } else {
        this.loadFlag = false;
        this.list = this.$store.getters.all.filter((card) => {
          return card.name.toLowerCase().includes(query.toLowerCase());
        });
      }
    },
    async filter({ type, name }) {
      this.loadFlag = false;
      if (type != null && name == null) {
        this.list = this.$store.getters.all.filter((card) => {
          return card.card_type === type;
        });
      } else if (type == null && name != null) {
        this.list = this.$store.getters.all.filter((card) => {
          return card.owner_name === name;
        });
      } else {
        this.list = this.$store.getters.all.filter((card) => {
          return card.owner_name === name && card.card_type === type;
        });
      }
    },
    async clear() {
      this.loadFlag = true;
      const append = await getAllData(1);
      this.list = [...append];
    },
  },
};
</script>

<style></style>
