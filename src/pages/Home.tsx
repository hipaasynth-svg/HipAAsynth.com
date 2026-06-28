import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FairnessPassport } from "@/components/sections/FairnessPassport";
import { Deliverables } from "@/components/sections/Deliverables";
import { Pricing } from "@/components/sections/Pricing";
import { Differentiators } from "@/components/sections/Differentiators";
import { OpenSource } from "@/components/sections/OpenSource";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <FairnessPassport />
        <Deliverables />
        <Pricing />
        <Differentiators />
        <OpenSource />
      </main>
      <Footer />
    </div>
  );
}
