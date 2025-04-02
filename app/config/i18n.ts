import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'de'] as const;
export type Locale = typeof locales[number];

export const defaultLocale = 'en' as const;

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export default getRequestConfig(async ({ locale }) => {
  if (!isValidLocale(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
