<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand">
          <strong>VueApp</strong>
        </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active">Formulario</router-link>
          </li>
          <li>
            <router-link to="/peliculas" active-class="active">Peliculas</router-link>
          </li>
          <li>
            <router-link active-class="active"
              :to="{  name: 'pagina', 
                      params: { id: 'soy el valor del parametro' }}"
            >Pagina</router-link>
          </li>
          <li>
            <router-link to="/pagina2" active-class="active">Reactividad</router-link>
          </li>
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>