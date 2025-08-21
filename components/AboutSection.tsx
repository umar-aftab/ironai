import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  Lightbulb,
  Shield,
  Clock,
  Globe2
} from "lucide-react";

const stats = [
  { icon: Users, number: "100+", label: "Projects Delivered" },
  { icon: Award, number: "99%", label: "Client Satisfaction" },
  { icon: TrendingUp, number: "5x", label: "Average ROI Increase" },
  { icon: Clock, number: "24/7", label: "Support Available" }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions."
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade security and reliability you can trust with your business."
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every solution is designed to deliver measurable business outcomes."
  },
  {
    icon: Globe2,
    title: "Scalable Solutions",
    description: "Our AI systems grow with your business, from startup to enterprise."
  }
];

export default function AboutSection() {
   return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
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
            Why Choose <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">IRON AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just another AI company. We&apos;re your strategic partner in digital transformation, 
            combining technical expertise with business acumen.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-100 to-yellow-200 group-hover:from-yellow-200 group-hover:to-yellow-300 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <stat.icon className="w-10 h-10 text-yellow-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full backdrop-blur-sm bg-gradient-to-br from-white/80 to-gray-50/80 group-hover:from-white group-hover:to-gray-50 border border-gray-200/50 group-hover:border-yellow-200/50 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 group-hover:from-yellow-500/5 to-transparent transition-all duration-500"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:from-yellow-600 group-hover:to-yellow-700 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <value.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Building the Future with AI
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At IRON AI, we believe artificial intelligence should amplify human potential, not replace it. 
              Our team of AI specialists, engineers, and business strategists work together to create solutions 
              that transform how businesses operate, making them more efficient, intelligent, and profitable.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Machine Learning", "Natural Language Processing", "Computer Vision", "Automation", "Cloud Computing"].map((tech) => (
                <motion.span 
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 hover:bg-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}