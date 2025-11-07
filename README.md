# Likeable - Kong Prototype Framework

Rapid prototyping with **Nuxt**, **Vue**, and **Kongponents**.

## 🚀 Quick Start

### Run the Dev Server

```bash
cd nuxt-app
npm install
npm run dev
```

Server runs on **http://localhost:3000**

### Create a New Page

1. Create a file in `nuxt-app/pages/MyPage.vue`
2. Add your content:

```vue
<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script setup>
useHead({
  title: 'My Page'
})
</script>
```

3. Visit `http://localhost:3000/mypage`

### Use Kongponents

```vue
<template>
  <div>
    <KInput label="Name" placeholder="Enter name" />
    <KButton>Submit</KButton>
  </div>
</template>
```

### Add Vue Components

1. Create `nuxt-app/components/MyComponent.vue`:

```vue
<template>
  <div>
    <p>{{ message }}</p>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup>
const message = ref('Hello')
const count = ref(0)
</script>
```

2. Use it in any page (auto-imported):

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>
```

## 📚 Full Documentation

- **[USAGE.md](./USAGE.md)** - Detailed guide (components, styling, routing)
- **[AI_PROMPTING_GUIDE.md](./AI_PROMPTING_GUIDE.md)** - Generate prototypes with AI
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Component snippets
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to production

## 🛠 Commands

```bash
cd nuxt-app
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Tech Stack

- **Nuxt 4.2** - Full-stack Vue framework
- **Vue 3** - Reactive components
- **Kongponents 9.46** - Kong design system (from GitHub repo)
- **Vite** - Build tool
