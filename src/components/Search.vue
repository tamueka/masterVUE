
<template src="./Search.html">
</template>

<script>
import Global from "../Global.js";
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
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