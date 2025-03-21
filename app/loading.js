export default function Loading() {
  return (
    <section id="home" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/0 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Welcome to Our Platform
              </div>
              <div className="h-12 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-background border rounded-2xl p-8 shadow-lg">
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                      <div className="h-3 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 