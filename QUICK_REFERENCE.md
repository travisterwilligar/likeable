# Quick Reference Guide

## Creating a New Prototype Page

1. Create a new file in `/src/views/`:
   ```
   /src/views/YourPageName.vue
   ```

2. The route is automatically created:
   - `Home.vue` → `http://localhost:5173/`
   - `YourPageName.vue` → `http://localhost:5173/yourpagename`

## Most Common Kongponents

### Buttons
```vue
<KButton appearance="primary">Primary</KButton>
<KButton appearance="secondary">Secondary</KButton>
<KButton appearance="tertiary">Tertiary</KButton>
<KButton appearance="danger">Danger</KButton>

<!-- With icon -->
<KButton appearance="primary">
  <template #icon>
    <KIcon icon="plus" />
  </template>
  Add Item
</KButton>
```

### Cards
```vue
<KCard>
  <template #body>
    Your content here
  </template>
</KCard>
```

### Inputs
```vue
<KInput
  v-model="myValue"
  label="Label Text"
  placeholder="Placeholder..."
/>
```

### Alerts
```vue
<KAlert appearance="info">
  <template #icon>
    <KIcon icon="info" />
  </template>
  Your message here
</KAlert>

<!-- Appearances: info, success, warning, danger -->
```

### Badges
```vue
<KBadge appearance="success">Active</KBadge>
<!-- Appearances: success, warning, danger, info, neutral -->
```

### Tables
```vue
<KTable
  :headers="tableHeaders"
  :data="tableData"
>
  <template #name="{ row }">
    <strong>{{ row.name }}</strong>
  </template>
</KTable>

<script setup>
const tableHeaders = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' }
]

const tableData = [
  { name: 'Item 1', status: 'Active' },
  { name: 'Item 2', status: 'Inactive' }
]
</script>
```

### Select Dropdown
```vue
<KSelect
  v-model="selectedValue"
  label="Choose an option"
  :items="selectItems"
/>

<script setup>
const selectItems = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' }
]
</script>
```

### Textarea
```vue
<KTextarea
  v-model="textValue"
  label="Description"
  placeholder="Enter description..."
  rows="4"
/>
```

### Icons
```vue
<KIcon icon="plus" />
<KIcon icon="edit" />
<KIcon icon="delete" />
<KIcon icon="info" />
<KIcon icon="chevronLeft" />
<KIcon icon="chevronRight" />
```

## Navigation

### Link to another page
```vue
<KButton @click="$router.push('/example')">
  Go to Example
</KButton>

<!-- Or with router-link -->
<router-link to="/example">Example Page</router-link>
```

### Go back
```vue
<KButton @click="$router.back()">Back</KButton>
```

## Layout Pattern

### Full Page with Header
```vue
<template>
  <div class="page">
    <div class="container">
      <header class="header">
        <h1>Page Title</h1>
        <p>Description</p>
      </header>

      <main class="content">
        <!-- Your content -->
      </main>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
```

### Two Column Layout
```vue
<template>
  <div class="two-column">
    <aside class="sidebar">
      <!-- Sidebar content -->
    </aside>
    <main class="main">
      <!-- Main content -->
    </main>
  </div>
</template>

<style scoped>
.two-column {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}
</style>
```

### Card Grid
```vue
<template>
  <div class="card-grid">
    <KCard v-for="item in items" :key="item.id">
      <template #body>
        {{ item.name }}
      </template>
    </KCard>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
```

## Vue 3 Basics

### Reactive Data
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const name = ref('')

function increment() {
  count.value++
}
</script>
```

### Lists
```vue
<template>
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script setup>
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
])
</script>
```

### Conditional Rendering
```vue
<template>
  <div v-if="isVisible">Visible</div>
  <div v-else>Hidden</div>
</template>
```

## Common Colors (Kong Palette)

```css
/* Primary */
--kui-color-primary: #1155cb;

/* Status Colors */
--kui-color-success: #07a88d;
--kui-color-warning: #ffc400;
--kui-color-danger: #d44324;

/* Neutrals */
--kui-color-text: #1a1a1a;
--kui-color-text-neutral: #6c7489;
--kui-color-background: #ffffff;
--kui-color-background-neutral: #f9fafb;
```

## Tips

- Check `/src/views/Home.vue` and `/src/views/Example.vue` for working examples
- Browse https://kongponents.konghq.com/components/ for all available components
- Use `<style scoped>` to keep styles component-specific
- Import only the components you need from `@kong/kongponents`

## Need Help?

- Kongponents Docs: https://kongponents.konghq.com/
- Vue 3 Docs: https://vuejs.org/
- Ask me to create specific components or pages!
