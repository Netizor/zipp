
<template>
  <section class="max-w-3xl mx-auto px-4 md:px-0 py-12">
    <div class="card">
      <h2 class="text-2xl font-bold">Devenir « rechargeur »</h2>
      <p class="text-gray-600 mt-2">
        Gagnez de l’argent en récupérant les trottinettes déchargées, en les rechargeant chez vous, puis en les redéposant dans les zones prévues.
      </p>
      <form class="mt-6 grid gap-4" @submit.prevent="submit">
        <div class="grid md:grid-cols-2 gap-4">
          <div><label class="block text-sm font-medium">Nom</label><input v-model="name" class="mt-1 w-full border rounded-xl px-3 py-2" required /></div>
          <div><label class="block text-sm font-medium">Email</label><input type="email" v-model="email" class="mt-1 w-full border rounded-xl px-3 py-2" required /></div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div><label class="block text-sm font-medium">Téléphone</label><input v-model="phone" class="mt-1 w-full border rounded-xl px-3 py-2" /></div>
          <div><label class="block text-sm font-medium">Quartier</label><input v-model="area" class="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Antigone, Port Marianne..." /></div>
        </div>
        <div><label class="block text-sm font-medium">Matériel disponible</label><textarea v-model="gear" class="mt-1 w-full border rounded-xl px-3 py-2" rows="3" placeholder="Ex: 3 chargeurs, coffre de voiture..."></textarea></div>
        <button class="btn btn-primary w-full md:w-auto">Envoyer ma candidature</button>
        <p v-if="sent" class="text-green-600 text-sm">Merci ! Votre candidature a été enregistrée (démo).</p>
      </form>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const name = ref(''); const email = ref(''); const phone = ref(''); const area = ref(''); const gear = ref(''); const sent = ref(false)
const submit = () => {
  const list = JSON.parse(localStorage.getItem('zypp_rechargeurs') || '[]')
  list.push({ id: Date.now(), name: name.value, email: email.value, phone: phone.value, area: area.value, gear: gear.value })
  localStorage.setItem('zypp_rechargeurs', JSON.stringify(list)); sent.value = true
}
</script>
