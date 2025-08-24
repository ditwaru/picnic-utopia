"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroSection {
  type: "hero";
  title: string;
  text: string;
  image: string;
}

interface HomeClientProps {
  heroSection: HeroSection;
}

export default function HomeClient({ heroSection }: HomeClientProps) {
  return (
    <section className="relative flex flex-1 items-center justify-center py-20">
      <Image src={heroSection.image} alt="Hero background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400/90 via-orange-400/90 to-yellow-300/90 backdrop-blur-sm rounded-2xl p-8 mb-6 shadow-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 font-serif leading-tight drop-shadow-2xl">
            {heroSection.title}
          </h1>
        </div>
        <p className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 text-pink-200 max-w-5xl mx-auto leading-relaxed font-['Dancing_Script'] font-medium drop-shadow-md">
          {heroSection.text}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            href="/about"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-amber-900 font-semibold py-4 px-8 rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 drop-shadow-2xl text-lg"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-4 px-8 rounded-full hover:from-pink-300 hover:to-purple-400 transition-all duration-300 drop-shadow-2xl text-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
