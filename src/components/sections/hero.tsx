"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magic/blur-fade";
import { TextEffect } from "@/components/magic/text-effect";
import { AppImage } from "@/components/magic/app-image";
import { ContainerScroll } from "@/components/magic/container-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { heroAvatars, heroRotating } from "@/lib/site";

function RotatingWord() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      window.setTimeout(() => {
        setI((p) => (p + 1) % heroRotating.length);
        setShow(true);
      }, 450);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <TextEffect as="span" per="char" preset="blur" trigger={show}>
      {heroRotating[i]}
    </TextEffect>
  );
}

function HeroCopy() {
  return (
    <div className="px-6">
      <BlurFade delay={0.05}>
        <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white/70 px-4 py-1.5 text-xs font-medium text-body backdrop-blur">
          <Sparkles size={13} className="text-brand-500" />
          O hub do designer freelancer
        </span>
      </BlurFade>

      <h1 className="mt-6 font-display text-5xl font-normal leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
        <TextEffect as="span" per="word" preset="blur" className="block">
          Gerencie
        </TextEffect>
        <span className="grad-text mt-1 block min-h-[1.15em]">
          <RotatingWord />
        </span>
      </h1>

      <TextEffect
        as="p"
        per="word"
        preset="blur"
        delay={0.3}
        className="mx-auto mt-6 max-w-xl text-lg text-muted"
      >
        Projetos, clientes, contratos e financeiro num só lugar. Pare de se
        perder em planilhas e foque no que você faz de melhor: criar.
      </TextEffect>

      <BlurFade delay={0.45}>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#precos" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="group w-full">
              Começar grátis
              <ArrowRight size={18} />
            </Button>
          </a>
          <a href="#demo" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              <Play size={15} className="fill-current" />
              Ver demonstração
            </Button>
          </a>
        </div>
      </BlurFade>

      <BlurFade delay={0.55}>
        <div className="mx-auto mt-8 inline-flex items-center gap-4 rounded-full border border-stroke bg-white/70 px-5 py-2.5 backdrop-blur">
          <div className="flex -space-x-2">
            {heroAvatars.map((a) => (
              <Avatar key={a.name} className="h-8 w-8 border-2 border-white">
                <AvatarImage src={a.src} alt={a.name} />
                <AvatarFallback>{a.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-ink">
              +2.000 freelancers já pilotam o negócio aqui
            </p>
            <div className="flex items-center gap-1 text-xs text-muted">
              <span className="flex text-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-current" />
                ))}
              </span>
              4,9 de avaliação
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-aurora absolute inset-x-0 top-0 h-[900px]" />
      <div className="bg-rings pointer-events-none absolute inset-x-0 top-0 h-[620px]" />
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[900px] [mask-image:radial-gradient(70%_45%_at_50%_0%,#000,transparent)]" />

      <div className="relative pt-24 md:pt-20">
        <ContainerScroll titleComponent={<HeroCopy />}>
          <AppImage
            src="/app/dashboard.png"
            alt="Dashboard do FreelaPilot"
            className="h-full w-full"
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
