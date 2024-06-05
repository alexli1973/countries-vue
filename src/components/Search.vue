<script lang="ts">

export default  {
  name: 'CountrySearch',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    onSearchValueChange() {
      this.$emit('search-value-change', this.searchValue);
    }
  }
}
</script>

<template>
  <div class="search-wrapper">
    <input v-model="searchValue"  @input="onSearchValueChange" class="search-input" type="text" placeholder="Search" />
  </div>

</template>

<style scoped>

</style>
