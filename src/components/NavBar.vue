<template>
  <nav class="navbar">
    <span class="logo">🎮 Videojocs</span>
    <div class="links">
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/videojocs">Videojocs</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1f1f2e;
}
.logo {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}
.links {
  display: flex;
  gap: 1.5rem;
}
.links a {
  color: #ccc;
  text-decoration: none;
}
.links a:hover,
.links a.router-link-exact-active {
  color: #ffffff;
  font-weight: bold;
}
</style>