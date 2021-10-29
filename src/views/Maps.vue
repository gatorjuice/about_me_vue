<template>
  <div class="container">
    <Map
      :fills="{
        HIGH: '#afafaf',
        LOW: '#123456',
        MEDIUM: 'blue',
        UNKNOWN: 'rgb(0,0,0)',
        defaultFill: 'green',
      }"
      scope="usa"
    />
  </div>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  name: "Movies",
  components: {
    Map,
  },
};
</script>
<style scoped></style>
