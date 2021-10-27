<template>
  <div id="dataMap"></div>
</template>

<script>
import Datamap from 'datamaps';

export default {
  name: 'Map',
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
      element: document.getElementById('dataMap'),
      scope: this.scope,
      fills: this.fills,
      data: this.data,
    });
  },
};
</script>

<style scoped>
#dataMap {
  display: block;
  vertical-align: middle;
  margin: 0 auto;
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 5%;
  right: 5%;
}
</style>
