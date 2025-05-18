'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/providers/theme-provider';
import { Home, Info, Settings } from 'lucide-react';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      <div className="min-h-screen w-full bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="min-w-full flex h-14 items-center justify-between px-4 lg:px-8">
            <div className="flex w-full items-center space-x-8">
              <a href="/" className="text-xl font-bold text-primary">
                Next Template
              </a>
              <nav className="flex items-center space-x-6">
                <a
                  href="/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </a>
                <a
                  href="/about"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Info className="h-4 w-4" />
                  <span>About</span>
                </a>
                <a
                  href="/settings"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button size="sm">Sign up</Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="min-w-full">
          <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
