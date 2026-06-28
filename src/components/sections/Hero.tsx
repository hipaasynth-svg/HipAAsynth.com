import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-8 font-mono">
              INDEPENDENT CLINICAL AI TESTING LABORATORY
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl mb-6">
              Deterministic Adversarial <br className="hidden md:block" />
              <span className="text-primary">Stress Testing.</span>
            </h1>
            
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed font-medium">
              Clinical AI needs independent premarket safety evaluation. <br className="hidden md:block" />
              Mount Sinai / Nature Medicine (May 2026): ChatGPT Health undertriaged 51.6% of true medical emergencies. 
              HipAAsynth is the answer.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="mailto:cody@hipaasynth.com">Request an Evaluation</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 font-semibold" asChild>
                <a href="https://github.com/hipaasynth-svg/HipAAsynth" target="_blank" rel="noopener noreferrer">
                  View Source on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4 border-t border-border pt-8 text-left"
          >
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">7</div>
              <div className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wider">Adversarial Axes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">7</div>
              <div className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wider">Polymorphic Forms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">54</div>
              <div className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wider">Automated Tests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground font-mono">6</div>
              <div className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wider">Clinical Modules</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-foreground font-mono">0</div>
              <div className="text-sm text-muted-foreground mt-1 font-semibold uppercase tracking-wider">External Deps</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
