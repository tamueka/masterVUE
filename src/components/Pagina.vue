<template src="./Pagina.html">
</template>

<script>
import Slider from './Slider.vue';
import Sidebar from './Sidebar.vue'

export default {
  name: "Pagina",
  components:{
    Slider,
    Sidebar,
  },
  created() {
    console.log("Componente creado !!");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado !!");
  },
  updated() {
    console.log("Componente actualizado !!");
  },
  destroyed() {
    console.log("Componente eliminado !!");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Samuel Ruiz"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "SAMUEL RUIZ";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      this.$router.push("/blog");
    }
  }
};
</script>

<style scoped>
</style>