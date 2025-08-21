"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Bot, MessageSquare, Globe, Smartphone, Workflow, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Automations",
    description: "Transform repetitive tasks into intelligent, self-learning systems that adapt and improve over time.",
    features: ["Process Automation", "Data Analysis", "Workflow Optimization", "Smart Decision Making"],
    gradient: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Bot,
    title: "Intelligent Agents",
    description: "Custom AI agents that understand context, learn from interactions, and provide intelligent responses.",
    features: ["Question Answering", "Task Execution", "Learning Capabilities", "Multi-modal Understanding"],
    gradient: "from-yellow-600 to-yellow-700"
  },
  {
    icon: MessageSquare,
    title: "Advanced Chatbots",
    description: "Conversational AI that engages customers naturally and handles complex queries with precision.",
    features: ["Natural Language Processing", "Context Awareness", "Multi-language Support", "Integration Ready"],
    gradient: "from-yellow-400 to-yellow-500"
  },
  {
    icon: Globe,
    title: "Custom Web Apps",
    description: "Responsive, scalable web applications built with modern technologies and AI integration.",
    features: ["Responsive Design", "AI Integration", "Real-time Features", "Cloud Deployment"],
    gradient: "from-yellow-500 to-yellow-700"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS and Android apps with seamless AI capabilities and intuitive user experiences.",
    features: ["Native Performance", "Cross-platform", "AI-powered Features", "App Store Ready"],
    gradient: "from-yellow-600 to-yellow-800"
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "End-to-end business process analysis and optimization using AI-driven insights.",
    features: ["Process Analysis", "Efficiency Gains", "Cost Reduction", "Performance Metrics"],
    gradient: "from-yellow-400 to-yellow-600"
  }
];

export default function ServicesSection() {
  const handleLearnMore = (serviceName: string) => {
    const subject = encodeURIComponent(`Interested in ${serviceName} - IRON AI`);
    const body = encodeURIComponent(`Hi IRON AI Team,

I hope this message finds you well. I came across your ${serviceName} service on your website and I'm very interested in learning more about how it could benefit our business.

We're looking to enhance our operations through AI technology, and your ${serviceName} solution seems like it could be exactly what we need. I'd love to discuss:

- How this service works in practice
- Potential implementation timeline
- Pricing and package options
- Success stories from similar businesses

Could we schedule a call to discuss this further? I'm available for a conversation at your earliest convenience.

Looking forward to hearing from you.

Best regards`);
    
    window.location.href = `mailto:info@iron-ai.org?subject=${subject}&body=${body}`;
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive AI solutions tailored to your business needs, 
            from intelligent automation to custom applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleLearnMore(service.title)}
                  className="w-full border-2 border-gray-200 py-2 rounded-lg group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-yellow-600 group-hover:text-black group-hover:border-transparent transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}