<template src="./Pelicula.html">
</template>

<script>
export default {
  name: "Pelicula",
  props: ['pelicula'],
  methods: {
    pasarFavoritaAlPadre(pelicula){
      this.$emit('favorita', pelicula);
    }
  }
};
</script>

<style scoped>

</style>