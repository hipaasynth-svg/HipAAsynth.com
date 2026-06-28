import { motion } from "framer-motion";

const deliverables = [
  {
    title: "Synthetic Population",
    subtitle: "JSON + CSV export",
    desc: "Thousands of synthetic patients. Demographics, conditions, lab values, visit histories, clinical observations. SHA-256 anchor hash proves the exact population. Zero PHI. Reproducible from a single seed.",
    calibrations: ["NHANES", "ADA 2024", "AHA/ASA", "Sepsis-3", "GOLD", "OPTIMIZE-HF", "UKPDS"],
  },
  {
    title: "Raw Results",
    subtitle: "CSV export",
    desc: "Every decision your model made on every patient across every polymorphic form, sparsity level, continuity profile, and adversarial perturbation. Row-level evidence. Nothing dropped.",
    calibrations: [],
  },
  {
    title: "Evaluation Reports",
    subtitle: "Three report package",
    desc: "FairnessPassport (polymorphic fairness, 4 metrics, regulatory mapping, remediation), PSF Report (sparsity degradation across 7 levels), CC Report (continuity degradation across 4 profiles). Each with PASS/FAIL determination.",
    calibrations: [],
  },
  {
    title: "CAP Certificate",
    subtitle: "Verified & Immutable tiers",
    desc: "Cryptographic Attestation Protocol: four-stage SHA-256 hash chain binding population, results, reports, and timestamp into a single immutable proof. Anchored to Bitcoin via OpenTimestamps. QR code links to a live verification page.",
    calibrations: [],
    locked: false,
    tag: "PROPRIETARY",
  }
];

const modules = [
  { name: "Sepsis", ref: "Sepsis-3, Singer JAMA 2016" },
  { name: "Stroke", ref: "AHA/ASA 2019, NIHSS calibrated" },
  { name: "COPD", ref: "GOLD staging, Hurst NEJM" },
  { name: "CHF", ref: "OPTIMIZE-HF, Fonarow JAMA 2007" },
  { name: "OUD", ref: "Jones JAMA Psychiatry 2022" },
  { name: "Diabetes", ref: "ADA 2024, UKPDS, NHANES" },
];

export function Deliverables() {
  return (
    <section id="deliverables" className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What You Receive
            </h2>
            <p className="text-lg text-muted-foreground">
              Every engagement produces four artifact types. Each is cryptographically chained to the others.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-7 hover:border-primary/40 transition-colors relative"
            >
              {d.tag && (
                <div className="absolute top-4 right-4 font-mono text-[10px] font-bold text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded-full tracking-widest">
                  {d.tag}
                </div>
              )}
              <div className="mb-1">
                <h3 className="font-bold text-lg text-foreground">{d.title}</h3>
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mt-0.5">{d.subtitle}</p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">{d.desc}</p>
              {d.calibrations.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.calibrations.map(c => (
                    <span key={c} className="font-mono text-[11px] bg-muted border border-border rounded px-2 py-0.5 text-muted-foreground">
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="bg-muted/50 border-b border-border px-6 py-4">
              <h3 className="font-bold text-base">6 Clinical Modules — All Calibrated to Published Benchmarks</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((m, i) => (
                <div
                  key={m.name}
                  className={`px-6 py-5 flex flex-col gap-1 ${i < modules.length - 1 ? 'border-b sm:border-b-0 border-border' : ''} ${i % 2 === 0 && i < modules.length - 1 ? 'sm:border-r border-border' : ''} ${i < 4 ? 'lg:border-b border-border' : ''} ${i % 3 !== 2 ? 'lg:border-r border-border' : ''}`}
                >
                  <div className="font-bold text-foreground">{m.name}</div>
                  <div className="font-mono text-xs text-muted-foreground leading-relaxed">{m.ref}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
