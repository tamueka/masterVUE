
<template>
  <section id="content">
    <h2 class="subheader">Peliculas</h2>
    <!--Listado peliculas-->
    <div id="articles">
      <article class="article-item" v-for="pelicula in peliculas" :key="pelicula.title">
        <div class="image-wrap">
          <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
        </div>
        <h2>{{ pelicula.title }}</h2>
        <span class="date">{{ pelicula.year }}</span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Peliculas",
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