
<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>

        <div class="mis-datos" v-if="misDatos">
          <span v-html="misDatos"></span>
        </div>

        <div class="favorita" v-if="favorita">
          La pelicula marcada es:
          <h2>{{favorita.title}}</h2>
        </div>

        <!--Listado peliculas-->
        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula.title">
            <Pelicula 
              :pelicula="pelicula" 
              @favorita="haLlegadoLaPeliculaFavorita">
            </Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula";
import Sidebar from './Siderbar.vue'

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar,
  },
  data() {
    return {
      nombre: 'Samuel',
      apellidos: 'Ruiz',
      sitioWeb: 'tamueka.com',
      favorita: null,
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
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita){
      /* console.log(favorita);
      alert('Se ha ejecutado el evento en el padre'); */
      this.favorita = favorita;
    }
  },
  computed: {
    peliculasMayuscula() {
      let peliculasMod = this.peliculas;
      for(var i = 0; i < this.peliculas.length; i++ ){
          peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos(){
      return `${this.nombre} ${this.apellidos} <br/>
              Sitio web: ${this.sitioWeb}`
    }
  }
};
</script>

<style scoped>
</style>