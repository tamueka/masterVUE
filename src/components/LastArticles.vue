
<template>
  <div class="general">
    <Slider texto="APP VUE ARTICLES" home="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        <!--Listado articulos-->
        <div id="articles">
          <Articles :articles="articles"></Articles>  
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Global from '../Global.js';
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Siderbar.vue";
import Articles from './Articles.vue';

export default {
  name: "LastArticles",
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
    this.getLastArticles();
  },
  methods: {
    getLastArticles() {
      axios.get(this.url+"articles/true").then(res => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>