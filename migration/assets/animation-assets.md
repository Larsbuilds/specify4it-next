# Animation Assets

## Connections Animation Set
1. Static End Frame:
   - File: `Connections-1-frame-end.svg`
   - Usage: Initial static display and navbar animation
   - Location: `/images/animations/connections/`

2. Animation:
   - File: `Connections-1.gif`
   - Usage: Animated sequence
   - Location: `/images/animations/connections/`
   - Timing:
     - SVG display time: 2100ms
     - Transition time: 10ms

## Implementation Details

### 1. Component Structure
```typescript
// Component: AnimatedSvgGif
// Location: migration/components/animated-svg-gif.tsx

<AnimatedSvgGif
  svgSrc="/images/animations/connections/Connections-1-frame-end.svg"
  gifSrc="/images/animations/connections/Connections-1.gif"
  alt="Connections animation"
  width={400}
  height={300}
  transitionTime={10} // optional, defaults to 10ms
  svgTime={2100} // optional, defaults to 2100ms
/>
```

### 2. HTML Output
```html
<img 
  class="transition-opacity duration-[var(--transition-time)]"
  src="/images/animations/connections/Connections-1-frame-end.svg"
  data-gif="/images/animations/connections/Connections-1.gif"
  data-svg="/images/animations/connections/Connections-1-frame-end.svg"
  data-transition-time="10"
  data-svg-time="2100"
  alt="Connections animation"
  style="--transition-time: 10ms; opacity: 1;"
/>
```

### 3. Animation Hook
```typescript
// Hook: useSvgGifTransition
// Location: migration/components/use-svg-gif-transition.ts

// In your layout or page:
import { useSvgGifTransition } from '@/components/use-svg-gif-transition';

export default function Layout({ children }) {
  useSvgGifTransition(); // Handles all SVG-GIF transitions on the page
  return <>{children}</>;
}
```

## Asset Organization
```
public/
└── images/
    └── animations/
        └── connections/
            ├── Connections-1-frame-end.svg
            └── Connections-1.gif
```

## Animation Flow
1. Initial Load:
   - Display static SVG frame
   - Add data attributes for configuration
   - Preload GIF in background
2. After svgTime (2100ms):
   - Switch src to GIF
   - CSS handles transition with transitionTime (10ms)
3. Animation Cycle:
   - GIF plays through its sequence
   - Loops based on GIF settings

## Notes
1. Performance
   - SVGs and GIFs are preloaded
   - Uses CSS transitions for smooth switching
   - Minimal DOM manipulation

2. Accessibility
   - Proper alt text for screen readers
   - No motion if prefers-reduced-motion is set

3. Implementation
   - Data attributes for configuration
   - CSS custom properties for transitions
   - Hook-based animation management
