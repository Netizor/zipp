
<template>
  <footer class="mt-16 border-t border-gray-100">
    <div class="section py-10 grid gap-8 md:grid-cols-3">
      <div>
        <img src="/src/assets/logo.png" style="height 80px" class="h-8" alt="Zypp">
        <p class="text-sm text-gray-600 mt-3">Zypp – Location de trottinettes à Montpellier.</p>
      </div>
      <div>
        <h3 class="font-semibold mb-2">Explorer</h3>
        <ul class="grid gap-1 text-sm">
          <li><a class="hover:text-brand" href="/tarifs">Tarifs</a></li>
          <li><a class="hover:text-brand" href="#download">App</a></li>
          <li><router-link class="hover:text-brand" to="/rechargeur">Rechargeurs</router-link></li>
        <li><router-link class="hover:text-brand" to="/fonctionnement">Fonctionnement</router-link></li>
          <li><router-link class="hover:text-brand" to="/faq">FAQ</router-link></li>
          <li><router-link class="hover:text-brand" to="/support">Support</router-link></li>
        </ul>
      </div>
      <div class="text-sm text-gray-600">
        © {{ new Date().getFullYear() }} Zypp. Tous droits réservés. • <router-link class="hover:text-brand" to="/legal">Mentions légales</router-link>
      </div>
    </div>
  </footer>
</template>
