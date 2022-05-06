<template>
  <div class="flex text-md flex-col">
    <Header />
    <div class="mt-6">
      <Tabs />
    </div>
    <div class="mt-6">
      <SearchFilter />
    </div>
    <div class="mt-6 flex flex-wrap justify-between">
      <Card v-for="a in arr" :key="a" />
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
      arr: [1, 2, 3, 4, 5],
    };
  },
};
</script>
