import React, { useState } from 'react';
import { ArrowLeft, Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `*ZANAYA - CONTACT INQUIRY*\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918273441052?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Zanaya</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help you 24/7. Reach out to us for any questions or immediate assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Emergency Contact */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-4">24/7 Emergency Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+918273441052"
                className="flex items-center gap-3 text-red-700 hover:text-red-800 transition-colors"
              >
                <Phone size={20} />
                <span className="font-semibold">+91 8273441052</span>
              </a>
              <a
                href="https://wa.me/918273441052"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-red-700 hover:text-red-800 transition-colors"
              >
                <MessageCircle size={20} />
                <span className="font-semibold">WhatsApp Available</span>
              </a>
            </div>
            <p className="text-red-600 text-sm mt-3">
              For immediate assistance with last rites arrangements
            </p>
          </div>

          {/* Contact Cards */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8273441052</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600">+91 8273441052</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">support@zanaya.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Availability</p>
                  <p className="text-gray-600">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-2">Currently Serving</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Delhi NCR (Delhi, Gurgaon, Noida, Faridabad)</li>
                  <li>• Mumbai Metropolitan Area</li>
                  <li>• Bangalore Urban District</li>
                  <li>• Pune Municipal Corporation</li>
                  <li>• Hyderabad & Secunderabad</li>
                </ul>
                <p className="text-blue-600 text-sm mt-2 font-medium">
                  Expanding to more cities soon. Contact us for availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Service Information">Service Information</option>
                <option value="Pricing Questions">Pricing Questions</option>
                <option value="Emergency Assistance">Emergency Assistance</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Please describe your inquiry or how we can help you..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <Send size={20} />
              Send Message via WhatsApp
            </button>
            
            <p className="text-center text-sm text-gray-600">
              This will open WhatsApp with your message pre-filled for quick sending
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}