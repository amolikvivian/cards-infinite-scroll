<template>
  <div>
    <div class="mt-6">
      <SearchFilter @search="search" @filterData="filterData" />
    </div>
    <div class="mt-10 flex flex-wrap justify-between px-6">
      <Card v-for="(data, i) in list" :key="i" :card="data"/>
    </div>
    <div
      class="flex items-center justify-center min-w-screen"
      v-if="list.length == 0"
    >
      <span class="text-xl">No Data Found!</span>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import SearchFilter from "@/components/SearchFilter";
export default {
  name: "Home",
  components: {
    Card,
    SearchFilter,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    currentID() {
      return this.$store.getters.currentID;
    },
    all() {
      return this.$store.getters.data;
    },
  },
  watch: {
    "$route.params.id": function () {
      this.fetchData();
    },
  },
  methods: {
    fetchData() {
      let id = this.$route.params.id;
      if (id == 0) {
        this.list = this.all.filter((ele) => {
          return ele.owner_id === this.currentID && ele.status === "active";
        });
      } else if (id == 1) {
        this.list = this.all;
      } else if (id == 2) {
        this.list = this.all.filter((ele) => {
          return ele.status === "blocked";
        });
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
    filterData(filterPayload) {
      this.fetchData();
      if(filterPayload == null) {
        this.fetchData();
      }
      else if (filterPayload.type == null && filterPayload.name != null) {
        this.list = this.list.filter((ele) => {
          return ele.owner_name === filterPayload.name;
        });
      } else if (filterPayload.type != null && filterPayload.name == null) {
        this.list = this.list.filter((ele) => {
          return ele.card_type === filterPayload.type;
        });
      } else if (filterPayload != null && filterPayload.name != null) {
        this.list = this.list
          .filter((ele) => {
            return ele.card_type === filterPayload.type;
          })
          .filter((e) => {
            return e.owner_name == filterPayload.name;
          });
      }
    },
  },
};
</script>

<style></style>
