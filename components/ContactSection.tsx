import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Clock, Globe, Users } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your email service
      // Example:
      // const emailBody = `
      //   New contact form submission:
      //   Name: ${formData.name}
      //   Email: ${formData.email}
      //   Company: ${formData.company || 'Not provided'}
      //   Service: ${formData.service || 'Not specified'}
      //   Message: ${formData.message}
      // `;
      // await SendEmail({
      //   to: 'info@iron-ai.org',
      //   from_name: 'IRON AI Website',
      //   subject: `New Inquiry from ${formData.name}`,
      //   body: emailBody,
      // });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Sorry, something went wrong. Please try again later or contact us directly at info@iron-ai.org");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setError('');
      }, 5000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "AI Automation",
    "Intelligent Agents", 
    "Advanced Chatbots",
    "Web Applications",
    "Mobile Applications",
    "Process Optimization",
    "Custom Solution",
    "General Consultation"
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/3 to-yellow-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-400/20 rounded-full px-4 py-2 text-sm font-medium text-yellow-700 mb-6">
            <Send className="w-4 h-4" />
            Ready to Transform Your Business?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Get Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your business with AI? Get in touch for a free consultation 
            and discover how we can transform your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to revolutionize your business with AI? We're here to help you every step of the way.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { 
                  icon: Mail, 
                  title: "Email Us", 
                  info: "info@iron-ai.org", 
                  desc: "Send us an email anytime - we respond within 24 hours",
                  href: "mailto:info@iron-ai.org"
                },
                { 
                  icon: Phone, 
                  title: "Call or WhatsApp", 
                  info: "+1 825 712 6485", 
                  desc: "Available Mon-Fri from 8am to 6pm MST",
                  href: "tel:+18257126485"
                },
                { 
                  icon: MapPin, 
                  title: "Our Location", 
                  info: "Calgary, Alberta", 
                  desc: "Western Canada headquarters - schedule an in-person meeting",
                  href: "#"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start gap-4 p-6 backdrop-blur-sm bg-white/80 hover:bg-white border border-gray-200/50 hover:border-yellow-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-100 to-yellow-200 group-hover:from-yellow-200 group-hover:to-yellow-300 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <contact.icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-yellow-600 transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-yellow-600 font-semibold mb-2 text-lg">{contact.info}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{contact.desc}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-6 text-yellow-400">Why Choose IRON AI?</h4>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Fast 24-hour response time" },
                  { icon: Users, text: "50+ successful AI implementations" },
                  { icon: Globe, text: "Serving clients across North America" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="backdrop-blur-sm bg-white/80 border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-black">Start Your AI Transformation</h3>
                <p className="text-black/80 mt-2">Tell us about your project and we'll get back to you within 24 hours</p>
              </div>

              <div className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We've received your message and will get back to you within 24 hours with a detailed proposal.
                    </p>
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                      <p className="text-sm text-yellow-700">
                        <strong>What's next?</strong> Our team will review your requirements and prepare a custom AI strategy tailored to your business needs.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    {/* Company and Service Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-900">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                          className="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-gray-900"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={6}
                        placeholder="Tell us about your project, goals, current challenges, and how we can help transform your business with AI..."
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </div>
                      )}
                    </motion.button>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border border-red-200 rounded-xl"
                      >
                        <p className="text-red-600 text-sm text-center">{error}</p>
                      </motion.div>
                    )}

                    {/* Form Footer */}
                    <div className="text-center">
                      <p className="text-xs text-gray-500 leading-relaxed">
                        By submitting this form, you agree to our{' '}
                        <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a> and{' '}
                        <a href="#" className="text-yellow-600 hover:underline">Terms of Service</a>.
                        <br />
                        We'll contact you within 24 hours to discuss your project.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}