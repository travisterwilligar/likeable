<template>
  <div>
    <h1>Welcome to Kong Prototype Framework</h1>
    <p>Built with Nuxt + Vue + Kongponents</p>

    <ul style="margin-top: 2rem; line-height: 2;">
      <li><NuxtLink to="/oauth-config">OAuth Configuration Form</NuxtLink> - Test the form with Kongponents</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home | Kong Prototype Framework'
})
</script>