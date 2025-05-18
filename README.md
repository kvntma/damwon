# Next.js Template

A modern, feature-rich Next.js starter template with Tailwind CSS, shadcn/ui components, and TypeScript.

## Features

- ⚡ [Next.js 15](https://nextjs.org/) - The React framework for the web
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components built with Radix UI and Tailwind
- 🌙 Dark mode support with next-themes
- 📱 Responsive design
- 📝 TypeScript support
- 🧹 Linting with Biome

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/next-template.git my-project
cd my-project
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
next-template/
├── public/             # Static files
├── src/                # Source files
│   ├── app/            # App router pages
│   ├── components/     # UI components
│   │   ├── ui/         # shadcn/ui components
│   ├── layouts/        # Layout components
│   ├── lib/            # Utility functions
│   ├── providers/      # Context providers
│   └── types/          # TypeScript types
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Changing the Theme

Modify the `tailwind.config.ts` file to customize the theme colors, fonts, and other design aspects.

### Adding New Components

This template uses shadcn/ui components. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
