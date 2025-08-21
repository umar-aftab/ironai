'use client';

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Pilot Program",
    subtitle: "Proof of Value",
    price: "$900",
    period: "monthly",
    hours: "5 hours/week",
    commitment: "3 months",
    annualFee: "n/a",
    totalCost: "$2,700",
    discount: "Short trial for new clients",
    popular: false,
    features: [
      "Short trial period",
      "AI chatbot setup",
      "Basic automation",
      "Performance analytics",
      "Email support"
    ]
  },
  {
    name: "Lite Tier",
    subtitle: "Chatbot Only",
    price: "$500",
    period: "monthly",
    hours: "2 hours/week",
    commitment: "24 months",
    annualFee: "$5,700",
    totalCost: "$12,000",
    discount: "5% off with annual payment",
    popular: false,
    features: [
      "AI chatbot implementation",
      "Basic flow management",
      "Standard integrations",
      "Monthly reporting",
      "Email support"
    ]
  },
  {
    name: "Standard Tier",
    subtitle: "Chatbot + Voice",
    price: "$1,000",
    period: "monthly",
    hours: "5 hours/week",
    commitment: "24 months",
    annualFee: "$11,400",
    totalCost: "$24,000",
    discount: "5% off with annual payment",
    popular: true,
    features: [
      "Fully managed AI chatbot",
      "Voice agent integration",
      "Advanced flow management",
      "Custom integrations",
      "Priority support"
    ]
  },
  {
    name: "Website Only",
    subtitle: "Retainer",
    price: "$500",
    period: "monthly",
    hours: "5 hours/week",
    commitment: "24 months",
    annualFee: "$5,700",
    totalCost: "$12,000",
    discount: "5% off with annual payment",
    popular: false,
    features: [
      "New/redesigned website",
      "Weekly maintenance",
      "Performance optimization",
      "Security updates",
      "Content management"
    ]
  },
  {
    name: "Website + App",
    subtitle: "Retainer",
    price: "$1,000",
    period: "monthly",
    hours: "5 hours/week",
    commitment: "24 months",
    annualFee: "$11,400",
    totalCost: "$24,000",
    discount: "5% off with annual payment",
    popular: false,
    features: [
      "Website + native iOS/Android app",
      "App store deployment",
      "Ongoing maintenance",
      "Feature updates",
      "Technical support"
    ]
  },
  {
    name: "All-In Bundle",
    subtitle: "Standard + Web/App",
    price: "$2,000",
    period: "monthly",
    hours: "5-10 hours/week",
    commitment: "24 months",
    annualFee: "$22,800",
    totalCost: "$48,000",
    discount: "5% off with annual payment",
    popular: false,
    features: [
      "Everything from Standard Tier",
      "Full website + mobile app",
      "Complete AI integration",
      "Dedicated project manager",
      "24/7 priority support"
    ]
  }
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              AI Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to scale with your business needs. 
            All plans include dedicated support and regular updates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-yellow-50/80 to-white/80 border-2 border-yellow-200/50' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}>
                {/* Gradient overlay for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 pointer-events-none" />
                )}

                <div className="relative text-center p-8 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">/{plan.period}</span>
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-600 mb-6">
                    <div className="bg-gray-50/50 rounded-xl p-4 space-y-2">
                      <p><span className="font-semibold text-gray-900">{plan.hours}</span> • {plan.commitment}</p>
                      <p>Annual: <span className="font-semibold text-gray-900">{plan.annualFee}</span></p>
                      <p>Total: <span className="font-semibold text-gray-900">{plan.totalCost}</span></p>
                    </div>
                  </div>
                  
                  {plan.discount && (
                    <div className="mb-6">
                      <div className="inline-block border border-yellow-300/50 bg-yellow-50/50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                        {plan.discount}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="relative px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start text-sm"
                      >
                        <Check className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black'
                        : 'bg-gray-900 hover:bg-black text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-12 rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Every business is unique. Let&apos;s discuss a tailored AI strategy that fits your specific requirements, 
                budget, and growth objectives.
              </p>
              <button
                onClick={scrollToContact}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}