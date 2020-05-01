<template>
  <div>
    <article class="article-item">
        <h2>{{ pelicula.title }}</h2>
      <div class="image-wrap">
        <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
      </div>
      <span
        class="date"
        :class="{
            yeargreen : pelicula.year >= 2015,
            yearred: pelicula.year < 2015
        }"
      >{{ pelicula.year }}</span>
      <a href="#">Leer más</a>

      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Pelicula",
  props: ['pelicula'],
};
</script>

<style scoped>

</style>