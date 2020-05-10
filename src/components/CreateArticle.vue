<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear articulo</h1>
        <!-- Formulario -->
        <form class="mid-form" @submit.prevent="save()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="article.title"/>
          </div>

          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content"></textarea>
          </div>

          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" name="image" />
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Guardar" class="btn btn-success">
        </form>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
/* import axios from 'axios';
 */ import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import Article from "../models/Article";
/* import { required, minLength } from 'vuelidate/lib/validators';
 */
export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, "")
    };
  },
  mounted() {
    console.log(this.article);
  },
  methods: {
      save(){
        console.log(this.article);  
      }
  }
};
</script>

<style scoped>
</style>