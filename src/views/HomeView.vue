<template>
  <main class="page">
    <h1>Benvinguda al meu catàleg de videojocs 🎮</h1>
    <p>
      Aquesta web recull una col·lecció de videojocs amb el seu gènere,
      plataforma i any de llançament.
    </p>
    <p>
      Ves a l'apartat <RouterLink to="/videojocs">Videojocs</RouterLink> per
      veure'n la llista.
    </p>
  </main>
</template>

<style scoped>
.page {
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
</style>