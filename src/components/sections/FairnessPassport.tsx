import { motion } from "framer-motion";

const metrics = [
  {
    code: "DCS",
    name: "Decision Consistency Score",
    desc: "Measures whether the model produces the same clinical recommendation across all 7 polymorphic forms of the same patient."
  },
  {
    code: "ISG",
    name: "Information-Source Gradient",
    desc: "Quantifies how much the model's decision changes based on who is telling the story — physician vs. patient vs. community health worker."
  },
  {
    code: "LFDI",
    name: "Linguistic-Form Disadvantage Index",
    desc: "Measures the performance gap between high-literacy and low-literacy patient presentations. A non-zero LFDI means literate patients are advantaged."
  },
  {
    code: "SAF",
    name: "SDoH Amplification Factor",
    desc: "Tests whether social determinants of health in the CHW intake form bias the model's clinical decision beyond what the clinical data warrants."
  }
];

const forms = [
  { label: "FHIR R5", sub: "Structured clinical data" },
  { label: "SOAP Note", sub: "Formal physician prose" },
  { label: "Midlevel", sub: "Abbreviated documentation" },
  { label: "High-Lit", sub: "Patient narrative" },
  { label: "Low-Lit", sub: "Lay language, somatic" },
  { label: "LEP", sub: "Limited English proficiency" },
  { label: "CHW", sub: "SDoH-rich intake" },
];

export function FairnessPassport() {
  return (
    <section id="fairness-passport" className="py-24 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6 font-mono">
              THE OUTPUT ARTIFACT
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              The FairnessPassport
            </h2>
            <p className="text-lg text-muted-foreground">
              The answer to "what did you do to verify this model?" — a structured, independently verifiable record of how a model performed across every presentation.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="border-b border-border bg-muted/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/70"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">fairness_passport_P-00042.json</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-muted-foreground/60 mb-2">{"{"}</div>
                <div className="pl-4 space-y-1">
                  <div><span className="text-accent">"patient_id"</span><span className="text-muted-foreground">: </span><span className="text-primary">"SYN-P-00042"</span><span className="text-muted-foreground">,</span></div>
                  <div><span className="text-accent">"condition"</span><span className="text-muted-foreground">: </span><span className="text-primary">"stroke"</span><span className="text-muted-foreground">,</span></div>
                  <div><span className="text-accent">"forms_evaluated"</span><span className="text-muted-foreground">: </span><span className="text-foreground">7</span><span className="text-muted-foreground">,</span></div>
                  <div><span className="text-accent">"DCS"</span><span className="text-muted-foreground">: </span><span className="text-destructive">0.71</span><span className="text-muted-foreground">, </span><span className="text-muted-foreground/60">// threshold: 0.85 — FAIL</span></div>
                  <div><span className="text-accent">"ISG"</span><span className="text-muted-foreground">: </span><span className="text-destructive">0.43</span><span className="text-muted-foreground">, </span><span className="text-muted-foreground/60">// threshold: 0.20 — FAIL</span></div>
                  <div><span className="text-accent">"LFDI"</span><span className="text-muted-foreground">: </span><span className="text-foreground text-green-600 dark:text-green-400">0.08</span><span className="text-muted-foreground">, </span><span className="text-muted-foreground/60">// threshold: 0.15 — PASS</span></div>
                  <div><span className="text-accent">"SAF"</span><span className="text-muted-foreground">: </span><span className="text-foreground text-green-600 dark:text-green-400">0.12</span><span className="text-muted-foreground">, </span><span className="text-muted-foreground/60">// threshold: 0.25 — PASS</span></div>
                  <div className="mt-2"><span className="text-accent">"overall"</span><span className="text-muted-foreground">: </span><span className="text-destructive font-bold">"FAIL"</span><span className="text-muted-foreground">,</span></div>
                  <div><span className="text-accent">"fda_tplc_mapping"</span><span className="text-muted-foreground">: </span><span className="text-primary">"21 CFR 820.30"</span><span className="text-muted-foreground">,</span></div>
                  <div><span className="text-accent">"eu_ai_act"</span><span className="text-muted-foreground">: </span><span className="text-primary">"Art. 9, 10, 13, 61"</span></div>
                </div>
                <div className="text-muted-foreground/60">{"}"}</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-1">
              {forms.map((f, i) => (
                <div key={i} className="text-center">
                  <div className={`w-full aspect-square rounded flex items-center justify-center text-xs font-mono font-bold mb-1 ${i < 2 ? 'bg-destructive/20 text-destructive border border-destructive/30' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                    {i < 2 ? 'F' : 'P'}
                  </div>
                  <div className="text-[10px] text-muted-foreground leading-tight">{f.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Model decisions across all 7 polymorphic forms — red = divergent recommendation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Four Polymorphic Fairness Metrics</h3>
            <div className="space-y-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.code}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-8 bg-primary/10 border border-primary/20 rounded flex items-center justify-center font-mono text-xs font-bold text-primary">
                      {m.code}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{m.name}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{m.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-sm text-foreground font-medium leading-relaxed">
                Each metric has a published threshold. Failures include remediation guidance mapped to specific FDA TPLC sections and EU AI Act articles. Not a score — a pass/fail determination with documentation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
