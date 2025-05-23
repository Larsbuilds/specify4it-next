# Animation Patterns

## Navigation Animations

### Menu Links
```tsx
// Underline animation on hover
const menuLinkAnimation = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

// Usage with Framer Motion
<motion.div
  className="absolute bottom-0 left-0 h-0.5 w-full bg-primary origin-left"
  initial="initial"
  whileHover="hover"
  variants={menuLinkAnimation}
/>
```

### Mobile Menu
```tsx
// Slide in from right
const mobileMenuAnimation = {
  closed: { x: "100%" },
  open: { x: 0 },
  transition: { type: "spring", stiffness: 300, damping: 30 }
};

// Fade in menu items staggered
const menuItemsAnimation = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
  transition: { staggerChildren: 0.1 }
};
```

## Page Transitions

### Hero Section
```tsx
// Fade up and in on page load
const heroAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Staggered children animation
const heroChildrenAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, staggerChildren: 0.2 }
};
```

### Feature Grid
```tsx
// Fade in cards on scroll
const featureCardAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, margin: "-100px" }
};
```

## Interactive Elements

### Buttons
```tsx
// Scale and background color change
const buttonAnimation = {
  tap: { scale: 0.98 },
  hover: { scale: 1.02 },
  transition: { duration: 0.2 }
};

// Primary button background
const buttonBackgroundAnimation = {
  hover: { backgroundColor: "var(--primary-dark)" },
  transition: { duration: 0.3 }
};
```

### Read More Links
```tsx
// Arrow movement
const readMoreAnimation = {
  hover: { x: 5 },
  transition: { duration: 0.2 }
};
```

## Content Sections

### Section Entry
```tsx
// Fade in on scroll
const sectionAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "-50px" }
};
```

### Image Reveal
```tsx
// Slide reveal effect
const imageRevealAnimation = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  whileInView: { clipPath: "inset(0 0% 0 0)" },
  transition: { duration: 0.8, ease: "easeInOut" },
  viewport: { once: true }
};
```

## Implementation Notes

1. Performance Optimizations:
   - Use `transform` properties for animations when possible
   - Implement `will-change` for heavy animations
   - Use `viewport` options to prevent unnecessary animations

2. Accessibility:
   - Respect `prefers-reduced-motion` media query
   - Ensure animations don't interfere with screen readers
   - Keep animation durations reasonable (300-800ms)

3. Mobile Considerations:
   - Simplify animations on mobile devices
   - Reduce motion on slower devices
   - Consider battery impact
