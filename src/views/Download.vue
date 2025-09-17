<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
    <h1 class="text-3xl font-bold text-orange-600 mb-8">
      Télécharger l'application Zypp
    </h1>
    <p class="text-lg text-gray-600 mb-10 text-center max-w-lg">
      Scannez le QR code pour télécharger l'application mobile et profitez de nos trottinettes en toute simplicité.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="flex flex-col items-center">
        <img src="/qr-google.png" alt="QR Code Google Play" class="w-48 h-48 mb-4" />
        <span class="font-semibold text-gray-700">Google Play</span>
      </div>

      <div class="flex flex-col items-center">
        <img src="/qr-apple.png" alt="QR Code App Store" class="w-48 h-48 mb-4" />
        <span class="font-semibold text-gray-700">App Store</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Pas besoin de logique particulière ici
</script>

<style scoped>
</style>
