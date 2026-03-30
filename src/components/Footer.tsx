import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, X, Linkedin, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/">
            <Logo className="h-10 w-auto text-foreground" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Enterprise-grade IT infrastructure for businesses that can't afford downtime.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/17X9MnSi3g/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="Visit our X (Twitter) page"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <X className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/timelesstechzw/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://wa.me/263788511100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground transition-colors">Connectivity & ISP</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Cloud & Microsoft 365</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Cybersecurity</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors">Managed IT</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} strokeWidth={1.5} /> +263 867 722 2444</li>
            <li className="flex items-center gap-2"><Mail size={14} strokeWidth={1.5} /> sales@timelesstechnology.co.zw</li>
            <li className="flex items-start gap-2"><MapPin size={14} strokeWidth={1.5} className="mt-0.5" /> 2nd Floor, Pasangano Building, Avondale, Harare, Zimbabwe</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Timeless Technology. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Engineered for resilience.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
