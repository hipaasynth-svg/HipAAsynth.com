import { motion } from "framer-motion";

const reasons = [
  {
    label: "Independent",
    detail: "Not a consulting firm, model vendor, or platform. An independent testing laboratory with no stake in your model's outcome.",
  },
  {
    label: "Deterministic",
    detail: "Same seed, same population, same results — forever. Reproducible by any researcher, regulator, or opposing counsel.",
  },
  {
    label: "Zero PHI",
    detail: "Synthetic patients generated entirely from published statistics. No real data ingested. No HIPAA exposure. No data sharing agreements.",
  },
  {
    label: "Tamper-Proof",
    detail: "CAP certificate: four-stage SHA-256 hash chain anchored to Bitcoin via OpenTimestamps. Immutable by construction.",
  },
  {
    label: "Regulator-Mapped",
    detail: "Every failure is mapped to specific FDA TPLC sections (21 CFR 820.30) and EU AI Act articles (Art. 9, 10, 13, 61) with remediation guidance.",
  },
  {
    label: "Open Foundation",
    detail: "The engine is AGPL-3.0. The methodology is published and inspectable. Credibility is built on transparency, not trust.",
  },
];

export function Differentiators() {
  return (
    <section id="why" className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why HipAAsynth
            </h2>
            <p className="text-lg text-muted-foreground">
              Six structural properties that no conventional validation approach can offer.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-xl p-7 hover:border-primary/50 hover:shadow-md transition-all duration-200"
            >
              <div className="mb-4">
                <div className="font-mono text-xs font-bold text-accent tracking-widest uppercase mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-xl text-foreground">{r.label}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <blockquote className="text-lg font-medium text-foreground italic leading-relaxed border-l-4 border-primary pl-6 text-left">
            "Who audits the auditor? Anyone. The engine and all core modules are published under AGPL v3. Any researcher, regulator, or opposing counsel can verify the methodology without contacting us."
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground text-left pl-6">— HipAAsynth methodology documentation</p>
        </motion.div>
      </div>
    </section>
  );
}
