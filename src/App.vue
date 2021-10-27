<template>
  <NavBar />
  <RouterView />
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
