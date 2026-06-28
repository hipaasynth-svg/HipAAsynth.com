export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-sm"></div>
              </div>
              <span className="font-bold text-xl tracking-tight">
                HipAA<span className="font-mono font-normal text-primary">synth</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Independent Clinical AI Validation Services.<br />
              Deterministic. Tamper-Proof. Regulator-Ready.
            </p>
            <p className="text-background/50 text-xs mt-4">
              HipAAsynth LLC<br />
              Minot, North Dakota
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-background/90 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:cody@hipaasynth.com"
                className="block text-background/70 hover:text-background text-sm transition-colors"
              >
                cody@hipaasynth.com
              </a>
              <a
                href="https://github.com/hipaasynth-svg/HipAAsynth"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-background/70 hover:text-background text-sm transition-colors"
              >
                github.com/hipaasynth-svg/HipAAsynth
              </a>
              <a
                href="https://huggingface.co/HipAAsynth"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-background/70 hover:text-background text-sm transition-colors"
              >
                HuggingFace: HipAAsynth
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-background/90 uppercase tracking-wider">Request an Evaluation</h4>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Engagements run in 8–16 hours of founder time. The engine runs in under a minute.
            </p>
            <a
              href="mailto:cody@hipaasynth.com"
              className="inline-block bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-background/40 text-xs font-mono">
            &copy; {new Date().getFullYear()} HipAAsynth LLC. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-background/40 text-xs font-mono">
            <span>Engine: AGPL-3.0</span>
            <span>CAP Pipeline: Proprietary</span>
            <span>Research Extensions: BSL 1.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
