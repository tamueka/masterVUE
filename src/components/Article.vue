<template src="./Article.html">

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