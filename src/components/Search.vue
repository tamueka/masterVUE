
<template>
  <div class="general">
    <Slider :texto="`Busqueda: ${searchString}`"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles && articles.length >= 1">Articulos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
        <div v-else>
          <h2>No hay articulos que coincidan con tu busqueda</h2>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Global from "../Global.js";
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Siderbar.vue";
import Articles from "./Articles.vue";

export default {
  name: "Search",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    //console.log(this.searchString);
    this.getArticlesBySearch(this.searchString);
  },
    data() {
    return {
      url: Global.url,
      articles: [],
      searchString: null
    }
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url+"search/"+searchString).then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          //console.log(this.articles);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>