import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionsBackground } from "@/components/layout/sections-background";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Products } from "@/components/sections/products";
import { WhyUs } from "@/components/sections/why-us";
import { Quality } from "@/components/sections/quality";
import { GlobalMarkets } from "@/components/sections/global-markets";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionsBackground>
          <About />
          <Services />
          <Products />
          <WhyUs />
          <Quality />
          <GlobalMarkets />
          <CtaBanner />
          <Contact />
        </SectionsBackground>
      </main>
      <Footer />
    </>
  );
}
