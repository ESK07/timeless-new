import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cloud, Wifi, Monitor, CheckCircle2, ChevronRight, Zap, Clock, Users, TrendingUp, Lock, Server, BarChart3, Globe, Headphones } from "lucide-react";
import NetworkAnimation from "@/components/NetworkAnimation";

import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Wifi,
    title: "Connectivity & ISP",
    desc: "Dedicated fiber, satellite redundancy, and failover links engineered for 99.99% uptime across Zimbabwe.",
    link: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    desc: "Azure & M365 hybrid architectures with seamless migration, management, and optimization.",
    link: "/services",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Zero-trust frameworks, 24/7 threat hunting, and SOC monitoring to neutralize risks before they strike.",
    link: "/services",
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    desc: "Full-stack outsourced CIO services. Proactive monitoring, helpdesk, and disaster recovery.",
    link: "/services",
  },
  {
    icon: Globe,
    title: "LAN & IP PBX",
    desc: "Enterprise networking and unified communications with robust LAN design and modern IP PBX phone systems.",
    link: "/services",
  },
  {
    icon: Headphones,
    title: "VoIP Solutions",
    desc: "Cost-effective voice over IP replacing traditional phone lines with superior quality and flexibility.",
    link: "/services",
  },
  {
    icon: BarChart3,
    title: "Timeless Track",
    desc: "Real-time GPS asset monitoring, fleet tracking, geofencing alerts, and utilization analytics.",
    link: "/services",
  },
];

const metrics = [
  { value: "99.99%", label: "Uptime Guaranteed", icon: Zap },
  { value: "24/7/365", label: "SOC Monitoring", icon: Clock },
  { value: "200+", label: "Enterprise Clients", icon: Users },
  { value: "<15min", label: "Avg Response Time", icon: TrendingUp },
];

const painPoints = [
  { problem: "Frequent downtime costing revenue", solution: "Redundant infrastructure with automatic failover and 99.99% SLA" },
  { problem: "Cyber threats and data breaches", solution: "Zero-trust security architecture with 24/7 threat detection" },
  { problem: "Outdated IT slowing growth", solution: "Modern cloud migration with minimal disruption to operations" },
  { problem: "No dedicated IT leadership", solution: "Virtual CIO services delivering enterprise strategy at SME costs" },
];

const caseStudies = [
  {
    client: "Tyche Connect",
    challenge: "Legacy infrastructure causing 12+ hours of downtime per month",
    result: "Reduced downtime to <5 minutes/month. Deployed redundant fiber with satellite failover.",
    metrics: ["99.99% uptime", "42% latency reduction", "$2.1K saved annually"],
  },
  {
    client: "MRDC",
    challenge: "No centralized IT management across 3 branches",
    result: "Implemented managed SD-WAN with centralized monitoring and cloud-based POS.",
    metrics: ["3 sites connected", "60% cost reduction", "Real-time visibility"],
  },
  {
    client: "Dhubha Mine",
    challenge: "Critical security vulnerabilities in remote operations",
    result: "Deployed zero-trust framework with endpoint protection and SOC services.",
    metrics: ["0 breaches since", "100% endpoint coverage", "ISO 27001 ready"],
  },
];

const steps = [
  { num: "01", title: "Assess", desc: "Comprehensive infrastructure audit, vulnerability scanning, and gap analysis." },
  { num: "02", title: "Design", desc: "Bespoke topology, redundancy planning, and architecture tailored to your business." },
  { num: "03", title: "Deploy", desc: "Zero-disruption implementation with parallel systems and rigorous testing." },
  { num: "04", title: "Support", desc: "Continuous optimization, proactive monitoring, and quarterly business reviews." },
];

const packages = [
  {
    name: "Starter",
    desc: "For growing businesses establishing IT foundations",
    features: ["Basic connectivity monitoring", "Email & M365 setup", "8x5 helpdesk support", "Monthly reporting"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business",
    desc: "For enterprises requiring proactive IT management",
    features: ["Dedicated fiber + failover", "Full cloud management", "24/7 monitoring & support", "Cybersecurity essentials", "Quarterly reviews"],
    cta: "Request Quote",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For organizations with mission-critical infrastructure",
    features: ["Multi-site SD-WAN", "Zero-trust security", "Virtual CIO services", "24/7 SOC monitoring", "Custom SLA & DR planning"],
    cta: "Contact Sales",
    featured: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-glow" />
        <NetworkAnimation />
        <div className="container mx-auto px-6 relative z-10 pt-24">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
                Zimbabwe's Enterprise IT Partner
              </span>
            </motion.div>
            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance"
            >
              Enterprise-Grade IT Infrastructure for Businesses That{" "}
              <span className="gradient-text">Can't Afford Downtime</span>
            </motion.h1>
            <motion.p
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              We engineer resilient connectivity, cloud, and security solutions 
              that keep Zimbabwe's most demanding businesses running — always.
            </motion.p>
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
              >
                Get a Free IT Audit <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-all"
              >
                View Solutions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST / METRICS */}
      <section className="section-padding section-alt border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metrics.map((m, i) => (
              <motion.div key={m.label} variants={fadeUp} custom={i} className="text-center">
                <m.icon size={24} strokeWidth={1.5} className="mx-auto mb-3 text-primary" />
                <p className="metric-text text-3xl lg:text-4xl font-bold text-foreground">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Client logos placeholder */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["ESK", "Tyche Connect", "MRDC", "Dhubha Mine", "MoHC"].map((name) => (
              <span key={name} className="text-sm font-display font-semibold tracking-wider text-muted-foreground uppercase">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
              Solutions Engineered for <span className="gradient-text">Resilience</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Four pillars of enterprise IT — integrated, managed, and optimized to eliminate risk and accelerate growth.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp} custom={i}>
                <Link to={s.link} className="glass-card block h-full group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <s.icon size={32} strokeWidth={1.5} className="text-primary mb-6" />
                    <h3 className="font-display text-xl font-bold mb-3 text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Explore <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM-SOLUTION */}
      <section className="section-padding section-alt border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
              We Don't Just Fix IT.{" "}
              <span className="gradient-text">We Engineer Resilience.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
            {painPoints.map((p, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="glass-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <X size={18} className="text-destructive" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{p.problem}</p>
                    <div className="flex items-start gap-2 mt-3">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{p.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
              Proven Impact, <span className="gradient-text">Measurable Results</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Real outcomes for Zimbabwe's leading enterprises.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="glass-card">
                <div className="relative z-10">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Case Study</p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{cs.client}</h3>
                  <p className="text-sm text-muted-foreground mb-3"><strong className="text-foreground">Challenge:</strong> {cs.challenge}</p>
                  <p className="text-sm text-muted-foreground mb-4"><strong className="text-foreground">Result:</strong> {cs.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m) => (
                      <span key={m} className="metric-text text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View All Case Studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding section-alt border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
              The Timeless <span className="gradient-text">Method</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A proven, four-phase approach to transforming your IT infrastructure.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} custom={i} className="relative">
                <div className="glass-card h-full">
                  <span className="metric-text text-4xl font-bold text-primary/20">{step.num}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
              Packages Built for <span className="gradient-text">Every Scale</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              From growing businesses to enterprise operations — choose the level of IT partnership you need.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name} variants={fadeUp} custom={i}
                className={`glass-card ${pkg.featured ? "border-primary/40 ring-1 ring-primary/20" : ""}`}
              >
                <div className="relative z-10">
                  {pkg.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 mb-6">{pkg.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                      pkg.featured
                        ? "bg-primary text-primary-foreground hover:brightness-110"
                        : "border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="glass text-center py-16 px-8 lg:px-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
                Ready to Eliminate Downtime?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Get a complimentary infrastructure audit and discover how Timeless Technology can 
                transform your IT from a cost center into a competitive advantage.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
                >
                  Request Infrastructure Audit <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-all"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Inline X icon for pain points (not from lucide to avoid name collision)
const X = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default Index;
