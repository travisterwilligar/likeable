# Kong Prototype Framework - Copilot Instructions

## Project Overview
This is a prototyping framework for quickly creating UI mockups using Kong's Kongponents design system.

## Tech Stack
- Vite + Vue 3 (JavaScript)
- Kongponents Design System
- Vue Router (automatic routing)
- Vercel (deployment)

## Project Structure
- `/components` - Reusable custom components built on Kongponents
- `/views` - Full page prototypes
- `/styles` - Custom CSS and theme overrides
- `/router` - Vue Router configuration

## Development Guidelines
- Use Kongponents components as the foundation
- Create reusable components when patterns emerge
- Automatically register routes when creating new pages
- Keep prototypes simple and focused on UI/UX demonstration
- Use JavaScript for easier readability

## Setup Progress
- [x] Create project copilot instructions
- [x] Scaffold Vite + Vue 3 project
- [x] Install Kongponents and dependencies
- [x] Create folder structure
- [x] Configure Vue Router with auto-routing
- [x] Create sample prototype page
- [x] Add Vercel configuration
- [x] Create README documentation

## Framework Features
- ✅ Automatic routing - just create .vue files in /src/views
- ✅ Full Kongponents component library integrated
- ✅ Hot module replacement for instant feedback
- ✅ Vercel deployment configuration ready
- ✅ Example pages demonstrating common patterns
- ✅ Custom component template
- ✅ Comprehensive documentation

## When User Requests New Work

### Creating New Pages
1. Create file in `/src/views/[PageName].vue`
2. Import needed Kongponents components
3. Build the UI using Kongponents
4. Route is automatically created (PageName → /pagename)

### Creating Reusable Components
1. Create file in `/src/components/[ComponentName].vue`
2. Use props for customization
3. Import and use in views
4. Document usage if complex

### Styling
1. Use `<style scoped>` for component-specific styles
2. Add global styles to `/src/styles/custom.css`
3. Override Kongponents variables in custom.css root

### Deployment
- Follow steps in DEPLOYMENT.md
- Git commit/push triggers Vercel deployment
- Branch deployments get unique preview URLs
