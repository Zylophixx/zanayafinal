import React from 'react';
import { ArrowLeft, Users, Clock, Star, CheckCircle } from 'lucide-react';
import { religions } from '../data/religions';
import { servicesByReligion } from '../data/services';

interface ServicesPageProps {
  onBack: () => void;
}

export function ServicesPage({ onBack }: ServicesPageProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive last rites services tailored to your faith and traditions
        </p>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Users size={24} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Religious Personnel</h3>
          <p className="text-gray-600 text-sm">
            Qualified priests, pandits, imams, granthis, monks, and acharyas for authentic ceremonies
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={24} className="text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Arrangements</h3>
          <p className="text-gray-600 text-sm">
            Full coordination of cremation, burial, transportation, and all ceremonial requirements
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <Star size={24} className="text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Materials</h3>
          <p className="text-gray-600 text-sm">
            High-quality traditional items and materials that meet religious specifications
          </p>
        </div>
      </div>

      {/* Services by Religion */}
      <div className="space-y-8">
        {religions.map((religion) => {
          const services = servicesByReligion[religion.id as keyof typeof servicesByReligion] || [];
          
          return (
            <div key={religion.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{religion.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{religion.name} Services</h3>
                    <p className="text-gray-600 text-sm">{religion.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <span className="text-lg font-bold text-blue-600">₹{service.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                      {service.duration && (
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Clock size={12} />
                          <span>{service.duration}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Features */}
      <div className="mt-12 bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Complete Coordination</p>
                <p className="text-gray-600 text-sm">We handle all logistics and coordination so you can focus on your family</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Quality Materials</p>
                <p className="text-gray-600 text-sm">Premium quality items that meet traditional and religious specifications</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Experienced Personnel</p>
                <p className="text-gray-600 text-sm">Trained professionals who understand religious customs and traditions</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Timely Service</p>
                <p className="text-gray-600 text-sm">Prompt response and efficient service delivery when time is critical</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Transparent Pricing</p>
                <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden costs or surprise charges</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">24/7 Support</p>
                <p className="text-gray-600 text-sm">Round-the-clock availability for emergency situations and support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Arrange Services?</h3>
        <p className="text-blue-100 mb-6">
          Let us help you honor your loved one with the dignity and respect they deserve.
        </p>
        <button
          onClick={onBack}
          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Begin Arrangement
        </button>
      </div>
    </div>
  );
}