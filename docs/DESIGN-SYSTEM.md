# Design System — FreelaPilot
> Extraído da referência `LP ANTIGA.pdf` (2 páginas, export do Figma/web).
> Produto: **FreelaPilot** — "O hub do designer freelancer". SaaS de gestão (projetos, clientes, contratos, financeiro) para freelancers.

---

## 1. Marca

| Item | Valor |
|------|-------|
| Nome | **FreelaPilot** (wordmark: "Freela" cinza + "Pilot" violeta-escuro) |
| Símbolo | Ícone de avião de papel / seta "7" estilizada, em gradiente violeta |
| Tagline (hero) | *O hub do **designer freelancer*** |
| Sub-tagline | Organize projetos, clientes, contratos e financeiro em um só lugar. |
| Tom de voz | Profissional, encorajador, "decolagem/voar" (aviação) — leve, direto, focado em organização e resultado |

---

## 2. Cores (amostradas da referência)

### Marca / Violeta
| Token | Hex | Uso |
|-------|-----|-----|
| `--brand-50`  | `#F2EEFE` | fundos de chips, ícones suaves |
| `--brand-100` | `#E4DCFB` | bordas/realces leves |
| `--brand-300` | `#C4B5FD` | detalhes, avatares |
| `--brand-400` | `#A78BFA` | hover/ilustração |
| `--brand-500` | `#8060E0` | **cor de marca principal** (card "Pro", textos de destaque) |
| `--brand-600` | `#6D28D9` | botões, estados ativos |
| `--brand-700` | `#581088` | fim do gradiente, sombras profundas |

### Gradiente primário (CTAs, símbolo do logo)
```
linear-gradient(135deg, #7C3AED 0%, #6018C8 60%, #A445D8 100%)
```
> Botão "Testar agora" e ícone do logo usam violeta → magenta.

### Neutros (tema claro)
| Token | Hex | Uso |
|-------|-----|-----|
| `--bg`        | `#F5F3FB` | fundo da página (lavanda-branco) |
| `--bg-soft`   | `#FBFAFE` | seções alternadas |
| `--surface`   | `#FFFFFF` | cards, mockups, navbar |
| `--stroke`    | `#ECE7F7` | bordas de card (1px) |
| `--ink`       | `#1B1730` | títulos / texto forte (near-black navy) |
| `--text`      | `#3A3550` | texto de corpo |
| `--muted`     | `#7A7690` | legendas, subtítulos |

### Semânticas / suporte
| Token | Hex | Uso |
|-------|-----|-----|
| `--success` | `#22C55E` | status "online", checks dos planos |
| `--star`    | `#FBBF24` | estrelas das avaliações |
| Card escuro destaque (plano Pro) | fundo `#6D28D9`→`#8060E0`, texto branco |

---

## 3. Tipografia
- **Headings (display):** sans geométrica bold/extrabold — recomendo **Sora** ou **Poppins** (700–800).
- **Corpo / UI:** humanista — **Inter** (400–600).
- Títulos com `letter-spacing: -0.02em`, line-height apertado (~1.05).

| Papel | Tamanho (desktop) | Peso |
|-------|-------------------|------|
| H1 hero | 56–72px | 800 |
| H2 seção | 36–48px | 800 |
| H3 card | 20–22px | 700 |
| Lead/sub | 18–20px | 400 |
| Corpo | 15–16px | 400 |
| Eyebrow/label | 13px, `letter-spacing .12em`, uppercase | 600 |
| Preço (R$XX) | 40–48px | 800 |

---

## 4. Forma & estilo
| Token | Valor |
|-------|-------|
| `--radius-sm` | 12px (chips, inputs) |
| `--radius`    | 18px (cards) |
| `--radius-lg` | 24px (cards de plano, mockups) |
| `--radius-pill` | 100px (botões, badges) |
| Sombra card | `0 10px 40px rgba(108, 70, 200, .08)` |
| Sombra flutuante (mockups hero) | `0 24px 70px rgba(80, 60, 160, .18)` |
| Bordas | 1px `--stroke`, cantos bem arredondados |
| Espaçamento | base 8px; seções com padding vertical 96–120px |
| Container | max-width ~1180px, padding lateral 24px |

---

## 5. Componentes

**Botão primário** — gradiente violeta→magenta, texto branco, pill, ícone "→", sombra violeta no hover.
**Botão secundário** — fundo branco/`--surface`, borda `--stroke`, texto `--ink`, ícone "▷" (Ver demo).
**Badge/pill** — fundo branco translúcido, borda leve, dot de status `--success` + texto curto.
**Card de feature** — surface branco, ícone em quadrado arredondado com fundo `--brand-50`, título + parágrafo `--muted`. Hover: leve elevação + borda violeta.
**Card de plano** — branco com borda; o do meio (**Pro**) é o destaque: fundo gradiente violeta escuro, texto branco, lista com checks, botão branco. Free/Business: brancos com botão violeta/outline.
**Depoimento** — card branco, avatar circular, nome + papel `--muted`, 5 estrelas `--star`, texto da citação.
**Mockups flutuantes (hero)** — cards de dashboard (stats, gráfico donut "Financeiro") sobrepostos, com sombra forte e leve flutuação/parallax.

---

## 6. Arquitetura de conteúdo (seções da LP)
1. **Navbar** — logo · Recursos · Ferramentas · Preços · Depoimentos · `Entrar agora`
2. **Hero** — badge ("disponível/novo") · H1 "O hub do designer freelancer" · sub · CTAs (Testar agora / Ver demo) · prova social (stack de avatares + ★★★★★ + "+2000 designers...") · visual com dashboard mockup + pills de features
3. **5 Ferramentas Poderosas** — sub "Tudo que você precisa para gerenciar seu negócio como freelancer profissional" · cards: **Financeiro**, **Kanban + Notas**, **Prospecção**, **Briefings**, **Contratos** + card CTA
4. **O que dizem os freelancers** — 5 depoimentos com estrelas
5. **Planos simples e transparentes** — 3 tiers:
   - **Free — R$0/mês**: 1 projeto financeiro · 1 quadro Kanban · Briefings básicos · Suporte por email
   - **Pro — R$29/mês** *(destaque)*: Projetos ilimitados · Kanban ilimitado · Contratos DOCX · Prospecção avançada · Suporte premium · Sem marca d'água
   - **Business — R$79/mês**: Tudo do Pro · Multi-usuário · API access · Onboarding dedicado · SLA garantido
6. **CTA final** — "Pronto para decolar?" · "Junte-se a milhares de freelancers..." · `Criar conta grátis`
7. **Footer** — logo + tagline · links (Política de Privacidade, Termos de Uso, Termos de Serviço, Central de Ajuda, Status do Sistema) · copyright · indicador de status

---

## 7. Direção de movimento (para a nova LP)
Manter o espírito "decolagem": entradas suaves de baixo→cima, mockups do hero com flutuação leve e parallax, contadores na prova social, hover de elevação nos cards, gradiente animado sutil no símbolo. Tema **claro** — animações discretas e elegantes (não o visual dark/neon do rascunho anterior).
