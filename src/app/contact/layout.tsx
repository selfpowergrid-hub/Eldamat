import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Eldamat Security Services',
    description: 'Request a quotation or get in touch with our security experts today. Offices in Nairobi with coverage across East and Central Africa.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
