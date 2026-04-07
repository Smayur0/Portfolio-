# Portfolio

Personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **UI**: Tailwind CSS, shadcn/ui (new-york style), Radix UI primitives, Lucide icons
- **Animation**: Motion (framer-motion successor)
- **Data**: Redis via `@vercel/kv` and `redis` package
- **Deployment**: Vercel

## Project Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/app/pages/` — Page sections (hero, about, projects, experience, header, footer)
- `src/components/ui/` — shadcn/ui components
- `src/registry/` — Custom reusable components
- `src/features/data/` — Static data files (user info, projects, experience)
- `src/features/types/` — TypeScript type definitions
- `src/features/utills/` — Utility functions (redis, icons, utils)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

## Conventions

- Path alias: `@/*` maps to `./src/*`
- Use shadcn/ui components from `@/components/ui/`
- Follow existing file/folder naming patterns (kebab-case files, PascalCase components)
