
<template>
  <section class="max-w-6xl mx-auto px-4 md:px-6 py-12">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold">Mon espace</h2>
      <button class="btn border border-gray-300" @click="logout">Se déconnecter</button>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="card md:col-span-2">
        <h3 class="font-semibold text-lg">Historique de mes locations</h3>
        <table class="w-full mt-4 text-sm">
          <thead class="text-left text-gray-500">
            <tr><th class="py-2">Départ</th><th>Arrivée</th><th>Durée</th><th>Prix</th></tr>
          </thead>
          <tbody>
            <tr v-for="r in rentals.history" :key="r.id" class="border-t">
              <td class="py-2">{{ r.start }}</td>
              <td>{{ r.end }}</td>
              <td>{{ r.minutes }} min</td>
              <td>{{ r.price.toFixed(2) }} €</td>
            </tr>
            <tr v-if="!rentals.history.length">
              <td colspan="4" class="py-4 text-gray-500">Aucune course enregistrée pour le moment.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <h3 class="font-semibold text-lg">Ajouter une course (démo)</h3>
        <form class="mt-3 grid gap-3 text-sm" @submit.prevent="add">
          <input v-model="start" class="border rounded-xl px-3 py-2" placeholder="Point de départ"/>
          <input v-model="end" class="border rounded-xl px-3 py-2" placeholder="Point d'arrivée"/>
          <input v-model.number="minutes" type="number" class="border rounded-xl px-3 py-2" placeholder="Durée (min)"/>
          <input v-model.number="price" type="number" step="0.01" class="border rounded-xl px-3 py-2" placeholder="Prix (€)"/>
          <button class="btn btn-primary">Enregistrer</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRentalStore } from '../stores/rentals'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const rentals = useRentalStore()
const router = useRouter()
const start = ref('')
const end = ref('')
const minutes = ref(null)
const price = ref(null)
onMounted(()=> rentals.seedDemo())
const logout = () => { auth.logout(); router.push('/') }
const add = () => {
  if(!start.value || !end.value || !minutes.value || !price.value) return
  rentals.addRide({ start: start.value, end: end.value, minutes: minutes.value, price: price.value })
  start.value = end.value = ''; minutes.value = price.value = null
}
</script>
