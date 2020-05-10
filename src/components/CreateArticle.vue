<template>
  <div class="general">
    <Slider texto="BLOG"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear articulo</h1>
        <!-- Formulario -->
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
/* import axios from 'axios';
 */import Global from '../Global';
import Slider from './Slider.vue';
import Sidebar from './Sidebar.vue';
import Article from '../models/Article';
/* import { required, minLength } from 'vuelidate/lib/validators';
 */
export default {
  name: "CreateArticle",
  components: {
      Slider,
      Sidebar,
  },
  data() {
      return {
          url: Global.url,
          article: new Article('', '', null, '')
      }
  },
  mounted() {
      console.log(this.article)
  }

};
</script>

<style scoped>
</style>