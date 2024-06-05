<script lang="ts">

import {PropType} from "vue";
import {IFlags} from "@/typings/types";

export default {
  name: 'CountryFlag',
  props: {
    flag: {
      type: Object as PropType<IFlags>,
      default: () => null
    }
  },
  computed: {
    imgUrl() {
      return this.flag ? this.flag?.svg : '';
    },
    imgAlt() {
      return this.flag ? this.flag?.alt : '';
    }
  }

}
</script>

<template>
  <img :src=imgUrl :alt="imgAlt" class="flag"/>
</template>

<style scoped>
.flag {
  width: 30px;
}

</style>
