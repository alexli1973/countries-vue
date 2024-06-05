<script lang="ts">
import {ICountry} from "@/typings/types";
import {PropType} from "vue";
import CountryFlag from "@/components/SingleCountry/CountryFlag.vue";
import CountryLanguages from "@/components/SingleCountry/CountryLanguages.vue";
import CountryCurrencies from "@/components/SingleCountry/CountryCurrencies.vue";

export default {
  name: "SingleCountry",
  components: {CountryCurrencies, CountryLanguages, CountryFlag},
  props: {
    country: {
      type: {} as PropType<ICountry>,
    }
  },
  computed: {
    getCapitalName() {
      return this.country?.capital?.length ? this.country?.capital[0] : '';
    }
  }
}

</script>

<template>
  <div class="country-line">
    <div class="country-field">
      <country-flag :flag="country?.flags"/>
    </div>
    <div class="country-field name"
         @click="$emit('select-country', country?.latlng)">
      {{country?.name?.common}}
    </div>
    <div class="country-field">{{getCapitalName}}</div>
    <div class="country-field">{{country?.region}}</div>
    <div class="country-field languages">
      <country-languages :languages="country?.languages"/>
    </div>
    <div class="country-field">
      <country-currencies :currencies="country?.currencies" class="country-field"/>
    </div>
  </div>
</template>

<style scoped>
.country-line {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
  column-gap: 10px;
  border-bottom: 1px solid #eaeaea;
  .country-field {
    align-self: center;
    &.name {
      color: #155a97;
      font-weight: 700;
      opacity: 0.8;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    &.languages {
      max-height: 50px;
      overflow: hidden;
    }
  }
}
</style>
