import {
  Hero,
  ServicesSection,
  WhyChooseUs,
  TestimonialsAndClients,
  ContactCTA,
} from "@/components";

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
