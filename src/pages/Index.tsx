import { Hero } from "@/components/Hero";
import { DemoSection } from "@/components/DemoSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Research } from "@/components/Research";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DemoSection />
      <HowItWorks />
      <Research />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
