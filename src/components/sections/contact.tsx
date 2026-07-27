"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, User, CheckCircle2, Loader2 } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Contact() {
  const t = useTranslations("contact");
  const tf = useTranslations("contact.form");
  const phones = t.raw("phones") as string[];
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <Section id="contact" className="bg-paper-soft">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display max-w-sm text-3xl font-extrabold text-navy-900 sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-3xl border border-navy-900/8 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-navy-900/45 uppercase">
                      {t("director")}
                    </p>
                    <p className="font-display font-bold text-navy-900">{t("directorName")}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 space-y-4">
              <Reveal delay={0.28}>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900/45">{t("emailLabel")}</p>
                    <a
                      href={`mailto:${t("email")}`}
                      dir="ltr"
                      className="font-medium text-navy-900 transition-colors hover:text-sky-600"
                    >
                      {t("email")}
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.34}>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900/45">{t("phoneLabel")}</p>
                    <div className="flex flex-col gap-1">
                      {phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          dir="ltr"
                          className="font-medium text-navy-900 transition-colors hover:text-sky-600"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-sky-600" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900/45">{t("addressLabel")}</p>
                    <p className="font-medium text-navy-900">{t("addressValue")}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-7 sm:p-9"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-sky-600" />
                  <p className="font-display mt-4 text-lg font-bold text-navy-900">
                    {tf("successTitle")}
                  </p>
                  <p className="mt-2 text-sm text-navy-900/55">{tf("successText")}</p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-navy-900/70">
                      {tf("name")}
                    </label>
                    <Input required placeholder={tf("namePlaceholder")} name="name" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-navy-900/70">
                      {tf("email")}
                    </label>
                    <Input required type="email" placeholder={tf("emailPlaceholder")} name="email" dir="ltr" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-navy-900/70">
                      {tf("phone")}
                    </label>
                    <Input placeholder={tf("phonePlaceholder")} name="phone" dir="ltr" />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-2 block text-sm font-semibold text-navy-900/70">
                      {tf("subject")}
                    </label>
                    <Input placeholder={tf("subjectPlaceholder")} name="subject" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-navy-900/70">
                      {tf("message")}
                    </label>
                    <Textarea required rows={5} placeholder={tf("messagePlaceholder")} name="message" />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto"
                    >
                      {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
                      {tf("submit")}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
