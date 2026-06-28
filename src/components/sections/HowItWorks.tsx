import { motion } from "framer-motion";

const axes = [
  {
    num: "1",
    name: "Representational Polymorphism",
    desc: "Same patient rendered 7 ways (FHIR R5, SOAP note, midlevel abbreviated, patient high-literacy, patient low-literacy, LEP translated, CHW SDOH-rich intake). A fair model produces consistent decisions across all 7."
  },
  {
    num: "2",
    name: "Demographic Interaction Fairness (DIF)",
    desc: "4 metrics: DCS, ISG, LFDI, SAF. Each has a threshold. Failures map to FDA TPLC and EU AI Act with remediation guidance."
  },
  {
    num: "3",
    name: "Controlled Missingness",
    desc: "Systematic data removal to find which missing inputs cause largest performance drops."
  },
  {
    num: "4",
    name: "Gaussian Noise Injection",
    desc: "Physiologically realistic noise with sigma derived from within-cohort variance. Tests robustness to real measurement variability."
  },
  {
    num: "5",
    name: "Temporal Drift Simulation",
    desc: "Post-deployment simulation at 6, 12, 18 months. Tests whether today's model still works after the population changes."
  },
  {
    num: "6",
    name: "Population Sparsity Fairness (PSF)",
    desc: "7 sparsity levels (S7=complete record to S1=age/sex/chief complaint only). If less data means worse care, the model fails the patients who face the most barriers."
  },
  {
    num: "7",
    name: "Care Continuity (CC)",
    desc: "4 continuity profiles. Measures whether the same patient gets a different recommendation when presented with a full history vs a single ED snapshot."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            The 7-Axis Adversarial Stress Test
          </h2>
          <p className="text-lg text-muted-foreground">
            The 7AAST is an exhaustive, deterministic gauntlet. We don't just measure performance; we measure stability under duress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {axes.map((axis, i) => (
            <motion.div
              key={axis.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-lg">
                  A{axis.num}
                </div>
                <h3 className="font-bold text-lg leading-tight">{axis.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {axis.desc}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 7 * 0.1 }}
            className="bg-primary/5 border border-primary/20 p-6 rounded-xl md:col-span-2 lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="font-bold text-xl text-primary mb-2">Deterministic & Reproducible</h3>
            <p className="text-muted-foreground text-sm max-w-xl">
              Every evaluation is anchored to a specific cryptographic seed. Run it today, run it in ten years — the exact same synthetic population will be generated, guaranteeing perfectly reproducible audit trails.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
