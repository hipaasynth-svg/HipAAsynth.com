import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="HipAAsynth" className="w-9 h-9 rounded-sm object-cover" />
          <span className="font-bold text-xl tracking-tight text-foreground">
            HipAA<span className="text-primary font-mono font-normal">synth</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("problem")} className="hover:text-foreground transition-colors">The Problem</button>
          <button onClick={() => scrollTo("how-it-works")} className="hover:text-foreground transition-colors">7AAST Engine</button>
          <button onClick={() => scrollTo("fairness-passport")} className="hover:text-foreground transition-colors">FairnessPassport</button>
          <button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Tiers</button>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
            <a href="https://github.com/hipaasynth-svg/HipAAsynth" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <a href="mailto:cody@hipaasynth.com">Request Evaluation</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
