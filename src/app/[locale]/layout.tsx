import type { Metadata, Viewport } from "next";
import { Cairo, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-en",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#050e1e",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: "/ar", en: "/en", "x-default": "/ar" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      locale,
      type: "website",
      images: [{ url: "/images/hero-poster.jpg", width: 1920, height: 1080, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/hero-poster.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const bodyFontVar = locale === "ar" ? cairo.variable : manrope.variable;

  const t = await getTranslations({ locale, namespace: "contact" });
  const phones = t.raw("phones") as string[];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SHODOLUX",
    url: SITE_URL,
    logo: `${SITE_URL}/logo/shodolux-logo.png`,
    email: t("email"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "YE",
      addressLocality: "Aden",
      streetAddress: t("addressValue"),
    },
    contactPoint: phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "sales",
    })),
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${manrope.variable} ${bodyFontVar} antialiased`}
        style={
          {
            "--font-body":
              locale === "ar" ? "var(--font-heading)" : "var(--font-body-en)",
          } as React.CSSProperties
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
