<template>
  <section id="content">
    <h2 class="subheader">Últimos artículos</h2>
    <div>
      <hr />
      <h1>Este es mi componente</h1>
      <h2>{{ subtitulo }}</h2>
      <hr />
    </div>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente"
    };
  }
};
</script>

<style scoped>
</style>