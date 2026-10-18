<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import GameList from '../components/GameList.vue'

const games = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'games'))
    games.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main class="page">
    <h1>Videojocs</h1>
    <p v-if="loading">Carregant videojocs...</p>
    <p v-else-if="error">No s'han pogut carregar els videojocs. Torna-ho a provar més tard.</p>
    <p v-else-if="games.length === 0">Encara no hi ha videojocs per mostrar.</p>
    <GameList v-else :games="games" />
  </main>
</template>

<style scoped>
.page {
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
</style>