# SEO and Metadata Configuration

## Global Metadata
```yaml
site_name: "Specify4IT"
default_title: "Specify4IT - Error Free Code from Provable Specifications"
default_description: "Specify4IT is an innovative automated reasoning toolset that creates error-free code from provable specifications for relational database software."
default_keywords: "software specification, error-free code, automated reasoning, database software, provable specifications"
author: "Precision Design Technology Ltd"
```

## Page-Specific Metadata

### Home Page
```yaml
title: "Specify4IT - Innovative Software Specification Technology"
description: "Create error-free relational database software with Specify4IT's automated reasoning toolset. Generate code automatically from provable specifications."
og_type: "website"
```

### Product Page
```yaml
title: "Specify4IT Product - Automated Software Specification Tools"
description: "Learn how Specify4IT's innovative technology creates error-free database systems faster through mathematical proofs and automated code generation."
og_type: "product"
```

### About Page
```yaml
title: "About Specify4IT - Our Background and Expertise"
description: "Discover how John Warren's 50-year career in software engineering led to the development of Specify4IT's revolutionary software specification method."
og_type: "profile"
```

## Open Graph Default Configuration
```yaml
og:
  site_name: "Specify4IT"
  type: "website"
  image: "/og-image.jpg"
  image_width: "1200"
  image_height: "630"
```

## Twitter Card Configuration
```yaml
twitter:
  card: "summary_large_image"
  site: "@specify4it"
  image: "/twitter-card.jpg"
```

## robots.txt Content
```txt
User-agent: *
Allow: /
Disallow: /private/
Sitemap: https://specify4it.com/sitemap.xml
```

## Sitemap Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://specify4it.com/</loc>
    <lastmod>2024-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://specify4it.com/product</loc>
    <lastmod>2024-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://specify4it.com/about</loc>
    <lastmod>2024-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Implementation Notes

1. Meta Tags Implementation:
```tsx
// In app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://specify4it.com'),
  title: {
    default: 'Specify4IT',
    template: '%s | Specify4IT'
  },
  description: 'Create error-free relational database software with Specify4IT's automated reasoning toolset.',
  openGraph: {
    // ... OpenGraph configuration
  },
  twitter: {
    // ... Twitter card configuration
  }
}
```

2. Structured Data:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Specify4IT",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
}
```
