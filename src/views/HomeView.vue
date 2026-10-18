<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs, query, limit } from 'firebase/firestore'
import { db } from '../firebase'
import GameList from '../components/GameList.vue'

const features = [
  {
    icon: '🎮',
    title: 'Catàleg en directe',
    text: 'Els jocs es llegeixen en temps real de Cloud Firestore, no estan escrits al codi.',
  },
  {
    icon: '🕹️',
    title: 'Tota la informació',
    text: 'Gènere, plataforma, any de llançament i una breu descripció de cada joc.',
  },
  {
    icon: '🔎',
    title: 'Cerca i filtra',
    text: 'Troba el teu proper joc buscant pel títol o filtrant per gènere.',
  },
  {
    icon: '⚡',
    title: 'Ràpid i sense recàrregues',
    text: 'Vue Router canvia de pàgina a l\'instant, sense tornar a carregar tota la web.',
  },
]

const featured = ref([])
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const snapshot = await getDocs(query(collection(db, 'games'), limit(4)))
    featured.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <section class="hero">
      <p class="eyebrow">El teu catàleg de videojocs</p>
      <h1>Guarda, explora<br />i descobreix <span>PixelVault</span></h1>
      <p class="lead">
        Una col·lecció de videojocs amb el seu gènere, plataforma i any de
        llançament, tot en un sol lloc.
      </p>
      <div class="actions">
        <RouterLink to="/videojocs" class="btn primary">Explora el catàleg</RouterLink>
        <RouterLink to="/sobre" class="btn ghost">Sobre el projecte</RouterLink>
      </div>
    </section>

    <section class="block">
      <h2>Què trobaràs aquí</h2>
      <div class="features">
        <article v-for="f in features" :key="f.title" class="feature">
          <span class="icon">{{ f.icon }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </article>
      </div>
    </section>

    <section class="block">
      <h2>Jocs destacats</h2>
      <p v-if="loading" class="state">Carregant jocs destacats...</p>
      <p v-else-if="error" class="state">No s'han pogut carregar els jocs destacats.</p>
      <p v-else-if="featured.length === 0" class="state">Encara no hi ha jocs per mostrar.</p>
      <GameList v-else :games="featured" />
      <div class="more">
        <RouterLink to="/videojocs" class="btn ghost">Veure'ls tots →</RouterLink>
      </div>
    </section>

    <section class="cta">
      <h2>Preparada per començar?</h2>
      <p>Entra al catàleg i descobreix el teu proper joc.</p>
      <RouterLink to="/videojocs" class="btn primary">Anar als videojocs</RouterLink>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
}
.hero {
  text-align: center;
  padding: 5rem 0 4rem;
}
.eyebrow {
  color: var(--neon2);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.hero h1 {
  font-size: clamp(2.2rem, 6vw, 4rem);
  line-height: 1.1;
  margin: 0.6rem 0 1.2rem;
}
.hero h1 span {
  color: var(--neon);
}
.lead {
  max-width: 620px;
  margin: 0 auto 2rem;
  color: var(--muted);
  font-size: 1.1rem;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.btn {
  display: inline-block;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
}
.btn.primary {
  background: linear-gradient(90deg, var(--neon), var(--neon2));
  color: #0b0b14;
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.45);
}
.btn.ghost {
  color: #ffffff;
  border: 1px solid var(--border);
}
.btn.ghost:hover {
  border-color: var(--neon);
}
.block {
  padding: 3rem 0 1rem;
}
.block h2 {
  margin: 0 0 1.5rem;
  font-size: 1.7rem;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
}
.feature {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.6rem;
}
.icon {
  font-size: 2rem;
}
.feature h3 {
  margin: 0.6rem 0 0.4rem;
}
.feature p {
  margin: 0;
  color: var(--muted);
}
.state {
  color: var(--muted);
}
.more {
  text-align: center;
  margin-top: 2rem;
}
.cta {
  margin-top: 4rem;
  text-align: center;
  padding: 3rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(56, 189, 248, 0.1));
}
.cta h2 {
  margin: 0 0 0.5rem;
}
.cta p {
  color: var(--muted);
  margin-bottom: 1.5rem;
}
</style>