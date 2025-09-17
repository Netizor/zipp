
<template>
  <section class="max-w-md mx-auto px-4 md:px-0 py-12">
    <div class="card">
      <div class="flex gap-4 mb-6">
        <button class="btn" :class="mode==='login' ? 'btn-primary' : 'border border-gray-300'" @click="mode='login'">Se connecter</button>
        <button class="btn" :class="mode==='register' ? 'btn-primary' : 'border border-gray-300'" @click="mode='register'">Créer un compte</button>
      </div>
      <form @submit.prevent="submit">
        <div v-if="mode==='register'" class="mb-4">
          <label class="block text-sm font-medium">Nom</label>
          <input v-model="name" class="mt-1 w-full border rounded-xl px-3 py-2" required placeholder="Votre nom" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium">Email</label>
          <input type="email" v-model="email" class="mt-1 w-full border rounded-xl px-3 py-2" required placeholder="you@example.com" />
        </div>
        <div class="mb-2">
          <label class="block text-sm font-medium">Mot de passe</label>
          <input type="password" v-model="password" class="mt-1 w-full border rounded-xl px-3 py-2" required />
        </div>
        <p v-if="error" class="text-red-600 text-sm mb-3">{{ error }}</p>
        <button class="btn btn-primary w-full">{{ mode==='login' ? 'Connexion' : 'Créer mon compte' }}</button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter, useRoute } from 'vue-router'
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const mode = ref('login')
const email = ref('')
const password = ref('')
const name = ref('')
const error = ref('')
const submit = () => {
  error.value = ''
  try{
    if(mode.value === 'login'){ auth.login({ email: email.value, password: password.value }) }
    else { auth.register({ name: name.value, email: email.value, password: password.value }) }
    const to = route.query.redirect || '/dashboard'
    router.push(to)
  }catch(e){ error.value = e.message }
}
</script>
