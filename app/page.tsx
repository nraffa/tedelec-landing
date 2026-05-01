import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { Coverage } from "@/components/Coverage";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { StatStrip } from "@/components/StatStrip";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Testimonials } from "@/components/Testimonials";
import { Topbar } from "@/components/Topbar";
import { Work } from "@/components/Work";

export default function Page() {
  return (
    <div className="tedelec-page">
      <Topbar />
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <About />
        <Coverage />
        <Testimonials />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
