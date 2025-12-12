import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FlaskConical, Package, CreditCard, Truck, ArrowLeft, MessageCircle, HelpCircle } from 'lucide-react';
import { useFAQs } from '../hooks/useFAQs';

const categoryIcons: { [key: string]: React.ReactElement } = {
    'PRODUCT & USAGE': <FlaskConical className="w-5 h-5" />,
    'ORDERING & PACKAGING': <Package className="w-5 h-5" />,
    'PAYMENT METHODS': <CreditCard className="w-5 h-5" />,
    'SHIPPING & DELIVERY': <Truck className="w-5 h-5" />,
};

const categoryColors: { [key: string]: string } = {
    'PRODUCT & USAGE': 'text-navy-900 border-gold-400 bg-gold-50/50',
    'ORDERING & PACKAGING': 'text-navy-900 border-gold-400 bg-gold-50/50',
    'PAYMENT METHODS': 'text-navy-900 border-gold-400 bg-gold-50/50',
    'SHIPPING & DELIVERY': 'text-navy-900 border-gold-400 bg-gold-50/50',
};

const FAQ: React.FC = () => {
    const { faqs, categories, loading } = useFAQs();
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const filteredFAQs = activeCategory
        ? faqs.filter(faq => faq.category === activeCategory)
        : faqs;

    const whatsappUrl = `https://wa.me/639062349763?text=${encodeURIComponent('Hi! I have a question about your products.')}`;

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-navy-900 border-t-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b-4 border-gold-400 sticky top-0 z-10 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <a
                            href="/"
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-navy-900" />
                        </a>
                        <div className="flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-gold-500" />
                            <h1 className="text-xl md:text-2xl font-bold text-navy-900">Frequently Asked Questions</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${activeCategory === null
                            ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                            : 'bg-white text-gray-600 border-navy-900 hover:bg-navy-50 hover:text-navy-900'
                            }`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${activeCategory === category
                                ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                                : 'bg-white text-gray-600 border-navy-900 hover:bg-navy-50 hover:text-navy-900'
                                }`}
                        >
                            <span className={activeCategory === category ? 'text-gold-400' : 'text-gold-500'}>
                                {categoryIcons[category]}
                            </span>
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ Items by Category */}
                {(activeCategory ? [activeCategory] : categories).map(category => (
                    <div key={category} className="mb-8">
                        <div className={`flex items-center gap-2 mb-4 px-3 py-2 rounded-lg border border-gold-400 bg-white shadow-sm`}>
                            <span className="text-gold-500">
                                {categoryIcons[category] || <HelpCircle className="w-5 h-5" />}
                            </span>
                            <h2 className="font-bold text-sm uppercase tracking-wide text-navy-900">{category}</h2>
                        </div>

                        <div className="space-y-3">
                            {filteredFAQs
                                .filter(faq => faq.category === category)
                                .map(faq => (
                                    <div
                                        key={faq.id}
                                        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <button
                                            onClick={() => toggleItem(faq.id)}
                                            className="w-full px-5 py-4 flex items-center justify-between text-left group"
                                        >
                                            <span className="font-medium text-navy-900 pr-4 group-hover:text-gold-600 transition-colors">{faq.question}</span>
                                            {openItems.has(faq.id) ? (
                                                <ChevronUp className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gold-500 flex-shrink-0 transition-colors" />
                                            )}
                                        </button>
                                        {openItems.has(faq.id) && (
                                            <div className="px-5 pb-4 border-t border-gray-100 bg-gray-50/50">
                                                <p className="text-gray-600 whitespace-pre-line leading-relaxed pt-4">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

                {/* Contact CTA */}
                <div className="mt-12 bg-white rounded-2xl border border-gold-400/30 p-6 md:p-8 text-center shadow-lg">
                    <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-2">
                        Still have questions?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        We're here to help! Reach out to us via WhatsApp for quick assistance.
                    </p>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-800 transition-colors shadow-md hover:shadow-lg"
                    >
                        <MessageCircle className="w-5 h-5 text-gold-400" />
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
