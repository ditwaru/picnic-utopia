"use client";

import Link from "next/link";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  popular?: boolean;
}

// Static services data
const services: Service[] = [
  {
    id: "mini-villa-date",
    name: "Mini Villa Date",
    description: "Perfect for intimate romantic moments",
    price: 285,
    features: ["Luxury setup", "Premium decor", "2-person experience"],
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "villa-upgrade",
    name: "The Villa Upgrade",
    description: "Enhanced luxury experience for special occasions",
    price: 375,
    features: ["Premium setup", "Enhanced decor", "Champagne service"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    popular: true,
  },
  {
    id: "vip-casa-amor",
    name: "VIP Casa Amor",
    description: "Ultimate luxury experience for unforgettable moments",
    price: 450,
    features: ["Luxury setup", "Premium decor", "Full service", "Photography"],
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "luxury-outdoor",
    name: "Luxury Outdoor Picnic",
    description: "Classic luxury picnic experience",
    price: 250,
    features: ["Premium setup", "Beautiful decor", "Outdoor luxury"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "bubble-tent",
    name: "Luxury Bubble Tent Picnic",
    description: "Unique bubble tent experience",
    price: 350,
    features: ["Bubble tent", "Premium setup", "Weather protected"],
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "proposal-picnic",
    name: "Luxury Proposal Picnic",
    description: "Perfect setting for your special moment",
    price: 425,
    features: ["Romantic setup", "Premium decor", "Photography", "Special touches"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "bubble-proposal",
    name: "Luxury Bubble Tent Proposal Picnic",
    description: "Ultimate romantic proposal experience",
    price: 525,
    features: ["Bubble tent", "Romantic setup", "Premium decor", "Photography"],
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Picnic Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our curated selection of luxury picnic experiences, each designed to create
            unforgettable moments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>

                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
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

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-900">${service.price}</div>
                  <Link
                    href={`/services/${service.id}`}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-2 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            href="/book"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
