<!-- src/views/Auth.vue -->
<template>
  <section class="max-w-md mx-auto px-4 md:px-0 py-12">
    <div class="card">
      <!-- Boutons OAuth -->
      <div class="grid gap-3">
        <button class="btn btn-ghost w-full" @click="signWithGoogle">
          <span class="mr-2" aria-hidden="true">
            <!-- Google SVG -->
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.3 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.4 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7.3 19-20 0-1.2-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.4 16.2 18.8 12.5 24 12.5c3 0 5.7 1.1 7.8 3l5.7-5.7C34.4 6.1 29.5 4 24 4 16 4 9.1 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 10-1.9 13.6-5.1l-6.3-5.2C29.1 35.5 26.7 36.5 24 36.5c-5.1 0-9.4-3.6-10.8-8.4l-6.7 5.1C9.1 39.7 16 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-3.2 5.2-6 6.4l6.3 5.2C38.6 37.5 44 32.4 44 24c0-1.2-.1-2.3-.4-3.5z"/></svg>
          </span>
          Continuer avec Google
        </button>
        <button class="btn btn-outline w-full" @click="signWithApple">
          <span class="mr-2" aria-hidden="true">
            <!-- Apple SVG -->
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.45 2.2-1.17 3.01-.75.85-1.98 1.5-3.21 1.41-.14-1.12.47-2.29 1.16-3.02.77-.83 2.12-1.45 3.22-1.4zM20.9 17.18c-.55 1.27-1.23 2.53-2.22 3.7-1.03 1.22-2.33 2.73-4.03 2.76-1.7.03-2.15-.9-4-.9-1.86 0-2.36.87-4.05.93-1.69.06-3.01-1.31-4.05-2.53C1.01 19.24 0 16.64 0 14.21c0-2.76 1.51-4.22 3.37-4.22 1.65 0 2.69.93 4.04.93 1.31 0 2.1-.93 4.05-.93 1.05 0 2.16.45 2.95 1.24-.85.99-1.22 1.97-1.2 3.21.02 1.77.86 3.24 2.22 4.1.66.43 1.55.74 2.27.74.18 0 .35-.01.52-.04z"/></svg>
          </span>
          Continuer avec Apple
        </button>
      </div>

      <div class="mt-6 h-px bg-gray-100"></div>

      <!-- Onglets email / mdp (démo locale existante) -->
      <div class="flex gap-4 my-6">
        <button class="btn" :class="mode==='login' ? 'btn-primary' : 'btn-ghost'" @click="mode='login'">Se connecter</button>
        <button class="btn" :class="mode==='register' ? 'btn-primary' : 'btn-ghost'" @click="mode='register'">Créer un compte</button>
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
        <button class="btn btn-primary w-full">
          {{ mode==='login' ? 'Connexion' : 'Créer mon compte' }}
        </button>
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

const redirectAfter = () => {
  const to = route.query.redirect || '/dashboard'
  router.push(to)
}

const signWithGoogle = async () => {
  try { await auth.loginWithGoogle(); redirectAfter() } catch (e) { error.value = e.message }
}
const signWithApple = async () => {
  try { await auth.loginWithApple(); redirectAfter() } catch (e) { error.value = e.message }
}

const submit = () => {
  error.value = ''
  try{
    if(mode.value === 'login'){
      auth.login({ email: email.value, password: password.value })
    }else{
      auth.register({ name: name.value, email: email.value, password: password.value })
    }
    redirectAfter()
  }catch(e){
    error.value = e.message
  }
}
</script>
