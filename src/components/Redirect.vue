<template>
  <h1>Redirigiendo...</h1>
</template>

<script>
export default {
  name: "Redirect",
  mounted() {
    var searchString = this.$route.params.searchString;
    //console.log(searchString)
    this.$router.push(`/buscador/${searchString}`);
  }
};
</script>

<style scoped>
</style>