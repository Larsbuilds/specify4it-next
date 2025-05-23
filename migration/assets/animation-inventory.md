# Animation Assets Inventory

## 1. SVG-GIF Animations

### Connections Series
1. Connections-1
   ```yaml
   static: "Connections-1-frame-end.svg"
   animated: "Connections-1.gif"
   timing:
     svgDisplay: 2100ms
     transition: 10ms
   location: "/images/"
   ```

### Required Directory Structure
```
public/
├── images/
│   ├── animations/
│   │   ├── connections/
│   │   │   ├── Connections-1-frame-end.svg
│   │   │   └── Connections-1.gif
│   │   └── features/
│   │       └── # Feature-specific animations
│   └── static/
│       └── # Static images and SVGs
```

## 2. UI Animations (Using Framer Motion)

### Navigation
```typescript
// Hover animations for nav links
const navLinkHover = {
  initial: { width: 0 },
  hover: { width: "100%" },
  transition: { duration: 0.3 }
};
```

### Feature Cards
```typescript
// Fade in on scroll
const featureReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

### Button Interactions
```typescript
// Button hover and tap effects
const buttonAnimation = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  transition: { duration: 0.2 }
};
```

## 3. Page Transitions

### Content Sections
```typescript
// Stagger children animations
const contentReveal = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { staggerChildren: 0.2 }
};
```

## Implementation Notes

1. SVG-GIF Animations:
   - Use the `AnimatedSvgGif` component
   - Place files in appropriate directories
   - Optimize GIFs for web performance

2. UI Animations:
   - Implement using Framer Motion
   - Keep animations subtle and purposeful
   - Consider reduced-motion preferences

3. Performance Considerations:
   - Lazy load below-the-fold animations
   - Use `priority` prop for critical images
   - Implement proper loading states

## Required Files Checklist

### Animations
- [ ] Connections-1-frame-end.svg
- [ ] Connections-1.gif
- [ ] Any additional animation sets found

### Static Assets
- [ ] Feature icons
- [ ] UI elements
- [ ] Background patterns (if any)

## Component Usage Example

```tsx
// In your page or component:
import { AnimatedSvgGif } from '@/components/animated-svg-gif'

export default function HomePage() {
  return (
    <section className="hero">
      <AnimatedSvgGif
        svgSrc="/images/animations/connections/Connections-1-frame-end.svg"
        gifSrc="/images/animations/connections/Connections-1.gif"
        alt="Connections visualization"
        width={400}
        height={300}
      />
    </section>
  )
}
```
