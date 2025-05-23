# Component Library

## Navigation Components

### MainNav
- Sticky header with full-width background
- Logo on left
- Navigation links centered/right
- Contact button on far right
```tsx
// Usage structure
<header className="sticky top-0 bg-white shadow-sm">
  <nav className="container mx-auto px-content flex items-center h-20">
    <Logo />
    <NavLinks />
    <ContactButton />
  </nav>
</header>
```

### NavLinks
- Horizontal list on desktop
- Vertical menu on mobile
- Active state indicator
- Hover animations
```tsx
// Link styling
<a className="px-4 py-2 text-text-secondary hover:text-primary transition-colors relative
            after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
            after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform" />
```

## Hero Components

### MainHero
- Full-width background
- Large heading with emphasis
- Subtext description
- Call-to-action button
```tsx
// Structure
<section className="bg-background-secondary py-section">
  <div className="container mx-auto px-content text-center">
    <h1 className="text-h1 font-bold text-primary-dark mb-6">
      {title}
    </h1>
    <p className="text-text-secondary max-w-2xl mx-auto mb-8">
      {description}
    </p>
    <CTAButton />
  </div>
</section>
```

### FeatureGrid
- 2x2 grid on desktop
- Single column on mobile
- Icon + heading + text pattern
```tsx
// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-grid">
  <FeatureCard />
  {/* Repeat for other features */}
</div>
```

## Content Components

### SectionHeading
- Left-aligned headings
- Optional subtext
- Consistent spacing
```tsx
// Usage
<div className="mb-section">
  <h2 className="text-h2 font-bold text-primary-dark mb-4">
    {title}
  </h2>
  {subtext && (
    <p className="text-text-secondary">{subtext}</p>
  )}
</div>
```

### ContentSection
- Two-column layout on desktop
- Single column on mobile
- Optional image placement
```tsx
// Structure
<section className="py-section">
  <div className="container mx-auto px-content grid grid-cols-1 md:grid-cols-2 gap-grid items-center">
    <div className="prose">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
    {image && (
      <div className="rounded-lg overflow-hidden">
        <Image {...image} />
      </div>
    )}
  </div>
</section>
```

### CTAButton
- Primary and secondary variants
- Consistent padding and radius
- Hover animations
```tsx
// Primary variant
<button className="bg-primary text-white px-6 py-3 rounded font-medium
                  hover:bg-primary-dark transition-colors" />

// Secondary variant
<button className="border-2 border-primary text-primary px-6 py-[10px] rounded font-medium
                  hover:bg-primary hover:text-white transition-colors" />
```

### FeatureCard
- Consistent padding
- Icon at top
- Heading and description
- Optional link
```tsx
// Structure
<div className="bg-white p-content rounded-lg shadow-card">
  <div className="mb-4">{icon}</div>
  <h4 className="text-h4 font-bold text-primary-dark mb-2">
    {title}
  </h4>
  <p className="text-text-secondary mb-4">
    {description}
  </p>
  {link && <CardLink />}
</div>
```

## Footer Components

### MainFooter
- Full-width dark background
- Navigation links
- Company information
- Contact details
```tsx
// Structure
<footer className="bg-primary-dark text-white py-section">
  <div className="container mx-auto px-content">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-grid">
      <FooterNav />
      <CompanyInfo />
      <ContactInfo />
    </div>
  </div>
</footer>
```

## Interactive Elements

### EmailLink
- Mailto link styling
- Hover state
- Optional icon
```tsx
// Usage
<a href="mailto:email@example.com"
   className="text-primary hover:text-primary-dark transition-colors
              inline-flex items-center gap-2">
  {icon && <EmailIcon />}
  <span>{text}</span>
</a>
```

### ReadMoreLink
- Consistent styling
- Arrow indicator
- Hover animation
```tsx
// Usage
<a href={href}
   className="text-primary font-medium inline-flex items-center gap-1
              hover:gap-2 transition-all">
  <span>{text}</span>
  <ArrowIcon />
</a>
```

## Responsive Patterns

### ResponsiveContainer
- Max-width container
- Consistent padding
- Breakpoint handling
```tsx
// Usage
<div className="container mx-auto px-4 md:px-content">
  {children}
</div>
```

### ResponsiveGrid
- Flexible grid system
- Responsive column counts
- Consistent gaps
```tsx
// Usage
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid">
  {children}
</div>
```
