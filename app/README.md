# Savv8 Web App 

## Project Overview
Savv8 is an AI-powered savings platform built as a single-page application (SPA) using React + TypeScript + Vite. 

## Architecture & Tech Stack
- **Framework**: React 18 + TypeScript + Vite (SWC compilation)
- **Routing**: React Router DOM (simple structure: Index page + 404)
- **Styling**: Tailwind CSS with custom design system + shadcn/ui components
- **State Management**: TanStack Query for server state, React hooks for local state
- **Icons**: Lucide React
- **Deployment**: Lovable platform (automatic from git commits)

## Project Structure Patterns

### Component Organization
```
app/src/components/
├── [ComponentName].tsx     # Page-level components (Hero, Features, etc.)
└── ui/                     # shadcn/ui component library

/infrastructure/            # Infrastructure components (API clients, etc.)
```

**Convention**: All components are TSX functional components with named exports. Page components are composed in `app/src/pages/Index.tsx` following a landing page structure.

### Design System Implementation
The project uses a **custom design system** defined in `src/index.css`:
- **Colors**: All HSL format with CSS custom properties (`--primary`, `--accent`, etc.)
- **Custom Gradients**: `--gradient-primary`, `--gradient-accent`, `--gradient-hero`
- **Custom Animations**: `fade-in`, `fade-in-up`, `scale-in`, `glow`
- **Custom Shadows**: `--shadow-glow` for accent effects

**Critical Pattern**: Use design tokens instead of arbitrary values:
```tsx
// ✅ Correct - uses design system
className="bg-gradient-hero text-primary-foreground shadow-glow"

// ❌ Avoid - arbitrary values
className="bg-blue-600 text-white shadow-xl"
```

### Import Patterns
**Absolute imports** configured via `@/` alias:
```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Development Workflow

### Package Manager
Uses **Bun** (note: `bun.lockb` present) but npm scripts are compatible.

### Key Commands
```bash
npm run dev          # Development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
```

### Component Development Pattern
1. **shadcn/ui components**: Pre-built in `src/components/ui/` - use as-is or extend
2. **Custom components**: Follow the pattern in existing components (Hero.tsx, AboutUs.tsx)
3. **Styling approach**: Combine Tailwind classes with custom design tokens
4. **Animation**: Use defined animations (`animate-fade-in`, `animate-scale-in`) with staggered delays

### Form Handling
See `WaitlistForm.tsx` for the established pattern:
- React hooks for state management
- Sonner for toast notifications
- Basic validation with user feedback
- Form submission handling with loading states

## Key Conventions

### Naming Patterns
- **Components**: PascalCase (e.g., `AboutUs.tsx`, `WaitlistForm.tsx`)
- **Files**: camelCase for utilities, PascalCase for components
- **CSS Classes**: Follow Tailwind + custom design system tokens

### State Management
- **Form State**: useState hooks for local component state
- **Global State**: TanStack Query for server state (configured in App.tsx)
- **Notifications**: Sonner toast system

### Accessibility & UX
- **Focus Management**: shadcn/ui components include proper ARIA attributes
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Smooth Scrolling**: `scroll-behavior: smooth` enabled globally
- **Loading States**: Always provide user feedback for async operations


## Security & Best Practices
- **Snyk Integration**: Follow security rules in `.github/instructions/snyk_rules.instructions.md`
- **TypeScript Strict**: Full type safety enforced
- **ESLint**: Modern flat config with React hooks and refresh plugins

## Critical Implementation Notes
1. **Design System First**: Always use CSS custom properties over arbitrary values
2. **Component Composition**: Leverage shadcn/ui base components, customize via className
3. **Animation Consistency**: Use predefined animations with consistent timing
4. **Responsive Images**: Always include alt text and proper sizing
5. **Form Validation**: Client-side validation with clear error messages

When adding new features, follow the established patterns in existing components and maintain consistency with the design system defined in `src/index.css`.