import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wifi, Cloud, Shield, Monitor, ArrowRight, CheckCircle2, Server, Database, Lock, Headphones, BarChart3, Globe } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const allServices = [
  {
    icon: Wifi,
    title: "Connectivity & ISP",
    tagline: "Dedicated Fiber & Satellite Redundancy",
    desc: "We design and deploy enterprise-grade connectivity with automatic failover, ensuring your business stays online even when primary links fail.",
    features: ["Dedicated fiber optic links", "VSAT satellite backup", "SD-WAN orchestration", "Multi-carrier redundancy", "99.99% SLA guarantee", "Real-time bandwidth monitoring"],
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    tagline: "Azure & M365 Hybrid Architectures",
    desc: "Seamless cloud migration and management. We architect hybrid environments that balance performance, security, and cost efficiency.",
    features: ["Azure infrastructure design", "M365 deployment & management", "Cloud migration planning", "Hybrid identity management", "Backup & disaster recovery", "License optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Zero-Trust Frameworks & Threat Hunting",
    desc: "Protect your organization with military-grade security. Our SOC team hunts threats 24/7 so you can focus on business.",
    features: ["Zero-trust architecture", "24/7 SOC monitoring", "Endpoint detection & response", "Vulnerability assessments", "Security awareness training", "Incident response planning"],
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    tagline: "Full-Stack Outsourced CIO Services",
    desc: "Your entire IT department — outsourced to experts. From helpdesk to strategic planning, we handle everything.",
    features: ["Proactive monitoring", "Helpdesk & user support", "IT strategy & roadmapping", "Vendor management", "Asset lifecycle management", "Quarterly business reviews"],
  },
  {
    icon: Globe,
    title: "LAN & IP PBX Solutions",
    tagline: "Enterprise Networking & Unified Communications",
    desc: "Build robust local area networks and modern IP PBX phone systems that keep your teams connected with crystal-clear voice and seamless internal communications.",
    features: ["Structured LAN cabling & design", "IP PBX deployment & management", "VoIP integration", "Call routing & IVR systems", "Network segmentation & VLANs", "Unified communications platforms"],
  },
  {
    icon: Headphones,
    title: "VoIP Solutions",
    tagline: "Cost-Effective Voice Over IP",
    desc: "Replace expensive traditional phone lines with enterprise VoIP. Reduce communication costs while improving call quality and flexibility across all your locations.",
    features: ["SIP trunk provisioning", "Cloud-hosted PBX", "Multi-site VoIP deployment", "Call analytics & recording", "Mobile softphone integration", "Number porting & management"],
  },
  {
    icon: BarChart3,
    title: "Timeless Track",
    tagline: "Real-Time Asset Monitoring & Tracking",
    desc: "Monitor and track your fleet, equipment, and critical assets in real time. Timeless Track delivers GPS-powered visibility, geofencing alerts, and detailed analytics to protect your investments.",
    features: ["Real-time GPS tracking", "Geofencing & alerts", "Fleet management dashboards", "Asset utilization reports", "Driver behavior monitoring", "API integration with ERP systems"],
  },
];
const Services = () => (
  <div className="min-h-screen pt-28">
    {/* Hero */}
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
            Solutions Built for <span className="gradient-text">Zero Downtime</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Four pillars of enterprise IT — integrated, managed, and optimized to eliminate risk and accelerate growth.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Detail */}
    <section className="pb-32">
      <div className="container mx-auto px-6 space-y-24">
        {allServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <service.icon size={40} strokeWidth={1.5} className="text-primary mb-4" />
              <h2 className="font-display text-3xl font-bold text-foreground">{service.title}</h2>
              <p className="text-primary font-medium mt-1">{service.tagline}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{service.desc}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Request Consultation <ArrowRight size={14} />
              </Link>
            </div>
            <div className={`glass-card ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h4 className="font-display font-semibold text-foreground mb-4">What's Included</h4>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <CheckCircle2 size={14} className="text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding section-alt border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Not Sure Which Solution Fits?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Our team will assess your infrastructure and recommend the right combination of services.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
          Request Infrastructure Audit <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
