
<template>
  <div class="general">
    <Slider texto="BLOG"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Siderbar.vue";

export default {
  name: "Blog",
  components: {
    Sidebar,
    Slider
  },
  data(){
    return{
      articles: []
    }
  },
  mounted(){
    this.getArticles();
  },
  methods: {
    getArticles(){
      axios.get('http://localhost:3900/api/articles/')
            .then(res =>{
              if(res.data.status == 'success'){
                this.articles = res.data.articles;
                console.log(this.articles);
              }
            })
    }
  }
};
</script>

<style scoped>
</style>