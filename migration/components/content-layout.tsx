import { cn } from '@/lib/utils'
import { Metadata } from 'next'

interface ContentLayoutProps {
  children: React.ReactNode
  className?: string
  metadata: ContentMetadata
}

export interface ContentMetadata {
  title: string
  subtitle?: string
  description: string
  keywords?: string[]
  authors?: string[]
  image?: string
  canonicalUrl?: string
  lastModified?: string
  features?: string[]
  structuredData?: Record<string, any>
}

export function generateMetadata(metadata: ContentMetadata): Metadata {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: metadata.authors?.map(author => ({ name: author })),
    openGraph: metadata.image ? {
      images: [metadata.image],
      type: 'website',
      title: metadata.title,
      description: metadata.description,
      url: metadata.canonicalUrl,
    } : undefined,
    twitter: metadata.image ? {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image],
    } : undefined,
    alternates: {
      canonical: metadata.canonicalUrl,
    },
    other: {
      'last-modified': metadata.lastModified,
    },
  }
}

export function ContentLayout({ children, className, metadata }: ContentLayoutProps) {
  return (
    <article className={cn('prose prose-slate dark:prose-invert mx-auto', className)}>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {metadata.title}
        </h1>
        {metadata.subtitle && (
          <p className="text-xl text-muted-foreground max-w-[750px] mx-auto">
            {metadata.subtitle}
          </p>
        )}
      </header>

      {metadata.features && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metadata.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <div className="w-12 h-12 shrink-0">
                {/* Use our feature icons */}
                <img
                  src={`/migration/assets/icons/feature/${feature}.svg`}
                  alt={`${feature} icon`}
                  className="w-full h-full"
                />
              </div>
              <h3 className="capitalize m-0">{feature}</h3>
            </div>
          ))}
        </div>
      )}

      {children}

      {metadata.lastModified && (
        <footer className="mt-12 text-sm text-muted-foreground">
          Last updated: {new Date(metadata.lastModified).toLocaleDateString()}
        </footer>
      )}
    </article>
  )
}
