
<template src="./LastArticles.html">
</template>

<script>
import Global from '../Global.js';
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
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