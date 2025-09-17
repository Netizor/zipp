
<template>
  <section class="section py-12">
    <h1 class="text-3xl md:text-4xl font-bold">Support</h1>
    <p class="lead mt-2">Nous répondons sous 24–48h (démo).</p>
    <form class="card mt-6 grid gap-4 max-w-2xl" @submit.prevent="send">
      <div class="grid md:grid-cols-2 gap-4">
        <div><label class="block text-sm font-medium">Nom</label><input v-model="name" class="mt-1 w-full border rounded-xl px-3 py-2" required /></div>
        <div><label class="block text-sm font-medium">Email</label><input v-model="email" type="email" class="mt-1 w-full border rounded-xl px-3 py-2" required /></div>
      </div>
      <div><label class="block text-sm font-medium">Sujet</label><input v-model="subject" class="mt-1 w-full border rounded-xl px-3 py-2" required /></div>
      <div><label class="block text-sm font-medium">Message</label><textarea v-model="message" rows="5" class="mt-1 w-full border rounded-xl px-3 py-2" required></textarea></div>
      <button class="btn btn-primary w-full md:w-auto">Envoyer</button>
      <p v-if="sent" class="text-green-600 text-sm">Message envoyé (stocké côté client – démo).</p>
    </form>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const name = ref(''); const email = ref(''); const subject = ref(''); const message = ref(''); const sent = ref(false)
const send = () => {
  const list = JSON.parse(localStorage.getItem('zypp_support_msgs') || '[]')
  list.push({ id: Date.now(), name: name.value, email: email.value, subject: subject.value, message: message.value })
  localStorage.setItem('zypp_support_msgs', JSON.stringify(list))
  sent.value = true
}
</script>
