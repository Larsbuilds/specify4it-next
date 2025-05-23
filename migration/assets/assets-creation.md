# Assets to Create

## Logo Design
Since we can't directly extract the logo, we need to create a new one:

1. Main Logo
```yaml
text: "Specify4IT"
colors:
  primary: "#3E7CB1"  # Our brand blue
  secondary: "#1A2B3C"  # Dark blue
font: "Helvetica Neue Bold"
variants:
  - full_color
  - white (for dark backgrounds)
sizes:
  - desktop: 200px width
  - mobile: 150px width
format: SVG
```

2. Favicon
```yaml
base: Logo mark (simplified version of main logo)
sizes:
  - 16x16
  - 32x32
  - 96x96
formats:
  - .ico (multi-size)
  - .png (fallback)
```

## Feature Icons
Modern, minimalist style icons for the four main features:

1. Check Icon
```yaml
style: "Line icon with 2px stroke"
color: "#3E7CB1"
concept: "Checkmark or validation symbol"
size: "24x24"
format: "SVG"
```

2. Animate Icon
```yaml
style: "Line icon with 2px stroke"
color: "#3E7CB1"
concept: "Motion or flow representation"
size: "24x24"
format: "SVG"
```

3. Deduce Icon
```yaml
style: "Line icon with 2px stroke"
color: "#3E7CB1"
concept: "Lightbulb or insight symbol"
size: "24x24"
format: "SVG"
```

4. Prove Icon
```yaml
style: "Line icon with 2px stroke"
color: "#3E7CB1"
concept: "Shield or verification mark"
size: "24x24"
format: "SVG"
```

## UI Icons

1. Menu Icon (Mobile)
```yaml
style: "Hamburger menu, 3 lines"
color: "#1A2B3C"
size: "24x24"
format: "SVG"
```

2. Arrow Icon
```yaml
style: "Simple right arrow"
color: "#3E7CB1"
size: "16x16"
format: "SVG"
variants:
  - right (default)
  - down (for dropdowns)
```

3. Email Icon
```yaml
style: "Simple envelope"
color: "#3E7CB1"
size: "24x24"
format: "SVG"
```

## Implementation Plan

1. Logo Creation:
   - Design in Figma/Illustrator
   - Export in multiple formats
   - Test in different sizes

2. Feature Icons:
   - Use Lucide React icons where possible
   - Create custom icons only if necessary
   - Maintain consistent style

3. UI Icons:
   - Use Lucide React for standard UI icons
   - Ensure consistent sizing and colors
   - Test in dark/light modes

## Asset Organization
```
public/
├── images/
│   ├── logo.svg
│   ├── logo-white.svg
│   └── favicon.ico
└── icons/
    ├── feature/
    │   ├── check.svg
    │   ├── animate.svg
    │   ├── deduce.svg
    │   └── prove.svg
    └── ui/
        ├── menu.svg
        ├── arrow.svg
        └── email.svg
```
