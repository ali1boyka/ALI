import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/visuals/logo";

const linkKeys = [
  ["home", "#home"],
  ["about", "#about"],
  ["services", "#services"],
  ["products", "#products"],
  ["contact", "#contact"],
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");

  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20 pb-8">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(143,224,242,0.4), transparent)",
        }}
      />
      <div className="container-shodolux">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">{t("tagline")}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              {t("linksTitle")}
            </h4>
            <ul className="mt-5 space-y-3">
              {linkKeys.map(([key, href]) => (
                <li key={key}>
                  <a href={href} className="text-sm text-white/60 transition-colors hover:text-sky-300">
                    {nav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">
              {t("contactTitle")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-400" />
                <span dir="ltr">info@shodolux.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky-400" />
                <span dir="ltr">+966 11 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>{contact("addressValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-white/35 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SHODOLUX — {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
