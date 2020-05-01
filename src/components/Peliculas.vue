
<template>
  <section id="content">
    <h2 class="subheader">Peliculas</h2>
    <!--Listado peliculas-->
    <div id="articles">
      <div v-for="pelicula in peliculas" :key="pelicula.title">
        <Pelicula :pelicula="pelicula"></Pelicula>
      </div>
    </div>
  </section>
</template>

<script>
import Pelicula from "./Pelicula";

export default {
  name: "Peliculas",
  components: {
    Pelicula
  },
  data() {
    return {
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://pics.filmaffinity.com/batman_v_superman_dawn_of_justice-728293826-large.jpg"
        },
        {
          title: "Gran Torino",
          year: 2015,
          image: "https://pics.filmaffinity.com/gran_torino-278262332-large.jpg"
        },
        {
          title: "El señor de los anillos",
          year: 2009,
          image:
            "https://pics.filmaffinity.com/the_lord_of_the_rings_the_fellowship_of_the_ring-952398002-large.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>