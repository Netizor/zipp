
<template>
  <main>
    <!-- HERO -->
    <section class="section py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div class="kicker"><span class="w-2 h-2 rounded-full bg-[color:var(--brand)]"></span> Mobilité urbaine</div>
        <h1 class="mt-3 text-4xl md:text-5xl font-bold leading-tight">
          Bougez librement avec <span class="text-brand">Zypp</span>.
        </h1>
        <p class="lead mt-4">
          Déverrouillez une trottinette en quelques secondes, payez au trajet et gagnez du temps au quotidien.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="/download" class="btn btn-primary">Télécharger l’app</a>
          <router-link to="/rechargeur" class="btn btn-ghost">Devenir rechargeur</router-link>
        </div>
        <div class="mt-6 flex items-center gap-4">
          <span class="pill">Assurance incluse</span>
          <span class="pill">Zones de stationnement claires</span>
          <span class="pill">Support 7j/7</span>
        </div>
      </div>
      <div class="relative">
        <div class="card">
          <img src="/src/assets/logo.png" alt="Zypp app" class="w-2/3 mx-auto" />
          <div class="mt-6 grid grid-cols-3 gap-4 text-center">
            <div><div class="stat">2.1M</div><div class="text-xs text-gray-500">km parcourus (démo)</div></div>
            <div><div class="stat">4.8★</div><div class="text-xs text-gray-500">note moyenne</div></div>
            <div><div class="stat">-35%</div><div class="text-xs text-gray-500">temps de trajet</div></div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- BANNIERE IMPORTANTE -->
    <section class="bg-brand text-white py-10 text-center">
      <h2 class="text-2xl md:text-3xl font-heading">La mobilité verte, simple et rapide</h2>
      <div class="mt-4 flex justify-center gap-6 text-eco text-3xl">
        <span title="Bus">🚌</span>
        <span title="Vélo">🚲</span>
        <span title="Feuille">🌱</span>
      </div>
    </section>
    
    <!-- 3 STEPS -->
    <section class="bg-gray-50 py-14">
      <div class="section grid md:grid-cols-3 gap-6">
        <div class="card">
          <h3 class="font-semibold text-lg">1. Scannez</h3>
          <p class="text-gray-600 mt-2">Ouvrez l’app, scannez le QR code pour déverrouiller.</p>
        </div>
        <div class="card">
          <h3 class="font-semibold text-lg">2. Roulez</h3>
          <p class="text-gray-600 mt-2">Circulez rapidement en ville. Casque conseillé.</p>
        </div>
        <div class="card">
          <h3 class="font-semibold text-lg">3. Stationnez</h3>
          <p class="text-gray-600 mt-2">Garez-vous dans les zones autorisées, fin de trajet en 1 tap.</p>
        </div>
      </div>
    </section>

    <!-- TARIFS -->
    <section id="tarifs" class="section py-16">
      <div class="md:flex md:items-end md:justify-between mb-8">
        <div>
          <div class="kicker">Tarifs simples</div>
          <h2 class="text-3xl md:text-4xl font-bold mt-2">Payez ce que vous roulez.</h2>
          <p class="lead mt-2">Sans engagement. Réductions étudiantes disponibles.</p>
        </div>
        <a href="/download" class="btn btn-outline mt-4 md:mt-0">Obtenir l’app</a>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="card">
          <h3 class="font-semibold">Déblocage</h3>
          <p class="text-3xl font-bold mt-2">1,00 €</p>
          <p class="text-sm text-gray-500 mt-1">par trottinette</p>
        </div>
        <div class="card">
          <h3 class="font-semibold">Par minute</h3>
          <p class="text-3xl font-bold mt-2">0,15 €</p>
          <p class="text-sm text-gray-500 mt-1">facturation à la minute</p>
        </div>
        <div class="card">
          <h3 class="font-semibold">Pass Jour</h3>
          <p class="text-3xl font-bold mt-2">9,90 €</p>
          <p class="text-sm text-gray-500 mt-1">trajets illimités (fair use)</p>
        </div>
      </div>
    </section>

    <!-- SECURITÉ / CIVILITY -->
    <section class="bg-gray-50 py-14">
      <div class="section grid md:grid-cols-2 gap-10 items-center">
        <div class="card">
          <h3 class="text-xl font-semibold">Roulez responsable</h3>
          <ul class="mt-3 text-gray-700 space-y-2">
            <li>• Casque recommandé, 1 personne par trottinette</li>
            <li>• Respectez le code de la route</li>
            <li>• Garez-vous sans gêner piétons et PMR</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold">Zones de stationnement</h3>
          <p class="text-gray-600 mt-2">Visualisez les zones directement dans l’app pour terminer votre course proprement.</p>
          <div class="mt-4 h-56 rounded-2xl bg-[color:var(--fresh)]/10 border border-[color:var(--fresh)] grid place-items-center text-sm text-gray-600">
            <img src="/map.png" alt="map" style="width: 100%;height: 100%;object-fit: cover;" />
          </div>
        </div>
      </div>
    </section>

    <!-- DOWNLOAD CTA -->
    <section id="download" class="section py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 class="text-3xl font-bold">Téléchargez l’application Zypp</h3>
        <p class="lead mt-2">Disponible iOS & Android. Scannez, roulez, c’est terminé.</p>
        <div class="mt-6 flex gap-3">
          <a class="btn btn-primary" href="#" @click.prevent>App Store</a>
          <a class="btn btn-ghost" href="#" @click.prevent>Google Play</a>
        </div>
        <p class="text-xs text-gray-500 mt-2">Boutons de démonstration – à lier aux stores lors de la publication.</p>
      </div>
      <div class="card">
        <img alt="favicon" class="h-14" src="/src/assets/favicon.png" />
        <p class="text-sm text-gray-600 mt-3">Scannez le QR code dans l’app pour déverrouiller une trottinette à proximité.</p>
      </div>
    </section>

    
    <!-- NOS VALEURS -->
    <section class="bg-gray-50 py-16">
      <div class="section text-center">
        <h2 class="text-3xl font-heading font-bold">Nos valeurs</h2>
        <p class="lead mt-2">Zypp s’engage pour une mobilité durable, accessible et conviviale.</p>
        <div class="mt-10 grid md:grid-cols-5 gap-6 text-center text-sm">
          <div class="card flex flex-col items-center"><span class="text-4xl">🛴</span><p class="mt-2">Mobilité urbaine</p></div>
          <div class="card flex flex-col items-center"><span class="text-4xl">🌍</span><p class="mt-2">Respect de l’environnement</p></div>
          <div class="card flex flex-col items-center"><span class="text-4xl">📱</span><p class="mt-2">Technologie simple</p></div>
          <div class="card flex flex-col items-center"><span class="text-4xl">🤝</span><p class="mt-2">Communauté</p></div>
          <div class="card flex flex-col items-center"><span class="text-4xl">💶</span><p class="mt-2">Accessibilité prix</p></div>
        </div>
      </div>
    </section>
    

    <!-- VALEURS / ENGAGEMENTS -->
    <section class="bg-gray-50 py-14">
      <div class="section">
        <h2 class="text-3xl font-bold">Nos engagements</h2>
        <p class="lead mt-2">Une mobilité respectueuse, accessible et innovante.</p>
        <div class="grid md:grid-cols-5 gap-6 mt-8">
          <div class="card text-center">
            <div class="mx-auto text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M6 18h8l4-7h-6l-2-5H5"/></svg>
            </div>
            <div class="mt-2 font-semibold">Mobilité</div>
          </div>
          <div class="card text-center">
            <div class="mx-auto text-[color:var(--eco)]">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2v10l6 6"/></svg>
            </div>
            <div class="mt-2 font-semibold">Environnement</div>
          </div>
          <div class="card text-center">
            <div class="mx-auto text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>
            </div>
            <div class="mt-2 font-semibold">Technologie</div>
          </div>
          <div class="card text-center">
            <div class="mx-auto text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/><path d="M8 13l2 2 4-4"/></svg>
            </div>
            <div class="mt-2 font-semibold">Communauté</div>
          </div>
          <div class="card text-center">
            <div class="mx-auto text-brand">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v14"/><path d="M8 11l4 4 4-4"/><rect x="4" y="17" width="16" height="4" rx="1"/></svg>
            </div>
            <div class="mt-2 font-semibold">Prix justes</div>
          </div>
        </div>
      </div>
    </section>


    <StickyCta />
  </main>
</template>

<script setup>
import StickyCta from '../components/StickyCta.vue'
</script>
