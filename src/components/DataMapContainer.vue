<template>
  <div id="map-container">
    <div id="data-map"></div>
  </div>
</template>

<script>
import Datamap from "datamaps";

export default {
  name: "Map",
  props: {
    fills: {
      type: Object,
    },
    scope: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
    },
  },
  mounted() {
    new Datamap({
      element: document.getElementById("data-map"),
      scope: this.scope,
      fills: this.fills,
      data: this.data,
    });
  },
};
</script>

<style scoped>
#map-container {
  position: relative;
  height: 500px;
}
#data-map {
  height: 500px;
  display: block;
  vertical-align: middle;
  margin: auto;
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 5%;
  right: 5%;
}
</style>
