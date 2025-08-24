"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  duration: string;
  guestCount: number;
  location: string;
  image: string;
  specialFeatures: string[];
  category: string;
}

interface HeroSection {
  type: "hero";
  title: string;
  text: string;
  image: string;
}

interface BaselineSection {
  type: "baseline";
  title: string;
  standardInclusions: string[];
  additionalInclusions: string[];
}

interface AddOnsSection {
  type: "addOns";
  title: string;
  items: string[];
}

interface ContactSection {
  type: "contact";
  title: string;
  phone: string;
  owner: string;
  email: string;
  depositInfo: string;
}

interface ServicesClientProps {
  heroSection: HeroSection;
  baseline: BaselineSection;
  addOns: AddOnsSection;
  contact: ContactSection;
  services: Service[];
}

export default function ServicesClient({
  heroSection,
  baseline,
  addOns,
  contact,
  services,
}: ServicesClientProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative flex flex-1 items-center justify-center py-20">
        {/* Background Image */}
        <Image
          src={heroSection.image}
          alt="Services hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-pink-200">
            {heroSection.title}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-pink-200 max-w-2xl mx-auto leading-relaxed">
            {heroSection.text}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is carefully crafted to provide the perfect setting for your special
              occasion
            </p>
          </div>

          {/* Baseline Description */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{baseline.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Standard Inclusions:</h4>
                <ul className="space-y-2 text-gray-600">
                  {baseline.standardInclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Also Included:</h4>
                <ul className="space-y-2 text-gray-600">
                  {baseline.additionalInclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-48">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium text-yellow-300">{service.price}</p>
                    <p className="text-xs text-gray-200">{service.duration}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-amber-900 font-semibold py-3 px-6 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:cursor-pointer drop-shadow-2xl">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 flex-shrink-0">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors hover:cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                <div className="text-right">
                  <p className="text-2xl font-bold text-yellow-600">{selectedService.price}</p>
                  <p className="text-lg text-gray-500">{selectedService.duration}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {selectedService.fullDescription}
              </p>

              {/* Baseline + Extras Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{`What's Included:`}</h3>

                {/* Baseline Items */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Standard Picnic Utopia Experience:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                    {baseline.standardInclusions.map((item, index) => (
                      <span key={index}>✓ {item}</span>
                    ))}
                    {baseline.additionalInclusions.map((item, index) => (
                      <span key={index}>✓ {item}</span>
                    ))}
                  </div>
                </div>

                {/* Service-Specific Extras */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Plus These Special Features:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.specialFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Add-Ons Section */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{addOns.title}:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                  {addOns.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">{contact.title}</h4>
                <p className="text-blue-800 text-sm mb-2">{contact.depositInfo}</p>
                <div className="text-blue-800 text-sm">
                  <p>
                    <strong>Phone:</strong> {contact.phone} | {contact.owner} | Owner
                  </p>
                  <p>
                    <strong>Email:</strong> {contact.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer - Fixed */}
            <div className="flex-shrink-0 p-6 border-t border-gray-200">
              <div className="flex gap-4">
                <Link
                  href={`/contact?service=${selectedService.title}`}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-amber-900 font-semibold py-3 px-6 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 hover:cursor-pointer text-center drop-shadow-2xl"
                >
                  Book This Service
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors hover:cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
