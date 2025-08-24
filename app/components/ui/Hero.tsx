"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string | string[];
  backgroundImage?: string;
  description?: string | string[];
}

export default function Hero({ title, subtitle, backgroundImage, description }: HeroProps) {
  const imageUrl =
    backgroundImage ||
    "https://static.wixstatic.com/media/96058e_88b42e9950c649489a133c05f4951a34~mv2.jpg/v1/fill/w_1062,h_453,al_c,q_85,enc_avif,quality_auto/96058e_88b42e9950c649489a133c05f4951a34~mv2.jpg";

  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image src={imageUrl} alt="Hero background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-yellow-300">
          {subtitle}
        </h2>

        <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <Link
          href="/book"
          className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Book Your Experience
        </Link>
      </div>
    </section>
  );
}
