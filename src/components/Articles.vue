<template>
  <div id="article-list">
    <article class="article-item" v-for="article in articles" :key="article._id">
      <div class="image-wrap">
        <img v-if="article.image" :src="url+'get-image/'+article.image" :alt="article.title" />
        <img v-if="!article.image" src="../assets/images/default.jpg" :alt="article.title" />
      </div>
      <h2>{{ article.title }}</h2>
      <span class="date">{{ article.date }}</span>
      <a href="#">Leer más</a>

      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
import Global from '../Global';

export default {
  name: "Articles",
  props: ["articles"],
  data(){
      return {
         url: Global.url, 
      }
  }
};
</script>

<style scoped>
</style>