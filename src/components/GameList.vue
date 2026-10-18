<script setup>
import GameCard from './GameCard.vue'

defineProps({
  games: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="list">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </section>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.2rem;
}
</style>