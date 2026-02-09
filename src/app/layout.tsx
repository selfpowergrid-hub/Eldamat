import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, AIChat } from "@/components";

export const metadata: Metadata = {
  title: "Eldamat Security Services | Professional Security Solutions in Kenya",
  description: "Eldamat Security Services provides professional security guarding, CCTV installation, VIP protection, dog services, and fire safety solutions across East Africa. Licensed by PSRA.",
  keywords: "security services Kenya, security guards Nairobi, CCTV installation, VIP protection, guard dogs, fire safety, PSRA licensed security",
  authors: [{ name: "Eldamat Security Services" }],
  openGraph: {
    title: "Eldamat Security Services | Your Safety, Our Priority",
    description: "Professional security services across East Africa. Security guarding, CCTV, VIP protection & more.",
    type: "website",
    locale: "en_KE",
    siteName: "Eldamat Security Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eldamat Security Services",
    description: "Professional security services across East Africa. Licensed by PSRA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <AIChat />
      </body>
    </html>
  );
}
