import { getPage } from "ditwaru-aws-helpers";
import Image from "next/image";

export default async function About() {
  const data = await getPage("picnic-utopia", "about");

  if (!data) return null;
  const heroSection = data.sections.find((section) => section.type === "hero")!;
  const contentSections = data.sections.filter((section) => section.type === "content")!;

  return (
    <div>
      <section className="relative flex flex-1 items-center justify-center py-20">
        {/* Background Image */}
        <Image
          src={heroSection.image!}
          alt="About hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heroSection.title || "About Picnic Utopia"}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {heroSection.text}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {contentSections.map((section, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{section.title}</h2>
              <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                {Array.isArray(section.text) ? (
                  <div className="space-y-6 text-left">
                    {section.text.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="leading-relaxed">{section.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
