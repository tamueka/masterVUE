<template src="./Article.html"></template>

<script>
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import swal from "sweetalert";

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
    },
    deleteArticle(articleId) {
      swal({
        title: "Estas seguro?",
        text: "Una vez eliminado, ¡no podrá recuperar este articulo",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then(res => {
            if (res.data.status == "success") {
              //console.log(res)
              swal(
                "Articulo eliminado",
                "Articulo eliminado correctamente",
                "success"
              );
              this.$router.push("/blog");
            }
          });
        } else {
          swal("¡Tu articulo está a salvo!");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>