'use client';

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Award } from "lucide-react";

const clientLogos = [
  {
    name: "Maktabah As Sunnah",
    logo: "/MakSunnah.png",
    category: "Education"
  },
  {
    name: "Growth Organization",
    logo: "/globe.svg",
    category: "Business"
  },
  {
    name: "Gentle Launch",
    logo: "/GentleLaunch.png",
    category: "Marketing"
  },
  {
    name: "Mayy Organic",
    logo: "/MayyOrganic.png",
    category: "E-Commerce"
  },
  {
    name: "Heal Muslim Minds",
    logo: "/HealMuslimMinds.png",
    category: "Healthcare"
  },
  {
    name: "Gritliy",
    logo: "/Gritliy.png",
    category: "HR/Recruitment"
  },
  {
    name: "Green Recruitment",
    logo: "/file.svg", 
    category: "HR/Recruitment"
  }
];

const organizations = [
  {
    name: "Attabotics",
    logo: "/Attabotics.png",
    description: "Robotics & Automation"
  },
  {
    name: "Alberta Health Services",
    logo: "/AlbertaHealthServices.png",
    description: "Healthcare"
  },
  {
    name: "OPG",
    logo: "/OntarioPowerGeneration.png",
    description: "Energy"
  },
  {
    name: "Alberta Pension Plan",
    logo: "/AlbertaPensionPlan.png",
    description: "Government"
  }
];

export default function ClientSection() {
   return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            We partner with innovative companies across industries to deliver AI solutions that drive real results.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group cursor-pointer"
              >
                <div className="relative p-8 h-40 flex flex-col items-center justify-center backdrop-blur-sm bg-gray-50/50 hover:bg-white/80 border border-gray-200/50 hover:border-yellow-200/50 shadow-md hover:shadow-xl transition-all duration-500 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 group-hover:from-yellow-500/5 to-transparent rounded-2xl transition-all duration-500"></div>
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="relative max-h-16 max-w-full object-contain mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="relative">
                    <div className="text-xs text-gray-500 border border-gray-300/50 group-hover:border-yellow-300/50 group-hover:text-yellow-600 px-3 py-1 rounded-full bg-white/50 group-hover:bg-yellow-50/50 transition-all duration-300 font-medium">
                      {client.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Partners
              </span>
            </h3>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            We've collaborated with major organizations to implement large-scale AI solutions and digital transformation initiatives.
          </p>
        </motion.div>

        {/* Organizations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative p-8 h-56 flex flex-col items-center justify-center text-center backdrop-blur-sm bg-gradient-to-br from-white/80 to-gray-50/80 hover:from-white hover:to-gray-50 border border-gray-200/50 hover:border-yellow-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 group-hover:from-yellow-500/5 to-transparent rounded-2xl transition-all duration-500"></div>
                <img
                  src={org.logo}
                  alt={`${org.name} logo`}
                  className="relative max-h-20 max-w-full object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <p className="relative text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                  {org.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-12 md:p-16 text-black shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Users, number: "50+", label: "Satisfied Clients" },
              { icon: Award, number: "99%", label: "Success Rate" },
              { icon: Building2, number: "15+", label: "Industries Served" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-16 h-16 mx-auto mb-6" />
                <div className="text-5xl font-bold mb-3">{stat.number}</div>
                <div className="text-xl font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}