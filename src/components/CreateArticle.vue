<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear articulo</h1>
        <!-- Formulario -->
        <form class="mid-form" @submit.prevent="save()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="article.title" required/>
            <div v-if="submitted && !$v.article.title.required">
              <span class="alert-danger">* Este campo no puede estar vacio</span>
            </div>
          </div>

          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content" required></textarea>
            <div v-if="submitted && !$v.article.content.required">
              <span class="alert-danger">* Este campo no puede estar vacio</span>
            </div>
          </div>

          <div class="form-group">
            <label for="image">Image</label>
            <input type="file" name="image" />
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  mounted() {
    //console.log(this.article);
  },
  methods: {
    save() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then(res => {
            if (res.data.status == "success") {
              this.$router.push("/blog");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
</style>