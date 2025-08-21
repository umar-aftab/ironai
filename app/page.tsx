"use client";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import ClientSection from "../components/ClientSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
//import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ClientSection />
      <AboutSection />
      <ContactSection />
      <Footer />

    </div>
  );
}