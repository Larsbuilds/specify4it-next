# Icon Assets Inventory

## Feature Icons
1. Check Icon
   ```yaml
   path: "feature/check.svg"
   size: 64,304 bytes
   usage: "Feature - Conflict checking"
   ```

2. Animate Icon
   ```yaml
   path: "feature/animate.svg"
   size: 38,755 bytes
   usage: "Feature - User behavior specification"
   ```

3. Deduce Icon
   ```yaml
   path: "feature/deduce.svg"
   size: 61,819 bytes
   usage: "Feature - Customer requirements"
   ```

4. Prove Icon
   ```yaml
   path: "feature/prove.svg"
   size: 62,720 bytes
   usage: "Feature - Application properties"
   ```

## UI Icons
1. Footer Logo Mobile
   ```yaml
   path: "ui/footerlogomob.svg"
   size: 1,963 bytes
   usage: "Mobile footer logo"
   ```

## Current Directory Structure
```
migration/
└── assets/
    └── icons/
        ├── feature/
        │   ├── animate.svg
        │   ├── check.svg
        │   ├── deduce.svg
        │   └── prove.svg
        └── ui/
            └── footerlogomob.svg
```

## Implementation

### Icon Component
```tsx
interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  name: string
  size?: number
}

export const Icon = ({ name, size = 24, className, ...props }: IconProps) => (
  <img
    src={`/images/static/icons/${name}.svg`}
    alt={`${name} icon`}
    width={size}
    height={size}
    className={cn('inline-block', className)}
    {...props}
  />
)
```

### Usage Examples
```tsx
// Feature icons
<Icon name="feature/check" />
<Icon name="feature/animate" />
<Icon name="feature/deduce" />
<Icon name="feature/prove" />

// UI icons
<Icon name="ui/menu" />
<Icon name="ui/arrow" />
<Icon name="ui/email" />
```

## Icons Checklist
- [ ] check.svg
- [ ] animate.svg
- [ ] deduce.svg
- [ ] prove.svg
- [ ] menu.svg (if exists)
- [ ] arrow.svg (if exists)
- [ ] email.svg (if exists)

## Notes
1. Save all original SVGs from the website
2. Maintain original colors and styling
3. Optimize SVGs for web use
4. Test in both light and dark modes
5. Ensure consistent sizing across usage
