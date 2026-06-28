import { motion } from "framer-motion";

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              The Validation Gap
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Standard validation cohorts draw from EHR data at academic medical centers — urban, insured, English-speaking. 
                Rural patients, tribal health communities, the uninsured, and patients with limited English are absent from nearly every validation dataset.
              </p>
              <p>
                When a model fails in production, the question every vendor, hospital, and regulator faces is: 
                <strong className="text-foreground font-semibold block mt-2 p-4 bg-background border border-border rounded-md">
                  "What did you do to verify this model before you put it in front of a patient?"
                </strong>
              </p>
              <p>
                Today, most honest answers are: very little, with no verifiable record. 
                HipAAsynth produces the record.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 shadow-sm"
          >
            <h3 className="font-mono text-sm font-bold text-accent mb-6 tracking-widest uppercase">Missing from Standard Datasets</h3>
            
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-foreground">Rural patient communities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-foreground">Tribal health organizations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-foreground">Uninsured populations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-foreground">Limited English Proficiency (LEP)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive"></div>
                <span className="text-foreground">Severe Social Determinants of Health (SDoH)</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm font-medium text-foreground">
                HipAAsynth generates synthetic patient populations specifically from these communities, providing the only deterministic way to prove your model is safe for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
