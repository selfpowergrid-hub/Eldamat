'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const systemKnowledge = `You are the AI Assistant for Eldamat Security Services, a professional security company based in Nairobi, Kenya.

COMPANY INFORMATION:
- Name: Eldamat Security Services
- Headquarters: Zul Arcade, Ground Floor, Oginga Odinga Street, Nairobi
- Branch: Donholm, Nairobi
- Phone: +254 752 285 595 | +254 725 285 595
- Email: Lngetich@eldamatsec.co.ke | operation@eldamatsec.co.ke
- Licensed by PSRA (Private Security Regulatory Authority)

SERVICES OFFERED:
1. Security Guarding - Residential, Commercial, Government, Construction sites
2. CCTV Installation & Surveillance Systems
3. VIP Protection & Bodyguard Services
4. Dog Services - Guard dogs (Rottweiler, Doberman, German Shepherd)
5. Fire Safety - Extinguishers, blankets, training
6. Forensic Investigations
7. Undercover Investigations
8. Personal Character Research
9. Staff Screening & HR Support
10. Security Audits & Consultancy
11. Alarm Systems & Access Control
12. Electric Fence Installation
13. Counter Terrorism Training
14. First Aid Training & Supplies

VISION: To be a multinational private security provider in East and Central Africa.
MISSION: To provide professional private security services that meet international standards.

CERTIFICATIONS: KRA Compliance, NSSF, SHA, PSRA License, Certificate of Incorporation

AFFILIATIONS: Kenya Police, Kenya Red Cross, St. John Ambulance, Fire Brigade, Phoenix Insurance

Always be helpful, professional, and guide visitors to contact the company for quotations. For emergencies, always recommend calling +254 752 285 595.`;

const quickResponses: { [key: string]: string } = {
    'services': 'We offer comprehensive security services including:\n\n🛡️ **Security Guarding** - 24/7 professional guards\n📹 **CCTV Installation** - Latest surveillance technology\n🐕 **Dog Services** - Trained guard dogs\n👔 **VIP Protection** - Executive bodyguard services\n🔥 **Fire Safety** - Equipment & training\n🔍 **Investigations** - Forensic & undercover\n\nWould you like detailed information about any specific service?',
    'contact': 'You can reach us through:\n\n📞 **Phone:** [+254 752 285 595](tel:+254752285595)\n📱 **WhatsApp:** [+254 725 285 595](tel:+254725285595)\n📧 **Email:** operation@eldamatsec.co.ke\n📍 **Office:** Zul Arcade, Ground Floor, Oginga Odinga Street, Nairobi\n\nOur team is available 24/7 for emergencies!',
    'quote': 'I\'d be happy to help you get a quotation! For an accurate estimate, we\'ll need to know:\n\n1. Type of security service needed\n2. Location of the premises\n3. Number of guards/hours required\n4. Any special requirements\n\nYou can fill out our contact form or call us directly at [+254 752 285 595](tel:+254752285595) for a free consultation.',
    'price': 'Our pricing is customized based on:\n\n• Type of service\n• Duration and hours\n• Number of personnel\n• Equipment required\n• Location\n\nFor day/night guard services, dog handlers, and other rates, please contact us for a personalized quotation. Call [+254 752 285 595](tel:+254752285595) or request a quotation on our contact page.',
    'emergency': '🚨 **For Emergencies, Call Immediately:**\n\n📞 [+254 752 285 595](tel:+254752285595)\n📞 [+254 725 285 595](tel:+254725285595)\n\nOur rapid response team is available 24/7!',
};

export default function AIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hello! 👋 I\'m the Eldamat Security AI Assistant. How can I help you today?\n\nI can assist you with:\n• Information about our services\n• Getting a security quotation\n• Contact details\n• Emergency response',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const generateResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('provide')) {
            return quickResponses['services'];
        }
        if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('address') || lowerMessage.includes('location')) {
            return quickResponses['contact'];
        }
        if (lowerMessage.includes('quote') || lowerMessage.includes('estimate') || lowerMessage.includes('consultation')) {
            return quickResponses['quote'];
        }
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate') || lowerMessage.includes('charge')) {
            return quickResponses['price'];
        }
        if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || lowerMessage.includes('help now')) {
            return quickResponses['emergency'];
        }
        if (lowerMessage.includes('guard') || lowerMessage.includes('guarding')) {
            return 'Our **Security Guarding Services** include:\n\n• Day & Night Guards (12-hour shifts)\n• Armed & Unarmed Guards\n• Residential & Commercial Protection\n• Construction Site Security\n• Event Security\n\nAll our guards undergo thorough training and must have a Certificate of Good Conduct from CID. Would you like a quotation for guarding services?';
        }
        if (lowerMessage.includes('cctv') || lowerMessage.includes('camera') || lowerMessage.includes('surveillance')) {
            return 'Our **CCTV & Surveillance Solutions** include:\n\n📹 HD & 4K Camera Systems\n📡 Remote Monitoring\n💾 Cloud & Local Storage\n🔔 Motion Detection Alerts\n📱 Mobile App Access\n\nWe handle installation, maintenance, and 24/7 monitoring. Shall I arrange a site survey?';
        }
        if (lowerMessage.includes('dog') || lowerMessage.includes('k9') || lowerMessage.includes('canine')) {
            return 'Our **Dog Services Division** offers:\n\n🐕 **Guard Dogs:** Rottweiler, Doberman, Boerbull, German Shepherd\n🎓 **Training:** Professional dog handler training\n🔒 **Patrol Dogs:** For night security operations\n\nOur dogs are well-trained for detection, protection, and patrol duties. Interested in our dog services?';
        }
        if (lowerMessage.includes('vip') || lowerMessage.includes('bodyguard') || lowerMessage.includes('protection')) {
            return 'Our **VIP Protection Services** include:\n\n👔 Executive Protection for CEOs & Directors\n🚗 Secure Transportation\n🏠 Residential Protection (24hr live-in)\n⛪ Church & Event Security\n👩 Specialized Women Protection\n\nOur bodyguards are trained in counter-terrorism and close quarter protection. Need VIP security?';
        }
        if (lowerMessage.includes('fire') || lowerMessage.includes('extinguisher')) {
            return 'Our **Fire Safety Services** include:\n\n🧯 Fire Extinguisher Supply & Maintenance\n🔥 Fire Blankets & Hose Reels\n🚨 Smoke & Heat Detectors\n🚒 Emergency Response Coordination\n📚 Fire Safety Training\n\nWe offer annual maintenance contracts. Need fire safety equipment?';
        }
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return 'Hello! Welcome to Eldamat Security Services! 👋\n\nHow can I assist you today? Whether you need security guards, CCTV installation, or VIP protection, we\'re here to help keep you safe.';
        }
        if (lowerMessage.includes('thank')) {
            return 'You\'re welcome! 😊 If you have any more questions about our security services, feel free to ask. For immediate assistance, you can always call us at **+254 752 285 595**. Stay safe!';
        }

        return 'Thank you for your interest in Eldamat Security Services! 🛡️\n\nI can help you with:\n• Our security services\n• Getting a quotation\n\n• Contact information\n• Emergency assistance\n\nPlease let me know what you\'d like to know more about, or call us directly at **+254 752 285 595** for immediate assistance.';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const response = generateResponse(userMessage.content);
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, assistantMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const quickButtons = [
        { label: '📋 Services', query: 'What services do you offer?' },
        { label: '💰 Get Quotation', query: 'I need a quotation' },
        { label: '📞 Contact', query: 'Contact information' },
        { label: '🚨 Emergency', query: 'Emergency help' },
    ];

    return (
        <>
            {/* Chat Button - Gold Theme */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:shadow-[0_0_50px_rgba(201,168,76,0.5)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label="Open AI Chat"
            >
                {isOpen ? (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-[#0a0a0a]" />
                    </>
                )}
            </button>

            {/* Chat Panel - Dark Theme */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] bg-[#1a1a1a] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in border border-[#c9a84c]/20">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#c9a84c] to-[#a8892e] p-4 text-[#0a0a0a]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center p-0.5">
                                <img src="/images/logo.svg" alt="Eldamat Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Eldamat AI Assistant</h3>
                                <div className="flex items-center gap-1.5 text-xs text-[#0a0a0a]/70">
                                    <span className="w-2 h-2 rounded-full bg-green-700 animate-pulse" />
                                    Online 24/7
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${message.role === 'user'
                                        ? 'bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] rounded-br-md'
                                        : 'bg-[#2d2d2d] text-[#e8e6e1] border border-[#3a3a3a] rounded-bl-md'
                                        }`}
                                >
                                    <div
                                        className="text-sm leading-relaxed whitespace-pre-line"
                                        dangerouslySetInnerHTML={{
                                            __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-[#2d2d2d] rounded-2xl px-4 py-3 border border-[#3a3a3a]">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-[#c9a84c] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    <div className="px-4 py-2 border-t border-[#2d2d2d] bg-[#1a1a1a]">
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {quickButtons.map((btn) => (
                                <button
                                    key={btn.label}
                                    onClick={() => {
                                        setInput(btn.query);
                                        handleSubmit({ preventDefault: () => { } } as React.FormEvent);
                                    }}
                                    className="flex-shrink-0 px-3 py-1.5 text-xs font-medium bg-[#2d2d2d] text-[#999999] hover:bg-[#c9a84c] hover:text-[#0a0a0a] rounded-full transition-colors border border-[#3a3a3a] hover:border-transparent"
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-[#2d2d2d] bg-[#1a1a1a]">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#3a3a3a] text-white placeholder-[#6b6b6b] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 outline-none text-sm transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="px-4 py-3 bg-gradient-to-r from-[#c9a84c] to-[#a8892e] text-[#0a0a0a] rounded-xl hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
