<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navigation/Navbar.vue";
import Footer from "./components/Navigation/Footer.vue";
</script>

<template>
   <Navbar />
   
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
