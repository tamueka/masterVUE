<template>
  <div id="app">
    <Header></Header>
    <!-- LAST ARTICLES -->
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>
