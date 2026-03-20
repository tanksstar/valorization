import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SystemInputs } from "@/components/landing/SystemInputs";
import { Impact } from "@/components/landing/Impact";
import { SmartMonitoring } from "@/components/landing/SmartMonitoring";
import { Team } from "@/components/landing/Team";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <SystemInputs />
      <Impact />
      <Team />
      <SmartMonitoring />
      <Footer />
    </div>
  );
};

export default Index;
