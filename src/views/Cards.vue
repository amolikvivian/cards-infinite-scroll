<template>
  <div class="px-4">
    <div class="mt-6">
      <SearchFilter @search="search" @filter="getFilterParams" @clear="clear" />
    </div>
    <div class="my-8 flex flex-wrap justify-between">
      <Card v-for="(data, i) in list" :key="i" :card="data" />
    </div>
    <Observer @intersect="intersected" :key="$route.params.id" />
    <div class="flex items-center justify-center min-w-screen">
      <span class="text-lg text-gray-400" v-if="loading"><Loader /></span>
      <span
        class="text-lg text-gray-400"
        v-if="list.length === 0 && loading === false"
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
  getDataByOwnerId,
  getDataByStatus,
  getDataByName,
} from "@/services/devapi.js";
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
      all: [],
      list: [],
      page: 1,
      limit: 4,
      total: null,
      loading: true,
      loadFlag: true,
      filterFlag: false,
      type: null,
      name: null,
    };
  },

  created() {
    this.$store.dispatch("getNames");
  },

  computed: {
    currentId() {
      return this.$store.getters.currentId;
    },
    tab() {
      return this.$route.params.id;
    },
    limitFlag() {
      return this.list.length === this.total;
    },
  },
  watch: {
    tab() {
      this.loading = true;
      this.loadFlag = true;
      this.list = [];
      this.page = 1;
    },
  },
  methods: {
    async intersected() {
      if (this.loadFlag && !this.limitFlag) {
        this.loading = true;
        let fetched;
        if (this.tab === "all") {
          fetched = await getDataByStatus("active", this.page, this.limit);
        } else if (this.tab === "owned") {
          fetched = await getDataByOwnerId(
            this.currentId,
            this.page,
            this.limit
          );
        } else if (this.tab === "blocked") {
          fetched = await getDataByStatus("blocked", this.page, this.limit);
        }
        console.log(fetched.data);
        this.list = [...this.list, ...fetched.data];
        if (this.filterFlag) this.filter(this.type, this.name, this.list);

        this.total = fetched.total;
        this.page += 1;
        this.loading = false;
      }
    },
    async search(query) {
      if (query.length === 0) {
        this.loadFlag = true;
        await this.reset();
      } else {
        this.loadFlag = false;
        const res = await getDataByName(query);
        this.list = res.data;
      }
    },

    getFilterParams({ type, name }) {
      this.type = type;
      this.name = name;
      this.filter(type, name, this.list);
    },
    filter(type, name, some) {
      this.filterFlag = true;
      if (type != null && name == null) {
        this.list = some.filter((card) => {
          return card.card_type === type;
        });
      } else if (type == null && name != null) {
        this.list = some.filter((card) => {
          return card.owner_name === name;
        });
      } else if (type != null && name != null) {
        this.list = some.filter((card) => {
          return card.owner_name === name && card.card_type === type;
        });
      }
    },
    async clear() {
      this.filterFlag = false;
      this.loadFlag = true;
      await this.reset();
    },
    async reset() {
      this.list = [];
      this.page = 1;
    },
  },
};
</script>

<style></style>
