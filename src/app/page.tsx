import {
  Hero,
  ServicesSection,
  WhyChooseUs,
  TestimonialsAndClients,
  ContactCTA,
} from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eldamat Security Services | Private Security, Guards & CCTV",
  description: "Eldamat Security Services offers professional security guards, CCTV installation, VIP protection, and K9 units in Kenya. Your safety is our priority.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials & Clients */}
      <TestimonialsAndClients />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}
