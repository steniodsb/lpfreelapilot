import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pain } from "@/components/sections/pain";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { Stats } from "@/components/sections/stats";
import { FeatureDeep } from "@/components/sections/feature-deep";
import { Showcase } from "@/components/sections/showcase";
import { Demo } from "@/components/sections/demo";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logos />
        <Pain />
        <Solution />
        <Features />
        <Stats />
        <FeatureDeep />
        <Showcase />
        <Demo />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
