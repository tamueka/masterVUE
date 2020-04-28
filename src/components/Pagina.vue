<template>
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">Actualizar Nombre</button>
    <button @click="redirigirAlBlog()">Redirigir</button>
    <h4>{{ nombre }}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  created(){
    console.log('Componente creado !!');
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
      console.log('Componente montado !!');
  },
  updated(){
      console.log('Componente actualizado !!');
  },
  destroyed(){
    console.log('Componente eliminado !!');
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
      this.$router.push('/blog');
    }
  }
};
</script>

<style scoped>
</style>