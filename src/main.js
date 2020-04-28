import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

/* RUTAS */
import LastArticles from './components/LastArticles.vue'
import Blog from "./components/Blog.vue";
import Formulario from "./components/Formulario.vue";
import Pagina from "./components/Pagina.vue";
import Error404 from "./components/Error404.vue";


Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: LastArticles },
  { path: "/blog", component: Blog },
  { path: "/formulario", component: Formulario },
  { path: "/pagina/:id?", name: "pagina", component: Pagina },
  { path: "/ultimos-articulos", component: LastArticles },
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
