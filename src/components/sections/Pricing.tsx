import { motion } from "framer-motion";

const tiers = [
  {
    name: "Standard",
    price: "Contact for pricing",
    unit: "",
    desc: "Full 7-axis stress test with evaluation reports. For internal QA and model development.",
    highlight: false,
    tag: null,
    deliverables: [
      "Synthetic population (JSON + CSV)",
      "Raw results (CSV)",
      "FairnessPassport + PSF + CC reports",
      "FDA TPLC and EU AI Act regulatory mapping",
      "Remediation guidance",
    ],
    bestFor: "Internal QA, pre-submission testing, model development teams",
  },
  {
    name: "Verified",
    price: "Contact for pricing",
    unit: "",
    desc: "Everything in Standard, plus the CAP cryptographic certificate. Tamper-proof, Bitcoin-anchored, independently verifiable.",
    highlight: true,
    tag: "MOST POPULAR",
    deliverables: [
      "Everything in Standard",
      "CAP certificate (SHA-256 hash chain + Bitcoin anchor)",
      "QR verification page",
      "Regulator-ready documentation package",
    ],
    bestFor: "Regulatory submissions, hospital procurement, investor diligence",
  },
  {
    name: "Immutable",
    price: "Contact for pricing",
    unit: "",
    desc: "Everything in Verified, plus public listing on the HipAAsynth Certification Registry.",
    highlight: false,
    tag: null,
    deliverables: [
      "Everything in Verified",
      "Public FairnessPassport on the Certification Registry",
      "Permanent, citable, indexed record",
      "Co-branded announcement support",
    ],
    bestFor: "Market differentiation, public credibility, competitive positioning",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Service Tiers
            </h2>
            <p className="text-lg text-muted-foreground">
              Every tier runs the same deterministic 7AAST engine. The difference is the certification artifact and its legal weight. Pricing is on a sliding scale — contact us to discuss your engagement.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border relative flex flex-col ${
                tier.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                  : "bg-card text-foreground border-border"
              }`}
            >
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] font-bold bg-accent text-white px-3 py-1 rounded-full tracking-widest whitespace-nowrap">
                  {tier.tag}
                </div>
              )}
              <div className="p-7 pb-5 border-b border-white/10">
                <h3 className={`font-bold text-xl mb-1 ${tier.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <div className="my-3">
                  <span className={`text-sm font-medium italic ${tier.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {tier.price}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {tier.desc}
                </p>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {tier.deliverables.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <div className={`mt-1 w-4 h-4 rounded-sm flex items-center justify-center shrink-0 ${
                        tier.highlight ? 'bg-primary-foreground/20' : 'bg-primary/10'
                      }`}>
                        <svg className={`w-2.5 h-2.5 ${tier.highlight ? 'text-primary-foreground' : 'text-primary'}`} viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className={tier.highlight ? 'text-primary-foreground/90' : 'text-foreground'}>
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 pt-5 border-t ${tier.highlight ? 'border-primary-foreground/20' : 'border-border'}`}>
                  <p className={`text-xs ${tier.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    <span className="font-semibold">Best for:</span> {tier.bestFor}
                  </p>
                </div>
                <a
                  href="mailto:cody@hipaasynth.com"
                  className={`mt-5 block text-center font-semibold text-sm py-3 rounded-lg transition-all ${
                    tier.highlight
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  Request This Tier
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-xl p-7"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg">Continuous Monitoring</h3>
                <div className="text-sm font-medium italic text-muted-foreground mt-1">Sliding scale — contact for pricing</div>
              </div>
              <div className="font-mono text-[10px] font-bold text-accent border border-accent/30 bg-accent/10 px-2 py-1 rounded-full tracking-widest">
                RECURRING
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Quarterly re-evaluation as your model updates. New CAP certificate each cycle. Registry listing kept current. Priority scheduling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-7"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg">Enterprise</h3>
                <div className="font-mono text-2xl font-bold text-foreground mt-1">Custom</div>
              </div>
              <div className="font-mono text-[10px] font-bold text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded-full tracking-widest">
                SCOPED
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Custom population profiles, condition-specific module builds, multi-model comparative evaluations. Pricing scoped to engagement.
            </p>
            <a href="mailto:cody@hipaasynth.com" className="text-sm font-semibold text-primary hover:underline">
              Contact for scoping &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
