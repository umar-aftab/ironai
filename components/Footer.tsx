import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI Automation", href: "#services" },
    { name: "Intelligent Agents", href: "#services" },
    { name: "Advanced Chatbots", href: "#services" },
    { name: "Web Applications", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Process Optimization", href: "#services" }
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Data Protection", href: "#" }
  ];

  // Fixed: Added proper type for the parameter
  const scrollToSection = (sectionId: string) => {
    if (sectionId && sectionId.startsWith('#')) {
      const elementId = sectionId.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/95 to-gray-900/90"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info - Takes up more space */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              {/* Logo and Brand */}
              <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                  <img 
                    src="/logo_ironAI.png" 
                    alt="IRON AI Logo" 
                    className="w-12 h-12 rounded-xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl"></div>
                </div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    IRON AI
                  </span>
                  <p className="text-sm text-gray-400 mt-1">Intelligent Automation Solutions</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                Transforming businesses with cutting-edge AI solutions. From intelligent automation to custom applications, 
                we&apos;re your partner in digital innovation and growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  { 
                    icon: Mail, 
                    label: "Email Us", 
                    value: "info@iron-ai.org", 
                    href: "mailto:info@iron-ai.org",
                    desc: "Get in touch anytime"
                  },
                  { 
                    icon: Phone, 
                    label: "Call or WhatsApp", 
                    value: "+1 825 712 6485", 
                    href: "tel:+18257126485",
                    desc: "Available Mon-Fri, 8am-6pm"
                  },
                  { 
                    icon: MapPin, 
                    label: "Our Location", 
                    value: "Calgary, Alberta", 
                    href: "#",
                    desc: "Western Canada headquarters"
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 group-hover:from-yellow-500/30 group-hover:to-yellow-600/30 border border-yellow-400/20 group-hover:border-yellow-400/40 rounded-xl flex items-center justify-center transition-all duration-300">
                      <contact.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-yellow-400 font-medium mb-1">{contact.value}</p>
                      <p className="text-sm text-gray-400">{contact.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-400/20 rounded-2xl p-6"
              >
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-gray-300 text-sm mb-4">Get the latest AI insights and updates delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="flex-1 bg-black/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={service.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(service.href);
                      }}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 cursor-pointer block py-1"
                    >
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">Company</h3>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.href.startsWith('#')) {
                          scrollToSection(item.href);
                        }
                      }}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 cursor-pointer block py-1"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">Legal & Resources</h3>
              <ul className="space-y-3 mb-8">
                {legal.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 cursor-pointer block py-1"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Certifications/Badges */}
              <div className="space-y-4">
                <h4 className="font-medium text-white">Trusted & Certified</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "ISO 27001",
                    "SOC 2 Type II",
                    "GDPR Compliant"
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 text-gray-400">
                <p>© {currentYear} IRON AI. All rights reserved.</p>
                <div className="flex items-center gap-2 text-sm">
                  <span>Built with</span>
                  <span className="text-yellow-400">♥</span>
                  <span>using cutting-edge AI technology</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {[
                  { name: "LinkedIn", href: "#", icon: "📧" },
                  { name: "Twitter", href: "#", icon: "📱" },
                  { name: "GitHub", href: "#", icon: "💻" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-yellow-500/20 border border-gray-700 hover:border-yellow-400/40 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  >
                    <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  );
}