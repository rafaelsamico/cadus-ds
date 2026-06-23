# Cadus DS

> A design system rooted in Brazilian identity — built with shadcn/ui.

---

## About

**Cadus DS** is a design system that speaks PT-BR.
Its color and type choices draw from the Brazilian territory.
Built on top of [shadcn/ui](https://ui.shadcn.com).

---

## Installation

```bash
npm install @rafaelsamico/cadus-ds
```

**Requirements:** React 19+

---

## Usage

Import the stylesheet once at your app's entry point:

```ts
import '@rafaelsamico/cadus-ds/index.css'
```

Then import components as needed:

```ts
import { Typography } from '@rafaelsamico/cadus-ds'
```

---

## Project Structure

```
cadus-ds/
├── public/
├── src/
│   ├── components/
│   │   ├── typography/  # Typography component
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # cn() and shared utilities
│   ├── App.tsx
│   ├── index.css        # Global styles
│   ├── index.ts         # Library entry point
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Design Tokens

### Colors

Four palettes, each named after a Brazilian landscape. Every palette ships **11 steps** (50 → 950) in [OKLCH](https://oklch.com) for perceptually uniform lightness scaling.

| Palette | Name | Role |
|---|---|---|
| `--mata-*` | Mata Atlântica | Primary |
| `--barro-*` | Barro Nordestino | Secondary |
| `--areia-*` | Areia Sertaneja | Neutrals |
| `--urucum-*` | Urucum Amazônico | Destructive |

Semantic tokens map the palettes to roles consumed by components:

```css
--background:  var(--areia-50);
--primary:     var(--mata-600);
--secondary:   var(--barro-600);
--destructive: var(--urucum-600);
--muted:       var(--areia-100);
--border:      var(--areia-200);
--ring:        var(--mata-500);
```

### Typography

Three typefaces, each with a semantic role — all self-hosted via [`@fontsource`](https://fontsource.org), no external requests at runtime.

| Role | Font | Variable |
|---|---|---|
| Display | [Archivo](https://fonts.google.com/specimen/Archivo) | `--font-display` |
| Body / UI | [Public Sans](https://fonts.google.com/specimen/Public+Sans) | `--font-sans` |
| Code | [IBM Plex Mono](https://www.ibm.com/plex/) | `--font-mono` |