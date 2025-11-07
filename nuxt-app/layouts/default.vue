<template>
  <div>
    <nav class="nav">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/oauth-config" class="nav-link">OAuth Config</NuxtLink>
    </nav>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style scoped>
.nav {
  background: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background: #f5f5f5;
  color: #333;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem 0;
}

h3 {
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

a {
  color: #0066cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ul, ol {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>