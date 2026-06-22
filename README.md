# FreelaPilot — Landing Page

Landing page do **FreelaPilot**, o hub de gestão para designers freelancers
(financeiro, Kanban, notas, mapa mental, CRM, pagamentos PIX/cartão e mais).

Tema claro, marca violeta, tipografia **DM Sans**, recheada de movimento.

## Stack
- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Motion** (animações) · **Radix UI** (accordion, avatar) · **lucide-react**

## Rodando localmente
```bash
npm install
npm run dev
# http://localhost:3000
```

## Estrutura
```
src/
├─ app/            layout, page, globals.css (design tokens)
├─ lib/            site.ts (todo o conteúdo) · utils.ts
└─ components/
   ├─ ui/          button, avatar, nav-bar (tubelight)
   ├─ magic/       text-effect, blur-fade, marquee, card-swap,
   │               border-glow, glass-icon, container-scroll,
   │               testimonials-column, number-ticker, app-image
   └─ sections/    header, hero, logos, pain, solution, features,
                   stats, feature-deep, showcase, demo, testimonials,
                   pricing, cta, footer
```

## Imagens
As telas do app entram em `public/app/` (`dashboard.png`, `financeiro.png`,
`kanban.png`, `notas.png`, `mapa.png`, `pagamentos.png`, `crm.png`). Enquanto
não existem, os componentes mostram um placeholder.

## Docs
Copy e design system em [`docs/`](./docs).

## Deploy
Pronto para deploy na [Vercel](https://vercel.com) (zero config).
