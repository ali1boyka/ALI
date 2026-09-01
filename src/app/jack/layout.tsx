import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./jack.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jack — 3D Creator",
  description:
    "A 3D creator driven by crafting striking and unforgettable projects.",
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  width: "device-width",
  initialScale: 1,
};

export default function JackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="antialiased">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
