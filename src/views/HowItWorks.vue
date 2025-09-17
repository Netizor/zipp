
<template>
  <section class="section py-12">
    <h1 class="text-3xl md:text-4xl font-bold">Comment ça marche</h1>
    <p class="lead mt-2">Trois étapes simples pour se déplacer en ville.</p>
    <div class="grid md:grid-cols-3 gap-6 mt-8">
      <div class="card"><h3 class="font-semibold text-lg">1. Scannez</h3><p class="text-gray-600 mt-2">Ouvrez l’app, scannez le QR code pour déverrouiller une trottinette à proximité.</p></div>
      <div class="card"><h3 class="font-semibold text-lg">2. Roulez</h3><p class="text-gray-600 mt-2">Circulez en respectant le code de la route. Casque recommandé.</p></div>
      <div class="card"><h3 class="font-semibold text-lg">3. Stationnez</h3><p class="text-gray-600 mt-2">Terminez dans une zone autorisée pour libérer la trottinette.</p></div>
    </div>
    <div class="card mt-10">
      <h2 class="font-semibold text-xl">Zones et carte</h2>
      <p class="text-gray-600 mt-2">L’app affiche les zones de stationnement, zones à vitesse réduite et zones interdites.</p>
      <div class="mt-4 h-64 rounded-2xl bg-gray-50 border grid place-items-center text-sm text-gray-600">
	  
		<img src="/map.png" alt="map" />
	  
	  </div>
    </div>
  </section>
</template>
