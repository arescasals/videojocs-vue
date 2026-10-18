<script setup>
import { ref, computed, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import GameList from '../components/GameList.vue'

const games = ref([])
const loading = ref(true)
const error = ref(false)

const search = ref('')
const selectedGenre = ref('Tots')
const sortBy = ref('title')

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

const genres = computed(() => {
  const unique = new Set(games.value.map((g) => g.genre).filter(Boolean))
  return ['Tots', ...[...unique].sort()]
})

const filtered = computed(() => {
  const text = search.value.trim().toLowerCase()
  const result = games.value.filter((g) => {
    const matchesGenre = selectedGenre.value === 'Tots' || g.genre === selectedGenre.value
    const matchesText = !text || (g.title || '').toLowerCase().includes(text)
    return matchesGenre && matchesText
  })
  return [...result].sort((a, b) => {
    if (sortBy.value === 'year-desc') return (b.year || 0) - (a.year || 0)
    if (sortBy.value === 'year-asc') return (a.year || 0) - (b.year || 0)
    return (a.title || '').localeCompare(b.title || '')
  })
})

function resetFilters() {
  search.value = ''
  selectedGenre.value = 'Tots'
}
</script>

<template>
  <main class="page">
    <header class="head">
      <p class="eyebrow">Catàleg</p>
      <h1>Tots els <span>videojocs</span></h1>
      <p v-if="!loading && !error" class="count">
        {{ games.length }} jocs a la col·lecció
      </p>
    </header>

    <p v-if="loading" class="state">Carregant videojocs...</p>
    <p v-else-if="error" class="state">
      No s'han pogut carregar els videojocs. Torna-ho a provar més tard.
    </p>
    <p v-else-if="games.length === 0" class="state">
      Encara no hi ha videojocs per mostrar.
    </p>

    <template v-else>
      <div class="toolbar">
        <input
          v-model="search"
          type="search"
          class="search"
          placeholder="🔎 Cerca per títol..."
        />
        <select v-model="sortBy" class="sort">
          <option value="title">Ordena per títol</option>
          <option value="year-desc">Any: més nou primer</option>
          <option value="year-asc">Any: més antic primer</option>
        </select>
      </div>

      <div class="chips">
        <button
          v-for="g in genres"
          :key="g"
          class="chip"
          :class="{ active: selectedGenre === g }"
          @click="selectedGenre = g"
        >
          {{ g }}
        </button>
      </div>

      <p class="showing">Mostrant {{ filtered.length }} de {{ games.length }} jocs</p>

      <GameList v-if="filtered.length > 0" :games="filtered" />
      <div v-else class="empty">
        <p>Cap joc coincideix amb la teva cerca.</p>
        <button class="chip active" @click="resetFilters">Neteja els filtres</button>
      </div>
    </template>
  </main>
</template>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}
.head {
  text-align: center;
  padding: 4rem 0 2rem;
}
.eyebrow {
  color: var(--neon2);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.head h1 {
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  margin: 0.4rem 0 0.6rem;
}
.head h1 span {
  color: var(--neon);
}
.count {
  color: var(--muted);
  margin: 0;
}
.state {
  text-align: center;
  color: var(--muted);
  padding: 3rem 0;
}
.toolbar {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}
.search,
.sort {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text);
  padding: 0.75rem 1.2rem;
  font-size: 1rem;
  outline: none;
}
.search {
  flex: 1;
  min-width: 220px;
}
.search:focus,
.sort:focus {
  border-color: var(--neon);
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.35);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}
.chip {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.45rem 1.1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.chip:hover {
  color: #ffffff;
  border-color: var(--neon);
}
.chip.active {
  color: #0b0b14;
  font-weight: 600;
  border-color: transparent;
  background: linear-gradient(90deg, var(--neon), var(--neon2));
}
.showing {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0 0 1.2rem;
}
.empty {
  text-align: center;
  padding: 3rem 0;
  color: var(--muted);
}
</style>