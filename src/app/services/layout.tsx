import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Services | Eldamat Security',
    description: 'Explore our comprehensive security solutions including CCTV installation, VIP protection, alarm response, and professional security guarding across East Africa.',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
