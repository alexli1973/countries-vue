<script lang="ts">
import { PropType } from "vue";
import {ICountry} from "@/typings/types";
import Loader from "@/components/Loader.vue";
import SingleCountry from "@/components/SingleCountry/SingleCountry.vue";
import CountrySearch from "@/components/Search.vue";

export default {
  name: "CountriesList",
  components: {CountrySearch, SingleCountry, Loader},
  props: {
    countriesList: {
      type: Array as PropType<ICountry[]>,
      //default: () => []
    }
  },
  methods: {
    onSelectCountry(data: []) {
     this.$emit("select-country", data);
    }
  }
}
</script>

<template>
  <div class="list-wrapper">
    <div class="list-header">
      <span>Flag</span>
      <span>Country</span>
      <span>Capital</span>
      <span>Region</span>
      <span>Languages</span>
      <span>Currencies</span>
    </div>
    <div class="list-body">
      <single-country v-for="country in countriesList" :key="country.cc3" :country="country" @select-country="onSelectCountry"/>
    </div>
  </div>
</template>

<style scoped>
.list-header {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  background: #eaeaea;
  border: 1px solid #eaeaea;
  padding: 10px;
  font-weight: 700;
  color: #3A526E;
}
.list-body {
  padding: 10px;
  max-height: 700px;
  overflow-y: scroll;
  font-size: 13px;
}

</style>
