# UI Components Migration Guide

## Current Codebase Components
Our Next.js codebase already has a solid layout foundation using:
- shadcn/ui components
- Tailwind CSS
- Radix UI primitives

## Component Mapping

### Navigation
- Use existing `Navbar` component
- Adapt styling to match Specify4IT's design
- Use shadcn/ui's `NavigationMenu` for desktop
- Use shadcn/ui's `Sheet` component for mobile menu

### Typography
- Keep current font stack (Helvetica Neue)
- Use existing typography styles from Tailwind config
- Font weights: 400 (normal), 500 (medium), 700 (bold)

### Buttons & Links
- Use existing shadcn/ui `Button` component
- Adapt colors to match Specify4IT's palette
- Keep current hover/focus states

### Layout
- Keep existing page layout structure
- Adapt max-width and padding to match Specify4IT
- Use current responsive breakpoints

### Feature Cards
- Use shadcn/ui `Card` component
- Add custom animations with Framer Motion
- Integrate feature icons from Specify4IT

### Contact Form
- Use shadcn/ui form components:
  - `Input`
  - `Textarea`
  - `Button`
- Keep current form validation

### Colors
- Adapt current theme to Specify4IT's dark color scheme
- Keep existing color variables structure
- Update Tailwind config accordingly

## Implementation Notes
1. Keep existing component architecture
2. Only modify styling to match Specify4IT
3. Reuse existing layout patterns
4. Integrate Specify4IT's icons and animations
5. Maintain current responsive behavior
