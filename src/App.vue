<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import "./assets/css/index.scss"
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components:{
    Navbar,
    Footer,
  },
  computed: {
    isHome() {
      return this.$route.name == "Home";
    },
    isNav() {
      return this.$route.name != "ProjectDetail";
    },
  },
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
