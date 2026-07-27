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
  const phones = contact.raw("phones") as string[];

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

          <nav aria-label={t("linksTitle")}>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/55 uppercase">
              {t("linksTitle")}
            </h3>
            <ul className="mt-5 space-y-3">
              {linkKeys.map(([key, href]) => (
                <li key={key}>
                  <a href={href} className="focus-ring rounded-sm text-sm text-white/60 transition-colors hover:text-sky-300">
                    {nav(key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/55 uppercase">
              {t("contactTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-sky-400" />
                <a
                  href={`mailto:${contact("email")}`}
                  dir="ltr"
                  className="focus-ring rounded-sm transition-colors hover:text-sky-300"
                >
                  {contact("email")}
                </a>
              </li>
              {phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-sky-400" />
                  <a href={`tel:${phone}`} dir="ltr" className="focus-ring rounded-sm transition-colors hover:text-sky-300">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                <span>{contact("addressValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} SHODOLUX — {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
