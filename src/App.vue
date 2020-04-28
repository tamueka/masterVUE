<template>
  <div id="app">
    <Header></Header>
    <Slider></Slider>
    <div class="center">
      <router-view></router-view>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';
import Sidebar from './components/Siderbar.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,
    Footer,
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>
