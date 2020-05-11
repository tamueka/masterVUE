import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

/* FONTAWESOME */
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

//VUE MOMENT - MOMENT ESPAÑOL
import moment from 'moment';
import 'moment/locale/es';

/* RUTAS */
import LastArticles from './components/LastArticles.vue'
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina from "./components/Pagina.vue";
import Error404 from "./components/Error404.vue";
import MiComponente from './components/MiComponente.vue';
import Peliculas from "./components/Peliculas.vue";
import Search from "./components/Search.vue";
import Redirect from "./components/Redirect.vue";
import Article from "./components/Article.vue";
import CreateArticle from "./components/CreateArticle.vue";
import EditArticle from "./components/EditArticle.vue";


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(require("vue-moment"), {moment});


const routes = [
  { path: "/home", component: LastArticles },
  { path: "/blog", component: Blog },
  { path: "/articulo/:id", name: "article", component: Article },
  { path: "/editar/:id", name: "edit", component: EditArticle },
  { path: "/crear-articulo", name: "create", component: CreateArticle },
  { path: "/formulario", component: Formulario },
  { path: "/pagina/:id?", name: "pagina", component: Pagina },
  { path: "/pagina2/", component: MiComponente },
  { path: "/ultimos-articulos", component: LastArticles },
  { path: "/peliculas", component: Peliculas },
  { path: "/buscador/:searchString", component: Search },
  { path: "/redirect/:searchString", component: Redirect },
  { path: "/", component: LastArticles },
  { path: "*", component: Error404 },
];

const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
