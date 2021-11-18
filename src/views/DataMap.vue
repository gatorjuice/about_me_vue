<template>
  <h3>DataMaps</h3>
  <p>
    The DataMaps library was giving someone an issue so I attempted to implement
    it myself. Nothing to really see here yet other than the map showing up.
  </p>
  <DataMapContainer
    :key="dataMapKey"
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
import { v4 as uuidv4 } from "uuid";
import DataMapContainer from "@/components/DataMapContainer.vue";

export default {
  name: "Movies",
  components: {
    DataMapContainer,
  },
  computed: {
    // This should force a new key to be made for the map, causing refresh.
    dataMapKey() {
      return uuidv4();
    },
  },
};
</script>
<style scoped></style>
