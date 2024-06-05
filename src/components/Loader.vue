<script lang="ts">
export default {
  name: 'Loader',
  data() {
    return {
    }
  }
}

</script>

<template>
  <div class="loader-wrapper">
    <img src="@/assets/logo.svg" class="loader"/>
  </div>
</template>

<style scoped>
.loader-wrapper {
  width: 300px;
  margin: 0 auto;
  display: flex;
}
</style>
