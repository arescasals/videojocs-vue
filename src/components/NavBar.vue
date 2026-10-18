<template>
  <nav class="navbar">
    <RouterLink to="/" class="brand">
      <span class="brand-icon">◆</span>
      <span class="brand-name">Pixel<span>Vault</span></span>
    </RouterLink>
    <div class="links">
      <RouterLink to="/">Inici</RouterLink>
      <RouterLink to="/videojocs">Videojocs</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: rgba(11, 11, 20, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.brand-icon {
  color: var(--neon);
  font-size: 1.3rem;
  text-shadow: 0 0 12px var(--neon);
}
.brand-name {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: 0.04em;
}
.brand-name span {
  color: var(--neon2);
}
.links {
  display: flex;
  gap: 1.8rem;
}
.links a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.links a:hover {
  color: #ffffff;
}
.links a.router-link-exact-active {
  color: #ffffff;
  border-bottom-color: var(--neon);
}
</style>