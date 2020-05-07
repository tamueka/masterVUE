
<template>
  <div class="general">
    <Slider texto="BLOG"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <div id="articles" v-if="articles">
          <article class="article-item" v-for="article in articles" :key="article._id">
            <div class="image-wrap">
              <img
                v-if="article.image"
                :src="url+'get-image/'+article.image"
                :alt="article.title"
              />
              <img
                v-if="!article.image"
                src="../assets/images/default.jpg"
                :alt="article.title"
              />
            </div>
            <h2>{{ article.title }}</h2>
            <span class="date">{{ article.date }}</span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
          </article>
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

export default {
  name: "Blog",
  components: {
    Sidebar,
    Slider
  },
  data() {
    return {
      url: Global.url,
      articles: []
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get(this.url+"articles").then(res => {
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