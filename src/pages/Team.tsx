import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Shield } from "lucide-react";
import { fadeUp } from "@/lib/animations";

import groupPhoto from "@/assets/team/group.jpg";
import member1 from "@/assets/team/member1.jpg";
import member2 from "@/assets/team/member2.jpg";
import member3 from "@/assets/team/member3.jpg";
import member4 from "@/assets/team/member4.jpg";
import member5 from "@/assets/team/member5.jpg";
import member6 from "@/assets/team/member6.jpg";
import member7 from "@/assets/team/member7.jpg";
import member8 from "@/assets/team/member8.jpg";
import member9 from "@/assets/team/member9.jpg";
import member10 from "@/assets/team/member10.jpg";
import member11 from "@/assets/team/member11.jpg";
import member12 from "@/assets/team/member12.jpg";

const teamMembers = [
  { name: "Tapiwa Moyo", title: "Chief Executive Officer", desc: "15+ years leading enterprise IT transformation across Southern Africa.", photo: member1, linkedin: "#" },
  { name: "Rumbidzai Chikore", title: "Chief Technology Officer", desc: "Architect of large-scale cloud migrations and hybrid infrastructure.", photo: member2, linkedin: "#" },
  { name: "Tendai Madziva", title: "Head of Network Engineering", desc: "Designs resilient ISP and enterprise WAN/LAN architectures.", photo: member3, linkedin: "#" },
  { name: "Nyasha Mutasa", title: "Cybersecurity Lead", desc: "Certified ethical hacker protecting 200+ enterprise environments.", photo: member4, linkedin: "#" },
  { name: "Blessing Chikowore", title: "Cloud Solutions Architect", desc: "Microsoft and AWS certified, specializing in hybrid cloud.", photo: member5, linkedin: "#" },
  { name: "Fadzai Nyamukapa", title: "Systems Administrator", desc: "Ensures 99.99% uptime across mission-critical infrastructure.", photo: member6, linkedin: "#" },
  { name: "Kudakwashe Banda", title: "IT Project Manager", desc: "PMP-certified, delivering complex deployments on time and budget.", photo: member7, linkedin: "#" },
  { name: "Chiedza Maponga", title: "Software Developer", desc: "Builds internal tools and client-facing platforms.", photo: member8, linkedin: "#" },
  { name: "Takunda Sibanda", title: "Helpdesk & Support Lead", desc: "Leads 24/7 NOC operations with rapid incident response.", photo: member9, linkedin: "#" },
  { name: "Ruvimbo Makoni", title: "Business Development Manager", desc: "Drives strategic partnerships and enterprise client growth.", photo: member10, linkedin: "#" },
  { name: "Simbarashe Dube", title: "Data Center Technician", desc: "Manages physical infrastructure, cabling, and rack deployments.", photo: member11, linkedin: "#" },
  { name: "Tsitsi Munyoro", title: "Finance & Operations Officer", desc: "Oversees financial planning and operational efficiency.", photo: member12, linkedin: "#" },
];

const Team = () => (
  <div className="min-h-screen pt-28">
    {/* Header */}
    <section className="section-padding pb-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our People</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Meet the Team Behind Your <span className="gradient-text">Infrastructure</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering secure, reliable, and scalable technology solutions.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Group Photo */}
    <section className="px-6 pb-16">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={groupPhoto}
            alt="Timeless Technology Team"
            width={1920}
            height={768}
            className="w-full h-[300px] md:h-[420px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <p className="font-display text-2xl md:text-3xl font-bold text-white">
              Timeless Technology Team
            </p>
            <p className="text-white/80 text-sm mt-1">50+ certified engineers · Harare, Zimbabwe</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Team Grid */}
    <section className="section-padding section-alt border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              className="group glass-card p-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:brightness-110"
                    aria-label={`${member.name} LinkedIn`}
                  >
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
            <h2 className="font-display text-3xl font-bold text-foreground">Ready to Work With Our Team?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Let's discuss how our experts can transform your IT infrastructure.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Team;
