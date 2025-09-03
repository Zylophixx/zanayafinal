import React from 'react';
import { ArrowRight, Heart, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';

interface HomepageProps {
  onBeginArrangement: () => void;
}

export function Homepage({ onBeginArrangement }: HomepageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Honoring Life's Final Journey with
            <span className="text-blue-600 block mt-2">Dignity & Compassion</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Zanaya provides respectful last rites services across all faiths, ensuring your loved ones 
            receive the farewell they deserve with traditional customs and modern convenience.
          </p>
          
          {/* Begin Arrangement Button */}
          <button
            onClick={onBeginArrangement}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            Begin Arrangement
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* What is Zanaya Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Zanaya?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zanaya is a comprehensive platform that simplifies the process of arranging last rites services 
            while maintaining the sanctity and traditions of your faith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Heart size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassionate Care</h3>
            <p className="text-gray-600 leading-relaxed">
              We understand the emotional weight of loss. Our team provides gentle guidance and support 
              throughout the entire process, treating every family with the utmost respect and empathy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Shield size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Faith Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              Our experienced team is well-versed in the customs and traditions of Hindu, Muslim, Christian, 
              Sikh, Buddhist, and Jain faiths, ensuring authentic and respectful ceremonies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Availability</h3>
            <p className="text-gray-600 leading-relaxed">
              Death doesn't wait for convenient hours. Our emergency response team is available 
              round-the-clock to assist you when you need us most, ensuring prompt and reliable service.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use Zanaya Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use Zanaya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple, step-by-step process makes arranging last rites services straightforward 
            during a difficult time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step Cards */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Select Your Faith</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose your religion from our supported faiths. Each religion has specific customs 
                  and requirements that we'll help you navigate with care and accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Kit Items</h3>
                <p className="text-gray-600 leading-relaxed">
                  Select from essential and optional items specific to your faith. We provide 
                  traditional materials and modern conveniences to honor your customs properly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Add Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhance your arrangement with additional services like priest coordination, 
                  transportation, cremation, or burial services tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant WhatsApp Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Submit your requirements instantly via WhatsApp. Our team will contact you within 
                  30 minutes to confirm details and coordinate the services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Zanaya Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zanaya?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine traditional values with modern efficiency to provide unparalleled service 
            during your time of need.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Trained professionals with deep knowledge of religious customs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reliable Service</h4>
              <p className="text-gray-600 text-sm">Consistent, dependable service when you need it most</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Materials</h4>
              <p className="text-gray-600 text-sm">Premium quality items that honor traditional requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Personal Touch</h4>
              <p className="text-gray-600 text-sm">Personalized service that respects your family's unique needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Let us help you honor your loved one with the dignity they deserve.
        </p>
        <button
          onClick={onBeginArrangement}
          className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
        >
          Start Your Arrangement
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}