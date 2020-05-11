<template src="./CreateArticle.html"></template>

<script>
import axios from "axios";
import Global from "../Global";
import Sidebar from "./Sidebar.vue";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      file: "",
      article: new Article("", "", null, ""),
      submitted: false,
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  mounted() {
    //console.log(this.article);
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then(res => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submitted = true;
      var articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleId, this.article)
          .then(response => {
            if (response.data.status == "success") {
              /* Subida de archivo */
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.filename);
                //console.log(formData);
                var articleId = response.data.article._id;

                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then(response => {
                    //console.log(response);
                    if (response.data.article) {
                      swal(
                        "Articulo editado",
                        "El articulo se ha editado correctamente",
                        "success"
                      );
                      this.article = response.data.article;
                      /* Redireccionamos al blog */
                      this.$router.push("/articulo/"+this.article._id);
                    } else {
                      swal(
                        "Articulo no se ha editado",
                        "El articulo no se ha editado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else {
                swal(
                  "Articulo editado",
                  "El articulo se ha editado correctamente",
                  "success"
                );
                this.article = response.data.article;
                /* Redireccionamos al blog */
                this.$router.push("/articulo/"+this.article._id);
              }
            }
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style scoped>
</style>