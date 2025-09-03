import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, HelpCircle } from 'lucide-react';

interface FAQPageProps {
  onBack: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: 'General',
    question: 'What is Zanaya and how does it work?',
    answer: 'Zanaya is a comprehensive platform that helps families arrange last rites services according to their religious traditions. Simply select your faith, choose required items and services, provide your contact details, and we\'ll coordinate everything for you via WhatsApp.'
  },
  {
    id: '2',
    category: 'General',
    question: 'Which religions do you support?',
    answer: 'We support Hindu, Muslim, Christian, Sikh, Buddhist, and Jain last rites ceremonies. Each religion has specific customs and requirements that our experienced team understands and respects.'
  },
  {
    id: '3',
    category: 'Services',
    question: 'How quickly can you arrange services?',
    answer: 'We understand the urgency of last rites arrangements. Our team responds within 30 minutes of your WhatsApp request, and we can typically arrange services within 2-4 hours depending on your requirements and location.'
  },
  {
    id: '4',
    category: 'Services',
    question: 'Do you provide 24/7 emergency services?',
    answer: 'Yes, we provide 24/7 emergency support. Death doesn\'t wait for business hours, and neither do we. Our emergency contact number +91 8273441052 is always available.'
  },
  {
    id: '5',
    category: 'Pricing',
    question: 'How is pricing determined?',
    answer: 'Pricing is transparent and based on the items and services you select. Essential religious items are included in the base kit, while additional services like priest coordination, cremation, or burial are priced separately.'
  },
  {
    id: '6',
    category: 'Pricing',
    question: 'Are there any hidden charges?',
    answer: 'No, we believe in complete transparency. All costs are clearly displayed during the selection process. The final price you see is exactly what you\'ll pay, with no hidden fees or surprise charges.'
  },
  {
    id: '7',
    category: 'Process',
    question: 'What happens after I send my WhatsApp request?',
    answer: 'After sending your arrangement details via WhatsApp, our team will call you within 30 minutes to confirm all details, discuss timing, and coordinate the services. We\'ll handle all arrangements from there.'
  },
  {
    id: '8',
    category: 'Process',
    question: 'Can I modify my arrangement after submitting?',
    answer: 'Yes, you can modify your arrangement by contacting our team directly. We understand that circumstances can change, and we\'re flexible in accommodating reasonable modifications to your service requirements.'
  },
  {
    id: '9',
    category: 'Religious',
    question: 'Do you have qualified religious personnel for each faith?',
    answer: 'Absolutely. We work with qualified Pandits, Imams, Priests, Granthis, Monks, and Acharyas who are well-versed in their respective religious traditions and can conduct ceremonies with proper authenticity.'
  },
  {
    id: '10',
    category: 'Religious',
    question: 'Can you accommodate specific regional or caste customs?',
    answer: 'Yes, we understand that practices can vary by region and community. Our team is experienced in handling specific customs and will work with you to ensure all traditional requirements are met appropriately.'
  }
];

export function FAQPage({ onBack }: FAQPageProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle size={32} className="text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our services and process
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium mt-1">
                  {item.category}
                </span>
                <h3 className="font-semibold text-gray-900 text-lg">{item.question}</h3>
              </div>
              {openItems.includes(item.id) ? (
                <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems.includes(item.id) && (
              <div className="px-6 pb-4">
                <div className="pl-16">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
        <p className="text-blue-100 mb-6">
          Our compassionate team is available 24/7 to answer any questions you may have.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+918273441052"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Call Us: +91 8273441052
          </a>
          <a
            href="https://wa.me/918273441052"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}