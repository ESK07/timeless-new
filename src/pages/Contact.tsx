import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
              Let's Build Your <span className="gradient-text">IT Foundation</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Request a complimentary infrastructure audit. Our engineers will assess your environment and deliver a detailed roadmap.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
              {submitted ? (
                <div className="glass-card text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Request Received</h3>
                  <p className="mt-2 text-muted-foreground">Our team will contact you within 24 hours to schedule your audit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card space-y-5">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Request IT Audit</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Moyo" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Work Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="john@company.co.zw" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your Organization" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company Size</label>
                    <select required aria-label="Company Size" className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                      <option value="">Select size</option>
                      <option>1-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">What's your biggest IT challenge?</label>
                    <textarea required rows={3} className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Describe your current pain points..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all">
                    Request Free Audit <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2} className="space-y-6">
              <div className="glass-card">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Get In Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone size={18} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium text-foreground">+263 867 722 2444</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail size={18} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">sales@timelesstechnology.co.zw</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin size={18} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Office</p>
                      <p className="text-sm font-medium text-foreground">2nd Floor, Pasangano Building, Avondale, Harare, Zimbabwe</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">Our team responds to all inquiries within 24 hours. For urgent infrastructure issues, call our 24/7 support line.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Support team online</span>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} strokeWidth={1.5} className="text-primary/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">2nd Floor, Pasangano Building, Avondale, Harare, Zimbabwe</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
