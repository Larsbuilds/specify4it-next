# Typography Inventory

## Font Stack
Primary Font: Helvetica Neue
```css
font-family: "Helvetica Neue", Arial, sans-serif;
```

## Required Font Files
Since Helvetica Neue is a system font, no custom font files are needed. The system will fall back to Arial and then sans-serif if Helvetica Neue is not available.

## Font Weights Used
- Regular (400)
- Medium (500)
- Bold (700)

## Font Loading Strategy
1. Use system fonts to avoid additional network requests
2. Implement font-display: swap for optimal loading performance
3. Use consistent fallbacks across all components

## CSS Implementation
```css
/* Base font settings */
body {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Font weight utilities */
.font-normal {
  font-weight: 400;
}

.font-medium {
  font-weight: 500;
}

.font-bold {
  font-weight: 700;
}
```
