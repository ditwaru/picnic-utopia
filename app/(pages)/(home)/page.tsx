import { getPage } from "ditwaru-aws-helpers";
import HomeClient from "@/components/pages/Home";

interface HeroSection {
  type: "hero";
  title: string;
  text: string;
  image: string;
}

export default async function Home() {
  const data = await getPage("picnic-utopia", "home");

  if (!data) {
    throw new Error("Failed to fetch home data");
  }

  // Extract sections from CMS data at build time
  const heroSection = data.sections.find(
    (section) => section.type === "hero"
  ) as unknown as HeroSection;

  return <HomeClient heroSection={heroSection} />;
}
