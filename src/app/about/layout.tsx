import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Eldamat Security Services',
    description: 'Learn about Eldamat Security Services. Providing professional security guards, CCTV solutions, and K9 units across East Africa for over 15 years.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
