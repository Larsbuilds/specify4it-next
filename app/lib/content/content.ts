import { PageContent } from "./types"

export async function getPageContent(locale: string = "en"): Promise<PageContent> {
  // In a real app, this would fetch from an API or CMS
  // For now, we'll load from local JSON files
  try {
    const content = await import(`../../../content/${locale}.json`)
    return content.default as PageContent
  } catch (error) {
    console.error(`Failed to load content for locale ${locale}:`, error)
    // Fallback to English
    if (locale !== "en") {
      return getPageContent("en")
    }
    throw error
  }
}

export async function getAvailableLocales(): Promise<string[]> {
  // In a real app, this would be dynamic
  return ["en", "de"]
}
