<script lang="ts">
import {PropType} from 'vue';
import {ICurrencies} from "@/typings/types";

export default {
  name: 'CountryCurrencies',
  props: {
    currencies: Object as PropType<ICurrencies | null>,
    default: () => null
  },
  computed: {
    currData() {
      if(this.currencies) {
        return Object.values(this.currencies);
      } else return [];
    }
  }

}
</script>

<template>
  <div style="display: contents" v-if="currData.length">
    <div v-for="(cur, index) in currData" :key="index" class="currency-wrapper">
      <span class="currency-name">{{cur.name}}</span>
      <span class="currency-symbol">{{cur.symbol}}</span>
    </div>
  </div>
</template>

<style scoped>
.currency-wrapper {
  display: flex;
  justify-content: space-between;
  .currency-symbol {
    font-weight: 700;
  }
}

</style>
