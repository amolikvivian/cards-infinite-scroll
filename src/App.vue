<template>
  <div class="md:px-32 px-4 md:py-16 py-12">
    <div class="flex text-md flex-col">
      <Header />
      <div class="mt-6">
        <Tabs />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
export default {
  name: "Home",
  components: {
    Header,
    Tabs,
  },
};
</script>

<style></style>
