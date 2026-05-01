import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { WhyUs } from "@/components/WhyUs";
import { Areas } from "@/components/Areas";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <WhyUs />
        <Areas />
        <ContactCTA />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
