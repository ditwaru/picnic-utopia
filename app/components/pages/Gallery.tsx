"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroSection {
  type: "hero";
  title: string;
  text: string;
  image: string;
}

interface GallerySection {
  type: "gallery";
  title: string;
  description: string;
  images: {
    id: string;
    src: string;
    alt: string;
    caption?: string;
  }[];
}

interface GalleryClientProps {
  heroSection: HeroSection;
  gallerySection: GallerySection;
}

export default function GalleryClient({ heroSection, gallerySection }: GalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<(typeof gallerySection.images)[0] | null>(
    null
  );

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative flex flex-1 items-center justify-center py-20">
        <Image
          src={heroSection.image}
          alt="Gallery hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-pink-200">
            {heroSection.title}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-pink-200 max-w-2xl mx-auto leading-relaxed">
            {heroSection.text}
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{gallerySection.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{gallerySection.description}</p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallerySection.images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square relative">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Image Info Overlay */}
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 transition-colors"
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

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative max-w-full max-h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain"
                  priority
                />
              </div>
            </div>

            {/* Image Info */}
            {selectedImage.caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg max-w-2xl mx-auto">
                <p className="text-lg font-medium text-center">{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
