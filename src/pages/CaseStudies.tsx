import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const studies = [
  {
    client: "Tyche Connect",
    industry: "Financial Services",
    challenge: "Legacy infrastructure causing 12+ hours of downtime per month, impacting transaction processing and regulatory compliance.",
    solution: "Deployed redundant fiber with VSAT satellite failover. Migrated core systems to Azure with active-active replication.",
    results: ["99.99% uptime achieved", "42% latency reduction", "$2.1K saved annually", "Full regulatory compliance"],
  },
  {
    client: "MRDC",
    industry: "Council",
    challenge: "No centralized IT management. Each branch operating independently with inconsistent security and outdated POS systems.",
    solution: "Implemented managed SD-WAN across all sites with centralized monitoring, cloud-based POS, and unified security policies.",
    results: ["3 sites connected in 7 days", "60% IT cost reduction", "Real-time visibility across all branches", "Zero security incidents"],
  },
  {
    client: "Dhubha Mine",
    industry: "Mining",
    challenge: "Critical security vulnerabilities in remote mine sites. No endpoint protection, no incident response plan.",
    solution: "Deployed zero-trust framework with EDR on all endpoints. Established 24/7 SOC monitoring and incident response protocols.",
    results: ["0 breaches since deployment", "100% endpoint coverage", "ISO 27001 readiness achieved", "4-hour incident response SLA"],
  },
  {
    client: "MoHC",
    industry: "Healthcare",
    challenge: "Disconnected clinics with no access to centralized patient records. Unreliable connectivity in rural areas.",
    solution: "Designed hybrid connectivity (fiber + VSAT) with Microsoft 365 and Azure-hosted EHR system across 30 facilities.",
    results: ["30 clinics connected", "Patient data centralized", "98% user adoption in 60 days", "HIPAA-equivalent compliance"],
  },
];

const CaseStudies = () => (
  <div className="min-h-screen pt-28">
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Proven Impact, <span className="gradient-text">Measurable Results</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Real outcomes for Zimbabwe's leading enterprises. Every engagement backed by data.
          </p>
        </motion.div>

        <div className="space-y-8">
          {studies.map((cs, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">{cs.industry}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{cs.client}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
                  <ul className="space-y-2">
                    {cs.results.map((r) => (
                      <li key={r} className="metric-text text-sm text-primary">{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding section-alt border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-foreground">Your Success Story Starts Here</h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Let's discuss how we can deliver similar results for your organization.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
          Request Infrastructure Audit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default CaseStudies;
