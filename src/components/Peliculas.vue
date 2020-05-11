
<template src="./Peliculas.html">
</template>

<script>
import Pelicula from "./Pelicula";
import Sidebar from './Sidebar.vue'

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
            "https://images-na.ssl-images-amazon.com/images/I/911RR0tzL2L._SY445_.jpg"
        },
        {
          title: "Gran Torino",
          year: 2015,
          image: "https://images-na.ssl-images-amazon.com/images/I/81TlD6oh2BL._SY445_.jpg"
        },
        {
          title: "El señor de los anillos",
          year: 2009,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/8112Bc4LpuL._SX342_.jpg"
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
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message) {
      return value + ' ' + new Date().getFullYear() + ' ' + message;
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