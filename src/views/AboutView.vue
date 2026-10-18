<script setup>
const tech = [
  { icon: '💚', name: 'Vue 3', text: 'Framework que construeix la web a base de components reutilitzables.' },
  { icon: '⚡', name: 'Vite', text: 'Eina que arrenca el projecte i genera la versió de producció.' },
  { icon: '🧭', name: 'Vue Router', text: 'Gestiona les pàgines de la web sense recarregar-la.' },
  { icon: '🔥', name: 'Firebase', text: 'Firestore guarda els jocs i Hosting publica la web.' },
]

const steps = [
  { title: 'Les dades viuen a Firestore', text: 'Cada videojoc és un document de la col·lecció games, amb títol, gènere, plataforma, any i descripció.' },
  { title: 'Vue les llegeix', text: 'Quan s\'obre una pàgina, l\'aplicació demana els jocs a Firestore i mostra un missatge mentre carrega.' },
  { title: 'Els components se les passen', text: 'La vista passa la llista a GameList amb props, i GameList passa cada joc a GameCard, que el mostra.' },
  { title: 'El router porta cada pàgina', text: 'RouterLink canvia d\'adreça i RouterView mostra la vista que toca, sense recarregar.' },
]

const stats = [
  { value: '3', label: 'Rutes' },
  { value: '3', label: 'Components propis' },
  { value: '1', label: 'Col·lecció a Firestore' },
  { value: '100%', label: 'Dades reals' },
]
</script>

<template>
  <main>
    <section class="hero">
      <p class="eyebrow">Sobre el projecte</p>
      <h1>Un catàleg viu,<br />fet amb <span>Vue</span></h1>
      <p class="lead">
        PixelVault és una aplicació web que recull videojocs i els mostra amb
        les dades guardades a Cloud Firestore.
      </p>
    </section>

    <section class="block">
      <h2>De què va</h2>
      <div class="panel">
        <p>
          Aquest projecte és una activitat de Web dinàmica del Grau en Disseny
          Digital i Tecnologies Creatives. L'objectiu és construir una primera
          aplicació amb Vue, entendre com es comuniquen els components, navegar
          entre pàgines i llegir dades d'una base de dades real.
        </p>
        <p>
          La temàtica és un catàleg de videojocs, pensat per descobrir títols
          segons el gènere, la plataforma i l'any de llançament.
        </p>
      </div>
    </section>

    <section class="block">
      <h2>Tecnologies</h2>
      <div class="grid">
        <article v-for="t in tech" :key="t.name" class="card">
          <span class="icon">{{ t.icon }}</span>
          <h3>{{ t.name }}</h3>
          <p>{{ t.text }}</p>
        </article>
      </div>
    </section>

    <section class="block">
      <h2>Com funciona</h2>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="num">{{ i + 1 }}</span>
          <div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="block">
      <h2>El projecte en xifres</h2>
      <div class="grid">
        <article v-for="s in stats" :key="s.label" class="card stat">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </article>
      </div>
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
  padding: 4.5rem 0 3rem;
}
.eyebrow {
  color: var(--neon2);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.hero h1 {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  line-height: 1.1;
  margin: 0.6rem 0 1.2rem;
}
.hero h1 span {
  color: var(--neon);
}
.lead {
  max-width: 620px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 1.1rem;
}
.block {
  padding: 2.5rem 0 1rem;
}
.block h2 {
  margin: 0 0 1.5rem;
  font-size: 1.7rem;
}
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.8rem;
}
.panel p {
  margin: 0 0 1rem;
  color: var(--text);
}
.panel p:last-child {
  margin-bottom: 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.2rem;
}
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.6rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  border-color: var(--neon);
}
.icon {
  font-size: 2rem;
}
.card h3 {
  margin: 0.6rem 0 0.4rem;
}
.card p {
  margin: 0;
  color: var(--muted);
}
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}
.steps li {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.4rem;
}
.num {
  flex-shrink: 0;
  width: 2.6rem;
  height: 2.6rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-weight: 700;
  color: #0b0b14;
  background: linear-gradient(135deg, var(--neon), var(--neon2));
  box-shadow: 0 0 16px rgba(168, 85, 247, 0.5);
}
.steps h3 {
  margin: 0 0 0.3rem;
}
.steps p {
  margin: 0;
  color: var(--muted);
}
.stat {
  text-align: center;
}
.stat strong {
  display: block;
  font-size: 2.6rem;
  color: var(--neon2);
  text-shadow: 0 0 16px rgba(56, 189, 248, 0.5);
}
.stat span {
  color: var(--muted);
}
</style>