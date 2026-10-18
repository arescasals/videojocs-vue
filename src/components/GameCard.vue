<script setup>
defineProps({
  game: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card">
    <h3>{{ game.title }}</h3>
    <p class="meta">{{ game.genre }} · {{ game.platform }} · {{ game.year }}</p>
    <p>{{ game.description }}</p>
  </article>
</template>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
.card h3 {
  margin: 0 0 0.4rem;
  color: #1f1f2e;
}
.meta {
  color: #666;
  font-size: 0.9rem;
}
</style>