
<template>
  <header class="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 z-50">
    <nav class="section flex items-center justify-between h-16">
      <router-link to="/" class="flex items-center gap-3">
        <img src="/src/assets/logo.png" alt="Zypp" class="h-8 w-auto"/>
      </router-link>
      <div class="hidden md:flex items-center gap-6">
        <router-link class="hover:text-brand" to="/fonctionnement">Fonctionnement</router-link>
        <router-link class="hover:text-brand" to="/rechargeur">Rechargeurs</router-link>
        <a class="hover:text-brand" href="/tarifs">Tarifs</a>
        <a class="hover:text-brand" href="#download">App</a>
        <router-link class="btn btn-primary" :to="user ? '/dashboard' : '/auth'">
          {{ user ? 'Mon espace' : 'Se connecter' }}
        </router-link>
      </div>
      <button @click="open = !open" class="md:hidden p-2" aria-label="Menu"><span>☰</span></button>
    </nav>
    <div v-if="open" class="md:hidden border-t border-gray-100">
      <div class="p-4 grid gap-3">
        <router-link @click="open=false" to="/fonctionnement">Fonctionnement</router-link>
        <router-link @click="open=false" to="/rechargeur">Rechargeurs</router-link>
        <a @click="open=false" href="/tarifs">Tarifs</a>
        <a @click="open=false" href="#download">App</a>
        <router-link @click="open=false" class="btn btn-primary" :to="user ? '/dashboard' : '/auth'">
          {{ user ? 'Mon espace' : 'Se connecter' }}
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'
const { user } = storeToRefs(useAuthStore())
const open = ref(false)
</script>
