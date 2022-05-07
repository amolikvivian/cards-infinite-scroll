<template>
  <div class="px-4">
    <div class="mt-6">
      <SearchFilter @search="search" @filterData="filterData" />
    </div>
    <div class="mt-8 flex flex-wrap justify-between">
      <Card v-for="(data, i) in list" :key="i" :card="data" />
    </div>
    <Observer @intersected="fetchData" />
    <div class="flex items-center justify-center min-w-screen">
      <span class="text-lg text-gray-400" v-if="loading"><Loader /></span>
      <span class="text-lg text-gray-400" v-if="list.length == 0 && !loading"
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
  getDataByName,
  getDataByType,
  getDataByTypeName,
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
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    currentID() {
      return this.$store.getters.currentID;
    },
  },
  watch: {
    "$route.params.id": function () {
      this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      let id = this.$route.params.id;
      this.list = [];
      this.loading = true;
      if (id == "your") {
        await this.$store.dispatch("getOwnerData", this.currentID);
        this.list = this.$store.getters.ownerData;
        this.loading = false;
      } else if (id == "all") {
        await this.$store.dispatch("getData");
        this.list = this.$store.getters.all;
        this.loading = false;
      } else if (id == "blocked") {
        await this.$store.dispatch("getBlockedData");
        this.list = this.$store.getters.blockedData;
        this.loading = false;
      }
    },
    search(query) {
      if (query == null || query.length == 0) {
        this.fetchData();
      } else {
        this.list = this.all.filter((ele) => {
          return ele.name.toLowerCase().includes(query.toLowerCase());
        });
      }
    },
    async filterData(filterPayload) {
      this.list = [];
      this.loading = true;
      if (filterPayload == null) {
        this.list = this.$store.getters.all;
        this.loading = false;
      } else {
        const { type, name } = filterPayload;
        if (type == null && name != null) {
          this.list = await getDataByName(name);
          this.loading = false;
        } else if (filterPayload.type != null && filterPayload.name == null) {
          this.list = await getDataByType(type);
          this.loading = false;
        } else if (filterPayload != null && filterPayload.name != null) {
          this.list = await getDataByTypeName(type, name);
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style></style>
