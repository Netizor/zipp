<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-bold text-orange-600 mb-6 text-center">Connexion</h1>

      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Identifiant</label>
          <input v-model="username" type="text" class="w-full border rounded p-2" />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700">Mot de passe</label>
          <input v-model="password" type="password" class="w-full border rounded p-2" />
        </div>

        <button
          type="submit"
          class="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"
        >
          Se connecter
        </button>

        <p v-if="error" class="text-red-500 mt-4 text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref("");

function login() {
  if (username.value === "root" && password.value === "root") {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  } else {
    error.value = "Identifiants incorrects";
  }
}
</script>
