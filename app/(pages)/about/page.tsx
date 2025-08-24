import { getPage } from "ditwaru-aws-helpers";
import AboutClient from "@/components/pages/About";

interface HeroSection {
  type: "hero";
  title: string;
  text: string;
  image?: string;
}

interface ContentSection {
  type: "content";
  title: string;
  text: string | string[];
}

export default async function About() {
  const data = await getPage("picnic-utopia", "about");

  if (!data) {
    throw new Error("Failed to fetch about data");
  }

  // Extract sections from CMS data at build time
  const heroSection = data.sections.find(
    (section) => section.type === "hero"
  ) as unknown as HeroSection;
  const contentSections = data.sections.filter(
    (section) => section.type === "content"
  ) as unknown as ContentSection[];

  return <AboutClient heroSection={heroSection} contentSections={contentSections} />;
}
