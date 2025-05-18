import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="space-y-8 w-full py-12">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-6xl font-bold">Next.js Template</h1>
        <p className="text-muted-foreground w-1/2 text-center">
          A modern Next.js starter template with Tailwind CSS, shadcn/ui components, and TypeScript.
        </p>
        <div className="flex gap-4 pt-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Documentation
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Next.js 15</CardTitle>
            <CardDescription>The React framework for the web</CardDescription>
          </CardHeader>
          <CardContent>
            Built on the latest version of Next.js with App Router for powerful routing and server
            components.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>Utility-first CSS framework</CardDescription>
          </CardHeader>
          <CardContent>
            Rapidly build modern websites without ever leaving your HTML using the power of Tailwind
            CSS.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>UI component library</CardDescription>
          </CardHeader>
          <CardContent>
            A collection of beautifully designed, accessible, and customizable UI components.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
