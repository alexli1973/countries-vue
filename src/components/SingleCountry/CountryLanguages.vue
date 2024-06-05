<script lang="ts">
import {ILanguages} from "@/typings/types";
import {PropType} from "vue";

export default {
  name: 'CountryLanguages',
  props: {
    languages: {
      type: Object as PropType<ILanguages | null>, //null - Antarctica etc..
      default: () => null
    },
    fieldClass: {
      type: String,
    }
  },
  computed: {
    langData() {
      return this.languages ? Object.values(this.languages).join(', ') : '';
    }
  }
}

</script>

<template>
  {{langData}}
</template>

<style scoped>
</style>
