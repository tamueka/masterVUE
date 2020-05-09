<template>
  <div class="center">
    <section id="content">
      <article class="article-item article-detail" v-if="article">
        <div class="image-wrap" v-if="article.image">
          <img :src="url + 'get-image/' + article.image" :alt="article.title" />
        </div>
        <h1 class="subheader">{{ article.title }}</h1>
        <span class="date">{{ article.date | moment("from") }}</span>
        <p>{{ article.content }}</p>
        <div class="clearfix"></div>
      </article>
      <Sidebar></Sidebar>
    </section>
  </div>
</template>

<script>
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import axios from "axios";

export default {
  name: "Article",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      article: null
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    }
  }
};
</script>

<style scoped>
</style>