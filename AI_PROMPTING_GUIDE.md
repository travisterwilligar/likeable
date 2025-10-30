# AI Prompting Guide for This Framework

This guide helps you effectively request new components and pages from AI assistants.

## Creating New Pages

### Simple Page Request
```
Create a new page called "Dashboard" that shows:
- A header with the title "Dashboard"
- Three stat cards showing metrics
- A table of recent activity
```

### Detailed Page Request
```
Create a new "UserProfile" page with:
- Back button to home
- User avatar and name at the top
- Tabs for: Profile, Settings, Activity
- Profile tab should have:
  - Form with Name, Email, Bio fields
  - Save button
- Use KCard, KInput, KButton, and KTabs components
```

### Multi-Page Flow
```
Create a 3-page flow for creating a new service:
1. Service Details page - form for name, description, endpoint
2. Configuration page - select protocol, add headers
3. Review page - shows all info with edit buttons
Add navigation between pages and a final "Create" button
```

## Creating Reusable Components

### Component Request
```
Create a reusable "StatCard" component in /src/components/ that:
- Takes props: title, value, change, status
- Shows the title at top
- Shows the value (large text)
- Shows change percentage with up/down indicator
- Shows status badge (success/warning/danger)
- Use KCard and KBadge from Kongponents
```

### Layout Component
```
Create a "DashboardLayout" component that:
- Has a sidebar on the left with navigation links
- Has a header with logo and user menu
- Has a main content area that accepts slot content
- Is responsive (collapses sidebar on mobile)
```

## Requesting Modifications

### Update Existing Page
```
Update the Home page to:
- Add a new section showing available templates
- Change the color scheme to use more blues
- Add a search bar at the top
```

### Add Features
```
Add to the Example page:
- A modal that opens when clicking "Add Service"
- The modal should have a form with validation
- Close button and submit button
```

## Styling Requests

### Custom Styles
```
Add custom CSS for:
- A gradient background for headers
- Hover effects on cards
- Custom button styles that match our brand
- Animations for page transitions
```

### Theme Override
```
Override Kongponents theme colors:
- Primary color: #2D5CF6
- Success color: #00C851
- Danger color: #FF4444
Update /src/styles/custom.css
```

## Complex Features

### Interactive Components
```
Create an interactive data visualization page that:
- Has filters (date range, category)
- Shows a chart (use placeholder div for now)
- Updates a data table based on filters
- Has export button
```

### Form Wizard
```
Create a multi-step form wizard for user onboarding:
- Step 1: Personal info (name, email)
- Step 2: Company info (name, size)
- Step 3: Preferences (notifications, theme)
- Progress indicator at top
- Next/Back buttons
- Submit on final step
```

## Best Practices for Prompting

### ✅ Good Prompts
- Be specific about functionality
- Mention which Kongponents to use
- Describe the layout clearly
- Specify data structure if needed
- Mention responsive behavior

### ❌ Avoid
- Vague requests like "make it better"
- Requesting features not supported by Kongponents
- Not specifying file locations
- Forgetting to mention data requirements

## Example Workflows

### Prototype a Feature
```
1. "Create a Services page with a table of services"
2. [Review the page]
3. "Add a sidebar filter to the Services page"
4. [Test filtering]
5. "Make the service name clickable, linking to a detail page"
6. "Create a ServiceDetail page showing full service info"
```

### Build a Component Library
```
1. "Create a PageHeader component with title and actions slot"
2. "Create a DataTable component wrapping KTable with default styling"
3. "Create a FormCard component with consistent padding and shadow"
4. "Update the Example page to use these new components"
```

## Useful Context to Provide

When requesting new pages/components, mention:
- **Purpose**: What is this for? (e.g., "for managing API routes")
- **Data**: What data will be displayed? (e.g., "list of users with name, email, status")
- **Actions**: What can users do? (e.g., "add new, edit, delete")
- **Navigation**: How do users get here? (e.g., "from dashboard sidebar")
- **Similar To**: Reference existing pages (e.g., "similar to the Example page but simpler")

## Quick Templates

### Simple List Page
```
Create a [ItemName] list page with:
- Header with title and "Add New" button
- Search/filter bar
- Table showing: [field1], [field2], [field3]
- Actions column with Edit and Delete buttons
```

### Simple Form Page
```
Create a [ItemName] form page with:
- Back button
- Form card with fields: [field list]
- Validation on required fields
- Save and Cancel buttons
```

### Dashboard Page
```
Create a dashboard with:
- Welcome header
- [Number] stat cards showing: [metrics]
- Recent activity table
- Quick action buttons
```

## Need Help?

Ask me to:
- "Show me examples of [component type]"
- "Explain how routing works"
- "Help me plan a [feature name] feature"
- "Review my page structure"
- "Suggest improvements for [page name]"

Remember: I can read your code, so you can reference existing files by name!
