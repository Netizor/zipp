
<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <router-view class="flex-1" />
    <FooterBar />
  </div>
</template>
<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>
