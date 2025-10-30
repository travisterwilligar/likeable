# Likeable - Kong Prototype Framework

Rapid prototyping with **Astro**, **Vue**, and **Kongponents**.

## 🚀 Quick Start

### Run the Dev Server

```bash
npm install
npm run dev
```

Server runs on **http://localhost:4321**

### Create a New Page

1. Create a file in `likeable/src/pages/MyPage.astro`
2. Add your content:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="My Page">
  <h1>Hello</h1>
</Layout>
```

3. Visit `http://localhost:4321/mypage`

### Use Kongponents

```astro
---
import Layout from '../layouts/Layout.astro';
import { KButton, KCard, KInput } from '@kong/kongponents';
---

<Layout title="My Prototype">
  <KCard>
    <KInput label="Name" placeholder="Enter name" />
    <KButton>Submit</KButton>
  </KCard>
</Layout>
```

### Add Vue Components

1. Create `likeable/src/components/MyComponent.vue`:

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('Hello');
const count = ref(0);
</script>
```

2. Use it in a page with `client:load`:

```astro
---
import MyComponent from '../components/MyComponent.vue';
---

<Layout title="Page">
  <MyComponent client:load />
</Layout>
```

## 📚 Full Documentation

- **[USAGE.md](./USAGE.md)** - Detailed guide (components, styling, routing)
- **[AI_PROMPTING_GUIDE.md](./AI_PROMPTING_GUIDE.md)** - Generate prototypes with AI
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Component snippets
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to production

## � Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Tech Stack

- **Astro 4.16** - Static site generator with interactive islands
- **Vue 3** - Reactive components
- **Kongponents 9.45** - Kong design system
- **Vite** - Build tool
