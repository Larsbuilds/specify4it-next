declare module 'next-themes' {
  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    attribute?: string;
    value?: { [x: string]: string };
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
    storageKey?: string;
    themes?: string[];
    forcedTheme?: string;
  }

  export interface UseThemeProps {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    forcedTheme: string | undefined;
    resolvedTheme: string | undefined;
    themes: string[];
    systemTheme: string | undefined;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export function useTheme(): UseThemeProps;
} 