import Image from "next/image";
import { footerLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-stroke bg-white/50">
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={150}
            height={28}
            className="h-7 w-auto"
          />
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Feito com{" "}
            <span className="text-brand-500">💜</span> para freelancers
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-stroke pt-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-muted transition-colors hover:text-brand-600"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* watermark wordmark gigante */}
      <div
        className="watermark pointer-events-none mt-4 select-none text-center text-[18vw] leading-none"
        aria-hidden
      >
        FreelaPilot
      </div>
    </footer>
  );
}
