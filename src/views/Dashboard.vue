<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <h1 class="text-3xl font-bold text-orange-600 mb-6">Mon Tableau de bord</h1>

    <div v-if="!isLoggedIn" class="text-center text-gray-600">
      <p>Vous devez vous connecter pour accéder au tableau de bord.</p>
      <router-link to="/auth" class="text-orange-600 underline">Se connecter</router-link>
    </div>

    <div v-else>
      <h2 class="text-xl font-semibold mb-4">Mes courses</h2>
      <table class="min-w-full bg-white border rounded shadow">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="py-2 px-4 border-b">#</th>
            <th class="py-2 px-4 border-b">Distance</th>
            <th class="py-2 px-4 border-b">Prix payé</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ride, index) in rides" :key="index">
            <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
            <td class="py-2 px-4 border-b">{{ ride.distance }} km</td>
            <td class="py-2 px-4 border-b">{{ ride.price.toFixed(2) }} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

// Fake data
const rides = ref([
  { distance: 2.5, price: 3.20 },
  { distance: 5.1, price: 5.80 },
  { distance: 1.8, price: 2.50 },
]);

onMounted(() => {
  if (localStorage.getItem("auth") === "true") {
    isLoggedIn.value = true;
  } else {
    router.push("/auth");
  }
});
</script>
