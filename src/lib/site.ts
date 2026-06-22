import {
  Wallet,
  KanbanSquare,
  StickyNote,
  Network,
  AlarmClock,
  EyeOff,
  UserMinus,
  Repeat2,
  Layers,
  Clock,
  BadgeCheck,
  LayoutGrid,
  Boxes,
  Tag,
  MessageSquareQuote,
  CreditCard,
  Users,
  FileText,
  FileSignature,
  Search,
  Bot,
  LayoutDashboard,
} from "lucide-react";

export const siteConfig = {
  name: "FreelaPilot",
  tagline: "O hub do designer freelancer",
  description:
    "Organize projetos, clientes, contratos e financeiro em um só lugar. A plataforma de gestão feita para designers freelancers.",
  url: "https://freelapilot.com.br",
  cta: { label: "Testar grátis", href: "#precos" },
  login: { label: "Entrar", href: "#" },
};

export const nav = [
  { name: "Recursos", url: "#solucao", icon: LayoutGrid },
  { name: "Funcionalidades", url: "#funcionalidades", icon: Boxes },
  { name: "Preços", url: "#precos", icon: Tag },
  { name: "Depoimentos", url: "#depoimentos", icon: MessageSquareQuote },
];

export const heroRotating = [
  "Finanças",
  "Projetos",
  "Tarefas",
  "Contratos",
  "Leads",
  "Pagamentos",
];

// fotos placeholder (troque por avatares reais quando tiver)
export const heroAvatars = [
  { src: "https://i.pravatar.cc/96?img=12", name: "Ana", initials: "AN" },
  { src: "https://i.pravatar.cc/96?img=32", name: "Bruno", initials: "BR" },
  { src: "https://i.pravatar.cc/96?img=5", name: "Carla", initials: "CA" },
  { src: "https://i.pravatar.cc/96?img=68", name: "Diego", initials: "DI" },
  { src: "https://i.pravatar.cc/96?img=47", name: "Elisa", initials: "EL" },
];

// faixa contínua: ícone + título de funcionalidade
export const marqueeFeatures = [
  { icon: Wallet, label: "Financeiro completo" },
  { icon: KanbanSquare, label: "Kanban intuitivo" },
  { icon: Users, label: "CRM integrado" },
  { icon: FileText, label: "Briefing automático" },
  { icon: StickyNote, label: "Notas inteligentes" },
  { icon: Network, label: "Mapa mental" },
  { icon: CreditCard, label: "Pagamentos por PIX" },
  { icon: FileSignature, label: "Contratos em DOCX" },
  { icon: Search, label: "Prospecção de leads" },
  { icon: LayoutDashboard, label: "Dashboard do negócio" },
  { icon: Bot, label: "Agentes de IA" },
];

/* ---- Seção: A Dor ---- */
export const pain = {
  eyebrow: "O problema",
  title: "Você não é desorganizado. Você só tem ferramentas demais.",
  lead: "Planilha aqui, WhatsApp ali, e-mail acolá. No fim do mês a conta não fecha e o prazo já estourou.",
  items: [
    {
      icon: AlarmClock,
      title: "Projetos atrasados",
      desc: "Sem visão clara das tarefas, os prazos estouram e o cliente cobra.",
    },
    {
      icon: EyeOff,
      title: "Dinheiro no escuro",
      desc: "Planilhas soltas e você nunca sabe quanto realmente sobrou no fim do mês.",
    },
    {
      icon: UserMinus,
      title: "Clientes escapando",
      desc: "Propostas e follow-ups que se perdem entre o WhatsApp, o e-mail e a memória.",
    },
    {
      icon: Repeat2,
      title: "Retrabalho sem fim",
      desc: "Briefing incompleto vira revisão infinita e hora não paga.",
    },
  ],
  close: "O problema nunca foi você. É a falta de um lugar só.",
};

/* ---- Seção: A Solução ---- */
export const solution = {
  eyebrow: "A solução",
  title: "Conheça o FreelaPilot",
  body: "O FreelaPilot reúne financeiro, projetos, Kanban, notas, mapa mental, CRM de prospecção e até pagamentos por PIX e cartão — num painel só, simples e bonito. Do primeiro contato ao recebimento, você no controle. E ainda instala como web app, com agentes de IA para acelerar o dia a dia.",
  pillars: [
    {
      icon: Layers,
      title: "Centralize tudo",
      desc: "Um só login para o seu negócio inteiro.",
    },
    {
      icon: Clock,
      title: "Ganhe tempo",
      desc: "Menos abas abertas, mais entregas no prazo.",
    },
    {
      icon: BadgeCheck,
      title: "Seja profissional",
      desc: "Contratos, propostas e relatórios com a sua cara.",
    },
  ],
};

/* ---- Seção: Ferramentas (resumo, bento claro) ---- */
export const features = [
  {
    key: "financeiro",
    icon: Wallet,
    title: "Financeiro",
    desc: "Receitas, despesas e a margem real de cada projeto.",
    img: "/app/financeiro.png",
    span: "lg:col-span-2",
  },
  {
    key: "kanban",
    icon: KanbanSquare,
    title: "Kanban",
    desc: "Cada projeto em quadros visuais, do briefing à entrega.",
    img: "/app/kanban.png",
    span: "",
  },
  {
    key: "notas",
    icon: StickyNote,
    title: "Notas",
    desc: "Ideias, anexos e rascunhos num só lugar, com cores e busca.",
    img: "/app/notas.png",
    span: "",
  },
  {
    key: "mapa",
    icon: Network,
    title: "Mapa mental",
    desc: "Estruture ideias e planeje projetos colaborando em tempo real.",
    img: "/app/mapa.png",
    span: "",
  },
  {
    key: "pagamentos",
    icon: CreditCard,
    title: "Pagamentos",
    desc: "Receba por PIX ou cartão numa página de pagamento sua.",
    img: "/app/pagamentos.png",
    span: "",
  },
];

export const featuresHighlight = {
  title: "E ainda: Dashboard, CRM, Pagamentos e Agentes de IA",
  desc: "Prospecção completa (pipeline, envios e extrator de leads), recebimento por PIX e cartão, contratos e assistentes de IA — tudo incluso. E o FreelaPilot instala como web app no seu celular.",
  cta: "Ver todos os recursos",
};

/* ---- Seção: Números ---- */
export const stats = [
  { value: 2000, prefix: "", suffix: "+", label: "Freelancers ativos" },
  { value: 5000, prefix: "", suffix: "+", label: "Projetos gerenciados" },
  { value: 30, prefix: "R$", suffix: "M+", label: "Receita organizada" },
  { value: 98, prefix: "", suffix: "%", label: "Recomendam" },
];

/* ---- Seções deep-dive (1 por funcionalidade) ---- */
export const deepDives = [
  {
    key: "financeiro",
    icon: Wallet,
    eyebrow: "Financeiro",
    title: "Saiba exatamente quanto você ganha",
    highlight: ["ganha"],
    desc: "Controle receitas, despesas e a margem real de cada projeto. Chega de descobrir no fim do mês que trabalhou quase de graça.",
    checklist: [
      "Receitas e despesas por projeto",
      "Gráficos e relatórios automáticos",
      "Reserva e metas financeiras",
      "Avisos de pagamento",
    ],
    img: "/app/financeiro.png",
    reverse: false,
  },
  {
    key: "pagamentos",
    icon: CreditCard,
    eyebrow: "Pagamentos",
    title: "Receba de qualquer cliente, na hora",
    highlight: ["hora"],
    desc: "Seus clientes pagam por PIX ou cartão direto numa página de pagamento sua. Sem boleto perdido, sem cobrança chata — o dinheiro cai e você acompanha tudo.",
    checklist: [
      "Página de pagamento própria",
      "PIX e cartão de crédito",
      "Link pronto para enviar ao cliente",
      "Acompanhe cada recebimento",
    ],
    img: "/app/pagamentos.png",
    reverse: true,
  },
  {
    key: "kanban",
    icon: KanbanSquare,
    eyebrow: "Kanban",
    title: "Cada projeto sob controle, do briefing à entrega",
    highlight: ["controle"],
    desc: "Organize suas demandas em quadros visuais. Veja o que está em andamento e nunca mais perca um prazo.",
    checklist: [
      "Quadros e colunas personalizáveis",
      "Prazos e prioridades",
      "Templates prontos",
      "Colaboração com o cliente",
    ],
    img: "/app/kanban.png",
    reverse: false,
  },
  {
    key: "crm",
    icon: Users,
    eyebrow: "CRM & Prospecção",
    title: "Encha sua agenda de clientes",
    highlight: ["clientes"],
    desc: "Capture, organize e converta leads com um CRM feito para freelancer: pipeline, planilhas, envios e extrator de leads, tudo num lugar.",
    checklist: [
      "Pipeline de oportunidades (em breve)",
      "Extrator e planilhas de leads",
      "Envios e follow-ups",
      "Integração com WhatsApp (em breve)",
    ],
    img: "/app/crm.png",
    reverse: true,
  },
  {
    key: "notas",
    icon: StickyNote,
    eyebrow: "Notas",
    title: "Suas ideias e arquivos, sempre à mão",
    highlight: ["mão"],
    desc: "Capture rascunhos, links e anexos num só lugar — com cores, busca e organização de verdade.",
    checklist: [
      "Notas com cores e tags",
      "Anexos e imagens",
      "Busca instantânea",
      "Arquivo e lixeira",
    ],
    img: "/app/notas.png",
    reverse: false,
  },
  {
    key: "mapa",
    icon: Network,
    eyebrow: "Mapa mental",
    title: "Tire as ideias da cabeça e estruture projetos",
    highlight: ["projetos"],
    desc: "Planeje campanhas e projetos com mapas mentais colaborativos, salvos automaticamente.",
    checklist: [
      "Mapas colaborativos em tempo real",
      "Salvamento automático",
      "Templates",
      "Exportação",
    ],
    img: "/app/mapa.png",
    reverse: true,
  },
];

/* ---- Seção: Showcase (CardSwap) ---- */
export const showcase = {
  eyebrow: "Em ação",
  title: "Veja o FreelaPilot trabalhando por você",
  desc: "Do financeiro ao Kanban, tudo conversa entre si num painel só. Comece grátis e organize seu negócio hoje mesmo.",
  cta: "Começar grátis",
  cards: [
    { img: "/app/dashboard.png", alt: "Dashboard" },
    { img: "/app/financeiro.png", alt: "Financeiro" },
    { img: "/app/kanban.png", alt: "Kanban" },
    { img: "/app/notas.png", alt: "Notas" },
  ],
};

/* ---- Seção: Demonstração ---- */
export const demo = {
  eyebrow: "Veja na prática",
  title: "Uma volta de 2 minutos pelo FreelaPilot",
  desc: "Veja como é simples organizar o seu negócio do começo ao fim.",
  img: "/app/dashboard.png",
};

/* ---- Depoimentos ---- */
export const testimonials = [
  {
    name: "Ana Souza",
    role: "Designer UI/UX",
    image: "https://i.pravatar.cc/96?img=5",
    text: "O FreelaPilot mudou completamente minha gestão financeira. Finalmente sei quanto ganho de verdade!",
  },
  {
    name: "Marcos Oliveira",
    role: "Designer Gráfico",
    image: "https://i.pravatar.cc/96?img=12",
    text: "O Kanban integrado com notas é simplesmente incrível. Recomendo para todo freelancer!",
  },
  {
    name: "Julia Costa",
    role: "Ilustradora",
    image: "https://i.pravatar.cc/96?img=45",
    text: "Os contratos automáticos me economizam horas por semana. Vale cada centavo!",
  },
  {
    name: "Pedro Lima",
    role: "Motion Designer",
    image: "https://i.pravatar.cc/96?img=33",
    text: "A prospecção de leads me ajudou a dobrar meus clientes em 3 meses.",
  },
  {
    name: "Carla Mendes",
    role: "Social Media",
    image: "https://i.pravatar.cc/96?img=47",
    text: "O briefing compartilhável é revolucionário. Meus clientes amam a profissionalidade!",
  },
  {
    name: "Rafael Dias",
    role: "Web Designer",
    image: "https://i.pravatar.cc/96?img=60",
    text: "Migrei minha gestão toda pro FreelaPilot e nunca mais perdi um prazo. Indispensável.",
  },
];

/* ---- Planos ---- */
export const plans = [
  {
    name: "Free",
    priceMonthly: "R$0",
    priceYearly: "R$0",
    desc: "Para começar a organizar.",
    cta: "Começar grátis",
    highlight: false,
    features: [
      "1 projeto financeiro",
      "1 quadro Kanban",
      "Briefings básicos",
      "Suporte por email",
    ],
  },
  {
    name: "Pro",
    priceMonthly: "R$29",
    priceYearly: "R$24",
    desc: "Para o freelancer profissional.",
    cta: "Assinar Pro",
    highlight: true,
    features: [
      "Projetos ilimitados",
      "Kanban ilimitado",
      "Contratos em DOCX",
      "Prospecção avançada",
      "Suporte premium",
      "Sem marca d'água",
    ],
  },
  {
    name: "Business",
    priceMonthly: "R$79",
    priceYearly: "R$65",
    desc: "Para estúdios e equipes.",
    cta: "Assinar Business",
    highlight: false,
    features: [
      "Tudo do Pro",
      "Multi-usuário",
      "API access",
      "Onboarding dedicado",
      "SLA garantido",
    ],
  },
];

export const footerLinks = [
  "Política de Privacidade",
  "Política de Cookies",
  "Termos de Uso",
  "Acordo de Tratamento de Dados",
  "Solicitação de Privacidade",
  "Preferências de cookies",
];
