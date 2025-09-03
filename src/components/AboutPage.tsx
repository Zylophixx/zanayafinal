import React from 'react';
import { Heart, Users, Award, Clock, ArrowLeft } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zanaya</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Founded with compassion and dedication to serve families during their most difficult times
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={32} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Zanaya, we believe that every life deserves to be honored with dignity, respect, and adherence to 
            sacred traditions. Our mission is to provide compassionate last rites services that bring comfort to 
            grieving families while ensuring that religious customs and cultural practices are observed with the 
            utmost reverence.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zanaya was born from a deep understanding of the challenges families face when arranging 
            last rites services. Founded by a team of compassionate individuals who recognized the need 
            for a service that combines traditional values with modern convenience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We started with a simple belief: that no family should have to navigate the complex 
            requirements of funeral arrangements alone, especially during their time of grief. Today, 
            we serve families across multiple faiths with the same dedication and care.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Compassion</p>
                <p className="text-gray-600 text-sm">Every interaction is guided by empathy and understanding</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Respect</p>
                <p className="text-gray-600 text-sm">Honoring all faiths and traditions with equal reverence</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Excellence</p>
                <p className="text-gray-600 text-sm">Maintaining the highest standards in all our services</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Accessibility</p>
                <p className="text-gray-600 text-sm">Making quality services available to all families</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Experienced Team</h4>
            <p className="text-gray-600 text-sm">
              Our team consists of experienced professionals who understand the nuances of different 
              religious practices and cultural requirements.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600 text-sm">
              We maintain strict quality standards for all materials and services, ensuring that 
              every arrangement meets the highest expectations.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">
              Death doesn't wait for business hours. Our emergency response team is available 
              around the clock to assist you when you need us most.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Have Questions About Our Services?</h3>
        <p className="text-blue-100 mb-6">
          Our compassionate team is here to help you understand our process and answer any questions.
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