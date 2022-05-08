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
      page: 1,
      limit: 4,
      loading: true,
      loadFlag: true,
      checkLimit: false,
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
    tab() {
      if (this.tab === "owned")
        this.$store.dispatch("getOwnerData", this.currentId);

      this.loading = true;
      this.loadFlag = true;
      this.list = [];
      this.page = 1;
    },
    list() {
      this.checkLimit = this.list.length === this.$store.getters.all.length;
    },
  },
  methods: {
    async intersected() {
      if (this.loadFlag && !this.checkLimit) {
        this.loading = true;
        let fetched = [];
        if (this.tab === "all") {
          fetched = await getAllData(this.page, this.limit);
          console.log(fetched);
        } else if (this.tab === "owned") {
          fetched = await getDataByOwnerId(
            this.currentId,
            this.page,
            this.limit
          );
        } else if (this.tab === "blocked") {
          fetched = await getDataByStatus("blocked", this.page, this.limit);
        }
        this.list = [...this.list, ...fetched];
        this.page += 1;
        this.loading = false;
      }
    },
    async search(query) {
      if (query.length === 0) {
        this.loadFlag = true;
        this.page = 2;
        let fetched = [];
        if (this.tab == "owned") {
          fetched = await getDataByOwnerId(this.currentId, 1, this.limit);
        }
        if (this.tab == "all") {
          fetched = await getAllData(1, this.limit);
        }
        this.loading = false;
        this.list = [...fetched];
      } else {
        this.loadFlag = false;
        if (this.tab == "owned") {
          this.list = this.$store.getters.ownerData.filter((card) => {
            return card.name.toLowerCase().includes(query.toLowerCase());
          });
        } else if (this.tab == "all") {
          this.list = this.$store.getters.all.filter((card) => {
            return card.name.toLowerCase().includes(query.toLowerCase());
          });
        }
      }
    },
    async filter({ type, name }) {
      this.loadFlag = false;
      let completeList;
      if (this.tab == "owned")
        completeList = await getDataByOwnerId(this.currentId, null);

      if (this.tab == "all") completeList = this.$store.getters.all;

      if (type != null && name == null) {
        this.list = completeList.filter((card) => {
          return card.card_type === type;
        });
      } else if (type == null && name != null) {
        this.list = completeList.filter((card) => {
          return card.owner_name === name;
        });
      } else {
        this.list = completeList.filter((card) => {
          return card.owner_name === name && card.card_type === type;
        });
      }
    },
    async clear() {
      this.loadFlag = true;
      let fetched = [];
      this.page = 2;
      if (this.tab === "owned")
        fetched = await getDataByOwnerId(this.currentId, 1, this.limit);

      if (this.tab === "all") fetched = await getAllData(1, this.limit);
      this.list = [...fetched];
    },
  },
};
</script>

<style></style>
