import React, { useState, useEffect } from 'react';
import { BookingData, Religion, KitItem, Service } from './types';
import { religions } from './data/religions';
import { religionKits } from './data/kits';
import { servicesByReligion } from './data/services';

import { Homepage } from './components/Homepage';
import { AboutPage } from './components/AboutPage';
import { FAQPage } from './components/FAQPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { StepIndicator } from './components/StepIndicator';
import { ReligionSelector } from './components/ReligionSelector';
import { KitSelector } from './components/KitSelector';
import { ServiceSelector } from './components/ServiceSelector';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { OrderSummary } from './components/OrderSummary';
import { ConfirmationPage } from './components/ConfirmationPage';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const STEPS = [
  'Home',
  'Religion',
  'Kit Items',
  'Services', 
  'Personal Info',
  'Review',
  'Confirmation'
];

type PageType = 'home' | 'about' | 'faq' | 'services' | 'contact';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHomepage, setShowHomepage] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [bookingData, setBookingData] = useState<BookingData>({
    religion: null,
    selectedKitItems: [],
    selectedServices: [],
    personalInfo: {
      name: '',
      address: '',
      phone: ''
    }
  });

  // Auto-select essential items when religion is selected
  useEffect(() => {
    if (bookingData.religion) {
      const kit = religionKits.find(k => k.religionId === bookingData.religion?.id);
      if (kit) {
        const essentialItems = kit.items.filter(item => item.required);
        setBookingData(prev => ({
          ...prev,
          selectedKitItems: essentialItems
        }));
      }
    }
  }, [bookingData.religion]);

  const handleBeginArrangement = () => {
    setShowHomepage(false);
    setCurrentPage('home');
    setCurrentStep(1); // Start with religion selection
  };

  const handlePageNavigation = (page: PageType) => {
    setCurrentPage(page);
    setShowHomepage(page === 'home');
    if (page === 'home') {
      setCurrentStep(0);
    }
  };

  const handleReligionSelect = (religion: Religion) => {
    setBookingData(prev => ({ ...prev, religion }));
  };

  const handleKitItemToggle = (item: KitItem) => {
    if (item.required) return; // Cannot toggle required items

    setBookingData(prev => {
      const isSelected = prev.selectedKitItems.some(selected => selected.id === item.id);
      const updatedItems = isSelected
        ? prev.selectedKitItems.filter(selected => selected.id !== item.id)
        : [...prev.selectedKitItems, item];
      
      return { ...prev, selectedKitItems: updatedItems };
    });
  };

  const handleServiceToggle = (service: Service) => {
    setBookingData(prev => {
      const isSelected = prev.selectedServices.some(selected => selected.id === service.id);
      const updatedServices = isSelected
        ? prev.selectedServices.filter(selected => selected.id !== service.id)
        : [...prev.selectedServices, service];
      
      return { ...prev, selectedServices: updatedServices };
    });
  };

  const handlePersonalInfoUpdate = (info: typeof bookingData.personalInfo) => {
    setBookingData(prev => ({ ...prev, personalInfo: info }));
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return bookingData.religion !== null;
      case 2: return bookingData.selectedKitItems.length > 0;
      case 3: return true; // Services are optional
      case 4: return bookingData.personalInfo.name && bookingData.personalInfo.address && bookingData.personalInfo.phone;
      case 5: return true;
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceedToNext() && currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      setCurrentPage('home');
      setShowHomepage(true);
      setCurrentStep(0);
    }
  };

  const handleSubmit = () => {
    setCurrentStep(6); // Move to confirmation page
  };

  const getCurrentStepContent = () => {
    if (currentPage === 'about') {
      return <AboutPage onBack={() => handlePageNavigation('home')} />;
    }
    
    if (currentPage === 'faq') {
      return <FAQPage onBack={() => handlePageNavigation('home')} />;
    }
    
    if (currentPage === 'services') {
      return <ServicesPage onBack={() => handlePageNavigation('home')} />;
    }
    
    if (currentPage === 'contact') {
      return <ContactPage onBack={() => handlePageNavigation('home')} />;
    }
    
    if (showHomepage) {
      return <Homepage onBeginArrangement={handleBeginArrangement} />;
    }

    switch (currentStep) {
      case 1:
        return (
          <ReligionSelector
            religions={religions}
            selectedReligion={bookingData.religion}
            onSelect={handleReligionSelect}
          />
        );
      
      case 2:
        if (!bookingData.religion) return null;
        const kit = religionKits.find(k => k.religionId === bookingData.religion.id);
        if (!kit) return null;
        
        return (
          <KitSelector
            religion={bookingData.religion}
            availableItems={kit.items}
            selectedItems={bookingData.selectedKitItems}
            onToggleItem={handleKitItemToggle}
          />
        );
      
      case 3:
        if (!bookingData.religion) return null;
        const availableServices = servicesByReligion[bookingData.religion.id as keyof typeof servicesByReligion] || [];
        
        return (
          <ServiceSelector
            services={availableServices}
            selectedServices={bookingData.selectedServices}
            onToggleService={handleServiceToggle}
            religion={bookingData.religion}
          />
        );
      
      case 4:
        return (
          <PersonalInfoForm
            personalInfo={bookingData.personalInfo}
            onUpdate={handlePersonalInfoUpdate}
          />
        );
      
      case 5:
        return (
          <OrderSummary
            bookingData={bookingData}
            onSubmit={handleSubmit}
          />
        );
      
      case 6:
        return <ConfirmationPage />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Zanaya
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              Compassionate last rites services with dignity and respect
              <Heart size={16} className="text-red-500" />
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Indicator */}
        {!showHomepage && currentStep < 6 && (
          <StepIndicator
            currentStep={currentStep - 1}
            totalSteps={5}
            stepLabels={STEPS.slice(1, 6)}
          />
        )}

        {/* Step Content */}
        <div className="mb-12">
          {getCurrentStepContent()}
        </div>

        {/* Navigation */}
        {!showHomepage && currentPage === 'home' && currentStep > 0 && currentStep < 5 && (
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <ChevronLeft size={20} />
              {currentStep === 1 ? 'Back to Home' : 'Previous'}
            </button>
            
            <div className="flex-1 text-center">
              <p className="text-sm text-gray-600">
                Step {currentStep} of {STEPS.length - 2}
              </p>
            </div>

            <button
              onClick={nextStep}
              disabled={!canProceedToNext()}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                canProceedToNext()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Zanaya</h3>
              <p className="text-gray-300 mb-4">
                Providing compassionate and dignified last rites services across all faiths. 
                We understand the importance of honoring your loved ones with respect and tradition.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 Zanaya. All rights reserved.
              </p>
            </div>

            {/* Other Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Other Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => handlePageNavigation('about')}
                    className="hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageNavigation('services')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageNavigation('contact')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handlePageNavigation('faq')}
                    className="hover:text-white transition-colors text-left"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+918273441052" className="hover:text-white transition-colors">
                    +91 8273441052
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>24/7 Emergency Support</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>💬</span>
                  <a 
                    href="https://wa.me/918273441052" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Available
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;