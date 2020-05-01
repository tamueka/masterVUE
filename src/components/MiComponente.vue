<template>
  <section id="content">
    <h2 class="subheader">REACTIVIDAD</h2>
    <div>
      <hr />
      <h1>Este es mi componente</h1>
      <h2>{{ subtitulo }}</h2>
      <hr />

      <h2>Reactividad (V-MODEL)</h2>
      <input type="text" v-model="nombre" />
      Mi nombre es:
      <strong>{{ nombre }}</strong>
      <pre>
        {{ $data }}
      </pre>
      <hr />

      <h2>Directivas condicionales (V-IF, V-ELSE, V-ELSE-IF)</h2>
      <input type="number" v-model="edad" />
      Mi edad es:
      <strong>{{ edad }}</strong>
      <p class="alert-success" v-if="edad && edad >= 18 && edad < 65">!!! Eres mayor de edad !!!</p>
      <p class="alert-warning" v-else-if="edad && edad >= 65">!!! Eres de avanzada edad !!!</p>
      <p class="alert-danger" v-else>!!! Eres menor de edad !!!</p>
      <pre>
        {{ $data }}
      </pre>
      <hr>

      <h2>Directiva iterativa (V-FOR)</h2>
      <ol>
        <li v-for="pelicula in peliculas" :key="pelicula">
          {{ pelicula }}
        </li>
      </ol>



    </div>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 0,
      peliculas: ['Batman vs Superman', 'El señor de los anillos', 'Spiderman' ]
    };
  }
};
</script>

<style scoped>
</style>