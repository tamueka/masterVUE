
<template src="./Blog.html">
</template>

<script>
import Global from '../Global.js';
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from './Articles.vue';

export default {
  name: "Blog",
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