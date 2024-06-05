<script lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LCircleMarker } from "@vue-leaflet/vue-leaflet";

export default {
  name: "MapLayout",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircleMarker
  },
  data() {
    return {
      zoom: 5,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      circle: {
        center: [-49.25, 69.167],
        radius: 6,
        color: 'red'
      },
    };
  },
  props: {
    center: {
      type: Array,
      default: [-49.25, 69.167]
    }
  },
  computed: {
    updatedCircle() {
      this.updateZoom(5);
      return {
        center: this.center,
        radius: 20,
        color: 'red'
      }
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    updateZoom(zoom: number) {
      this.zoom = zoom;
    },
    initMap() {

    }
  }
}

</script>

<template>
  <div class="map-wrapper">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>
      <l-circle-marker
          :lat-lng="updatedCircle.center"
          :radius="updatedCircle.radius"
          :color="updatedCircle.color"
      />
    </l-map>
  </div>
</template>

<style scoped>
.map-wrapper {
  width: 100%;
  height: 100%;
  min-height: 750px;
}
</style>
