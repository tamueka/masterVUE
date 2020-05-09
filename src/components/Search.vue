
<template>
  <div class="general">
    <Slider texto="BUSQUEDA"></Slider>
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
  data() {
    return {
      url: Global.url,
      articles: []
    };
  },
  mounted() {
    var searchString = this.$route.params.searchString;
    //console.log(searchString);
    this.getArticlesBySearch(searchString);
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then(res => {
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