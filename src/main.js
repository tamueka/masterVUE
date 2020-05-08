import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

/* FONTAWESOME */
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

/* RUTAS */
import LastArticles from './components/LastArticles.vue'
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina from "./components/Pagina.vue";
import Error404 from "./components/Error404.vue";
import MiComponente from './components/MiComponente.vue';
import Peliculas from "./components/Peliculas.vue";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  { path: "/home", component: LastArticles },
  { path: "/blog", component: Blog },
  { path: "/formulario", component: Formulario },
  { path: "/pagina/:id?", name: "pagina", component: Pagina },
  { path: "/pagina2/", component: MiComponente },
  { path: "/ultimos-articulos", component: LastArticles },
  { path: "/peliculas", component: Peliculas },
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
