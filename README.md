# Kong Prototype Framework

A prototyping framework using Kong's Kongponents design system with Vue.js 3 and Vite.

## 🚀 Quick Start

**Start the development server:**
```bash
npm run dev
```

**Then open**: `http://localhost:8000`

## 📁 Project Structure

```
├── src/
│   ├── components/     # Reusable Vue components
│   ├── views/          # Page components (auto-routed)
│   ├── styles/         # Custom CSS styles
│   │   └── custom.css  # Global custom styles
│   ├── router/         # Vue Router configuration
│   │   └── index.js    # Auto-routing setup
│   ├── App.vue         # Root Vue component
│   └── main.js         # Vue app entry point
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Kongponents Reference

The framework includes a comprehensive Kongponents reference page (`/kongponents`) with working examples of all major components:

- **Buttons** - Primary, secondary, danger, and disabled states
- **Form Inputs** - Text inputs, selects, textareas
- **Cards** - Basic cards with headers and content
- **Badges** - Success, warning, danger, and info variants
- **Tables** - Data tables with Kongponents styling
- **Alerts** - Success, warning, danger, and info alerts
- **Modals** - Interactive modal dialogs with Vue reactivity
- **Tabs** - Tabbed navigation with Vue state management
- **Empty States** - Placeholder content for empty views

Each component example includes:
- Live preview with Vue interactivity
- Copy-paste HTML code
- Vue.js integration examples

## 🛠️ Adding New Prototypes

### Creating New Pages

1. **Create a new Vue component** in `/src/views/`:
   ```vue
   <!-- /src/views/MyPrototype.vue -->
   <template>
     <div class="my-prototype">
       <h2>My New Prototype</h2>
       <button class="k-button k-button--primary">Click me</button>
     </div>
   </template>

   <script setup>
   // Vue 3 Composition API
   </script>

   <style scoped>
   .my-prototype {
     padding: 2rem;
   }
   </style>
   ```

2. **Routes are automatically created** - the file `MyPrototype.vue` becomes available at `/myprototype`

3. **Update navigation** in `App.vue` if needed:
   ```vue
   <nav class="navbar">
     <router-link to="/">Home</router-link>
     <router-link to="/kongponents">Kongponents</router-link>
     <router-link to="/myprototype">My Prototype</router-link>
   </nav>
   ```

### Creating Reusable Components

1. **Create a component** in `/src/components/`:
   ```vue
   <!-- /src/components/MyComponent.vue -->
   <template>
     <div class="my-component">
       <h3>{{ title }}</h3>
       <button class="k-button k-button--primary" @click="handleClick">
         {{ buttonText }}
       </button>
     </div>
   </template>

   <script setup>
   defineProps({
     title: String,
     buttonText: String
   })

   const handleClick = () => {
     console.log('Button clicked!')
   }
   </script>

   <style scoped>
   .my-component {
     margin: 1rem 0;
   }
   </style>
   ```

2. **Use it in your views**:
   ```vue
   <template>
     <MyComponent title="Hello World" button-text="Click Me" />
   </template>

   <script setup>
   import MyComponent from '../components/MyComponent.vue'
   </script>
   ```

## �� Using Kongponents

Kongponents are automatically imported and available in all Vue components:

```vue
<template>
  <!-- Buttons -->
  <button class="k-button k-button--primary">Primary</button>
  <button class="k-button k-button--secondary">Secondary</button>

  <!-- Cards -->
  <div class="k-card">
    <div class="k-card__body">
      <h4>Card Title</h4>
      <p>Card content</p>
    </div>
  </div>

  <!-- Form inputs -->
  <input type="text" class="k-input" placeholder="Text input">
  <select class="k-select">
    <option>Option 1</option>
  </select>
</template>
```

## 🚀 Deployment

### Development
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Deploy to Vercel

1. **Push to GitHub**
2. **Connect to Vercel** - it auto-detects Vite settings
3. **Deploy automatically** on each push

## ✨ Features

- ✅ **Vue.js 3** - Modern reactive framework
- ✅ **Vite** - Lightning-fast development and builds
- ✅ **Kongponents** - Official Kong design system
- ✅ **Auto-routing** - Routes generated from `/src/views/*.vue` files
- ✅ **Hot Module Replacement** - Instant updates during development
- ✅ **Component Library** - Comprehensive Kongponents reference
- ✅ **Vue Composition API** - Modern Vue.js patterns
- ✅ **SCSS Support** - Style your components with scoped styles

## 🎯 When to Use

Perfect for:
- UI/UX prototyping with Vue.js
- Design system exploration
- Quick mockups with reactive behavior
- Component testing and development
- Stakeholder presentations
- Kongponents integration testing

## 💡 Tips

- **Auto-routing**: Just create `.vue` files in `/src/views/` - routes are generated automatically
- **Hot Reload**: Changes appear instantly during development
- **Component Reference**: Visit `/kongponents` to copy component code
- **Vue DevTools**: Install browser extension for debugging
- **Composition API**: Use `<script setup>` for cleaner component code

## 🤝 Workflow

1. **Start development**: `npm run dev`
2. **Browse components** at `/kongponents`
3. **Create prototypes** in `/src/views/`
4. **Extract components** when patterns emerge
5. **Deploy** to Vercel for sharing

## 🛠️ Troubleshooting

**Issue: Component not found**
- Kongponents CSS is imported in `main.js`
- Check component class names match Kongponents documentation

**Issue: Route not working**
- File must be in `/src/views/` folder
- File must be a `.vue` file
- Routes are generated automatically

**Issue: Styles not loading**
- Kongponents CSS is imported globally
- Custom styles go in `/src/styles/custom.css`

---

Built with ❤️ using Vue.js 3, Vite, and Kong's Kongponents design system
