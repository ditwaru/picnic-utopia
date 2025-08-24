import { getPage } from "ditwaru-aws-helpers";
import ServicesClient from "@/components/pages/Services";

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

interface ServicesSection {
  type: "services";
  title: string;
  items: Service[];
}

export default async function Services() {
  const data = await getPage("picnic-utopia", "services");

  if (!data) {
    throw new Error("Failed to fetch services data");
  }

  // Extract sections from CMS data at build time with proper type casting
  const heroSection = data.sections.find(
    (section) => section.type === "hero"
  ) as unknown as HeroSection;
  const baselineSection = data.sections.find(
    (section) => section.type === "baseline"
  ) as unknown as BaselineSection;
  const addOnsSection = data.sections.find(
    (section) => section.type === "addOns"
  ) as unknown as AddOnsSection;
  const contactSection = data.sections.find(
    (section) => section.type === "contact"
  ) as unknown as ContactSection;
  const servicesSection = data.sections.find(
    (section) => section.type === "services"
  ) as unknown as ServicesSection;

  const services = servicesSection.items;
  return (
    <ServicesClient
      heroSection={heroSection}
      baseline={baselineSection}
      addOns={addOnsSection}
      contact={contactSection}
      services={services}
    />
  );
}
