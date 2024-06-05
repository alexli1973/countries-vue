<script lang="ts">
import { PropType } from "vue";
import {ICountry} from "@/typings/types";
import {getCountries} from "@/services/api";
import Loader from "@/components/Loader.vue";
import CountriesList from "@/components/CountriesList.vue";
import MapLayout from "@/components/MapLayout.vue";
import CountrySearch from "@/components/Search.vue";

export default {
  name: 'MainLayout',
  components: {CountrySearch, MapLayout, CountriesList, Loader},
  data() {
    return {
      countriesList: [] as PropType<ICountry[]>,
      centerLatLng: [-49.25, 69.167],
      searchText: '',
    }
  },
  async mounted() {
    this.countriesList =  await getCountries('all');
  },
  computed: {
    dataExists() {
      return !!this.countriesList?.length;
    },
    filteredData() {
      return this.countriesList.filter((country: ICountry) => {
        return country?.name?.common.toLowerCase().includes(this.searchText?.toLowerCase())
      })
    }
  },
  methods: {
    onSelectCountry(data: []) {
      console.log('onSelectCountry', data);
      this.centerLatLng = data;
    },
    onSearchValueChange(searchValue: string) {
      this.searchText = searchValue;
    }
  }

}
</script>

<template>
  <div v-if="dataExists">
    <country-search @search-value-change="onSearchValueChange"/>
    <div  class="main-container">
      <countries-list :countriesList="filteredData" @select-country="onSelectCountry"/>
      <div>
        <map-layout :center="centerLatLng"/>
      </div>
    </div>
  </div>
  <div v-else>
    <loader/>
  </div>

</template>

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  min-height: max-content;
}

</style>
