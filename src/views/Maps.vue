<template>
  <h3>DataMaps</h3>
  <p>
    The DataMaps library was giving someone an issue so I attempted to implement
    it myself. Nothing to really see here yet other than the map showing up.
  </p>
  <Map
    :fills="{
      HIGH: '#afafaf',
      LOW: '#123456',
      MEDIUM: 'blue',
      UNKNOWN: 'rgb(0,0,0)',
      defaultFill: '#bd5d38',
    }"
    scope="usa"
  />
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
