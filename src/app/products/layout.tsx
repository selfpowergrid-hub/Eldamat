import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Products | Eldamat Security',
    description: 'Discover state-of-the-art security products, from biometric access control points to fire safety equipment and advanced CCTV surveillance systems.',
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
