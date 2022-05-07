<template>
  <div class="flex text-md flex-col">
    <Header />
    <div class="mt-6">
      <Tabs @select="selectTab" />
    </div>
    <div class="mt-6">
      <SearchFilter @search="search" @filterData="filterData" />
    </div>
    <div class="mt-10 flex flex-wrap justify-between">
      <Card v-for="(data, i) in list" :key="i" :card="data" />
    </div>
    <div
      class="flex items-center justify-center min-w-screen"
      v-if="list.length == 0"
    >
      <span class="text-2xl">No Data Found!</span>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import SearchFilter from "@/components/SearchFilter";
import Card from "@/components/Card";
export default {
  name: "Home",
  components: {
    Header,
    Tabs,
    SearchFilter,
    Card,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getData();
  },
  computed: {
    currentID() {
      return this.$store.getters.currentID;
    },
    all() {
      return this.$store.getters.data;
    }
  },
  methods: {
    getData() {
      this.list = this.$store.getters.data;
    },
    search(query) {
      if (query == null || query.length == 0) {
        this.getData();
      } else {
        this.list = this.all.filter((ele) => {
          return ele.name.toLowerCase().includes(query.toLowerCase());
        });
      }
    },
    filterData(filterPayload) {
      if (filterPayload == null) {
        this.getData();
      } else if (filterPayload.type == null && filterPayload.name != null) {
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
    selectTab(id) {
      if (id === 0) {
        this.list = this.all.filter((ele) => {
          return ele.owner_id === this.currentID && ele.status === "active";
        });
      } else if (id === 1) {
        this.getData();
      } else if (id === 2) {
        this.list = this.all.filter((ele) => {
          return ele.status === "blocked";
        });
      }
    },
  },
};
</script>
