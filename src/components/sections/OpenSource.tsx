import { motion } from "framer-motion";

const openComponents = [
  { name: "Population engine", license: "AGPL v3" },
  { name: "PSF module (Population Sparsity)", license: "AGPL v3" },
  { name: "CC module (Care Continuity)", license: "AGPL v3" },
  { name: "DIF module (Demographic Impact Framework)", license: "AGPL v3" },
  { name: "Polymorphic layer (7 forms + metrics)", license: "AGPL v3" },
];

const closedComponents = [
  { name: "CAP pipeline (Bitcoin-anchored certification)", license: "Proprietary" },
  { name: "LLM evaluators & clinical harnesses", license: "BSL 1.1" },
  { name: "FDA-ready tier logic", license: "Proprietary" },
];

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6 font-mono">
              AGPL-3.0
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Open Source Foundation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The engine is open source. The methodology is inspectable. Companies discover it on GitHub, run it internally, see failures — then come to HipAAsynth for the certified version that regulators and hospital procurement officers will accept.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              AGPL v3 means: any organization embedding this engine in a commercial product must either open-source their full stack or obtain a commercial license. The open-source release is also the top of the funnel — every published FairnessPassport on a public model is permanent marketing.
            </p>
            <a
              href="https://github.com/hipaasynth-svg/HipAAsynth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background font-semibold text-sm px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              hipaasynth-svg/HipAAsynth
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 border-b border-border px-5 py-3">
                <h3 className="font-mono text-sm font-bold text-foreground">Open Source — AGPL v3</h3>
              </div>
              <div className="divide-y divide-border">
                {openComponents.map((c) => (
                  <div key={c.name} className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-foreground">{c.name}</span>
                    <span className="font-mono text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded">
                      {c.license}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 border-b border-border px-5 py-3">
                <h3 className="font-mono text-sm font-bold text-foreground">Proprietary — Commercial</h3>
              </div>
              <div className="divide-y divide-border">
                {closedComponents.map((c) => (
                  <div key={c.name} className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-foreground">{c.name}</span>
                    <span className="font-mono text-xs text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded">
                      {c.license}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">Quick start:</span>{" "}
                <code className="font-mono text-xs bg-muted border border-border px-2 py-0.5 rounded">pip install -e .</code>{" "}
                then{" "}
                <code className="font-mono text-xs bg-muted border border-border px-2 py-0.5 rounded">from hipaasynth.dif import run_audit</code>.
                The engine runs in under a minute. Zero external dependencies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
