import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Shield, Users, Linkedin } from "lucide-react";
import { fadeUp } from "@/lib/animations";

import groupPhoto from "@/assets/team/group.jpg";
import member1 from "@/assets/team/member1.png";
import member2 from "@/assets/team/member2.png";
import member3 from "@/assets/team/member3.png";
import member4 from "@/assets/team/member4.png";
import member5 from "@/assets/team/member5.png";
import member6 from "@/assets/team/member6.png";
import member7 from "@/assets/team/member7.png";
import member8 from "@/assets/team/member8.png";
import member9 from "@/assets/team/member9.png";
import member10 from "@/assets/team/member10.png";
import member11 from "@/assets/team/member11.png";
import member12 from "@/assets/team/member12.png";

const values = [
  { icon: Shield, title: "Resilience First", desc: "We engineer systems that withstand failure. Redundancy isn't optional — it's foundational." },
  { icon: Target, title: "Precision Execution", desc: "Every deployment is meticulously planned, tested, and validated before going live." },
  { icon: Eye, title: "Proactive Vigilance", desc: "We don't wait for problems. Our SOC monitors, detects, and neutralizes threats 24/7." },
  { icon: Users, title: "Partnership Mindset", desc: "We're not vendors. We're an extension of your leadership team — invested in your growth." },
];

const teamMembers = [
  { name: "Hemilton Manika", title: "Comercial Executive Officer", desc: "15+ years leading enterprise IT transformation across Southern Africa.", photo: member1, linkedin: "https://www.linkedin.com/in/hemilton-manika-99188a27/" },
  { name: "Chad Gorerekufa", title: "Business Development Manager", desc: "Drives strategic partnerships and enterprise client growth.", photo: member2, linkedin: "https://www.linkedin.com/in/chad-gore-040879a8/" },
  { name: "Gilbert Sayi", title: "Helpdesk & Support Lead", desc: "Leads 24/7 NOC operations with rapid incident response.", photo: member3, linkedin: "https://www.linkedin.com/in/gilbert-sayi-a08353aa/" },
  { name: "Archlove Arufandika", title: "Network and Support Engineer", desc: "Ensures 99.99% uptime across mission-critical infrastructure.", photo: member4, linkedin: "https://www.linkedin.com/in/archlove-arufandika/" },
  { name: "Willard Kunaka", title: "Sales Development Representative", desc: "Lead generation & qualification", photo: member5, linkedin: "#" },
  { name: "Phillip Muchechesi", title: "IT Project Manager", desc: "PMP-certified, delivering complex deployments on time and budget.", photo: member6, linkedin: "https://www.linkedin.com/in/phillip-t-muchechesi-473757334/" },
  { name: "Elwin Ngilazi", title: "Finance & Operations Officer", desc: "Oversees financial planning and operational efficiency.", photo: member7, linkedin: "https://www.linkedin.com/in/tanyaradzwa-ngilazi-40151333a/" },
  { name: "Tinotenda Maswera", title: "Software Developer", desc: "Builds internal tools and client-facing platforms.", photo: member8, linkedin: "https://www.linkedin.com/in/tinotenda-maswera-49a950258/" },
  { name: "Vannessa Suwali", title: "Data Center Technician", desc: "Manages physical infrastructure, cabling, and rack deployments.", photo: member9, linkedin: "https://www.linkedin.com/in/vanessa-suwali-4a3314324/" },
  { name: "Simbarashe Mashinge", title: "Sales Account Executive", desc: "Closing deals", photo: member10, linkedin: "#" },
  { name: "Samantha Masilo", title: "Sales Customer Success Manager", desc: "Retention, expansion, and long-term client value", photo: member11, linkedin: "#" },
  { name: "Ephraim Kunaka", title: "IT support", desc: "Intern", photo: member12, linkedin: "https://www.linkedin.com/in/ephraim-s-kunaka-0b2610213/" },
];

const About = () => (
  <div className="min-h-screen pt-28">
    {/* About Header */}
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">About Timeless Technology</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mt-3">
              Building Zimbabwe's Digital <span className="gradient-text">Backbone</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded with a single conviction: that Zimbabwean businesses deserve the same caliber of 
              IT infrastructure as Fortune 500 companies. Timeless Technology has grown from a small team 
              of engineers into the nation's most trusted enterprise IT partner.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we serve over 200 organizations — from financial institutions to mining operations — 
              providing the connectivity, cloud, security, and managed services that keep Zimbabwe's 
              critical industries running.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="glass-card">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="metric-text text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <p className="metric-text text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="metric-text text-3xl font-bold text-foreground">99.99%</p>
                <p className="text-sm text-muted-foreground mt-1">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="metric-text text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Certified Engineers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding section-alt border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Our Core <span className="gradient-text">Principles</span></h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} variants={fadeUp} custom={i} className="glass-card text-center">
              <v.icon size={28} strokeWidth={1.5} className="text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Group Photo */}
    <section className="section-padding border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our People</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mt-3">
            Meet the Team Behind Your <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering secure, reliable, and scalable technology solutions.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="relative rounded-2xl overflow-hidden shadow-xl">
          <img src={groupPhoto} alt="Timeless Technology Team" width={1920} height={768} className="w-full h-[300px] md:h-[420px] lg:h-[500px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="font-display text-2xl md:text-3xl font-bold text-white">Timeless Technology Team</p>
            <p className="text-white/80 text-sm mt-1">Certified engineers · Harare, Zimbabwe</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Team Grid */}
    <section className="section-padding section-alt border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div key={member.name} variants={fadeUp} custom={i} className="group glass-card p-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img src={member.photo} alt={member.name} width={512} height={512} loading="lazy" className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 p-2 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:brightness-110" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary mt-0.5">{member.title}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Trust Element */}
    <section className="section-padding border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <Shield size={32} strokeWidth={1.5} className="text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground max-w-2xl mx-auto">
            Backed by a skilled team with expertise in networking, cloud, cybersecurity, and enterprise systems.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every member of our team holds industry-recognized certifications and is committed to continuous professional development.
          </p>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding section-alt border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="glass py-16 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-foreground">Ready to Partner With Us?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Let's discuss how we can transform your IT infrastructure.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
