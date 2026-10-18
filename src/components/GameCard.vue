<script setup>
import { computed } from 'vue'

const props = defineProps({
  game: {
    type: Object,
    required: true,
  },
})

const icons = {
  Aventura: '🗺️',
  Acció: '⚔️',
  Plataformes: '🏔️',
  Simulació: '🌾',
  Metroidvania: '🦋',
  RPG: '🐉',
  Puzles: '🧩',
}

const icon = computed(() => icons[props.game.genre] || '🎮')

const hue = computed(() => {
  let h = 0
  for (const c of props.game.genre || '') h = (h * 31 + c.charCodeAt(0)) % 360
  return h
})
</script>

<template>
  <article class="card">
    <div class="cover" :style="{ '--hue': hue }">
      <span class="emoji">{{ icon }}</span>
      <span class="year">{{ game.year }}</span>
    </div>
    <div class="body">
      <span class="badge">{{ game.genre }}</span>
      <h3>{{ game.title }}</h3>
      <p class="meta">{{ game.platform }}</p>
      <p class="desc">{{ game.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-6px);
  border-color: var(--neon);
  box-shadow: 0 0 24px rgba(168, 85, 247, 0.35);
}
.cover {
  position: relative;
  height: 120px;
  display: grid;
  place-items: center;
  background: linear-gradient(
    135deg,
    hsl(var(--hue) 70% 38%),
    hsl(calc(var(--hue) + 60) 70% 22%)
  );
}
.emoji {
  font-size: 3rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5));
}
.year {
  position: absolute;
  top: 0.7rem;
  right: 0.8rem;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.45);
}
.body {
  padding: 1.2rem;
}
.badge {
  display: inline-block;
  padding: 0.15rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--neon2);
  border: 1px solid var(--neon2);
}
.body h3 {
  margin: 0.7rem 0 0.2rem;
  font-size: 1.15rem;
  color: #ffffff;
}
.meta {
  margin: 0 0 0.7rem;
  color: var(--muted);
  font-size: 0.88rem;
}
.desc {
  margin: 0;
  color: var(--text);
  font-size: 0.95rem;
}
</style>