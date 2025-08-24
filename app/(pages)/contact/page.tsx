import { getPage } from "ditwaru-aws-helpers";
import ContactClient from "@/components/pages/Contact";

interface HeroSection {
  type: "hero";
  title: string;
  text: string;
  image: string;
}

interface ContactInfoSection {
  type: "contactInfo";
  title: string;
  phone: string;
  email: string;
  owner: string;
  location: string;
  hours: string;
  socialMedia?: {
    instagram: string;
    facebook: string;
  };
  businessHours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  serviceAreas?: string[];
  responseTime?: string;
  bookingNotice?: string;
}

interface FormSection {
  type: "form";
  title: string;
  description: string;
  requiredFields?: string[];
  formInstructions?: string;
}

export default async function Contact() {
  const data = await getPage("picnic-utopia", "contact");

  if (!data) {
    throw new Error("Failed to fetch contact data");
  }

  // Extract sections from CMS data at build time
  const heroSection = data.sections.find(
    (section) => section.type === "hero"
  ) as unknown as HeroSection;
  const contactInfoSection = data.sections.find(
    (section) => section.type === "contactInfo"
  ) as unknown as ContactInfoSection;
  const formSection = data.sections.find(
    (section) => section.type === "form"
  ) as unknown as FormSection;

  // Get packages from services page for the dropdown
  const servicesData = await getPage("picnic-utopia", "services");
  const servicesSection = servicesData?.sections?.find(
    (section: { type: string }) => section.type === "services"
  ) as { items?: Array<{ id: string; title: string; price: number }> };
  const packages =
    servicesSection?.items?.map((service: { id: string; title: string; price: number }) => ({
      id: service.id,
      title: service.title,
      price: service.price,
    })) || [];

  return (
    <ContactClient
      heroSection={heroSection}
      contactInfo={contactInfoSection}
      formSection={formSection}
      packages={packages.map((pkg) => ({
        ...pkg,
        price: pkg.price.toString(),
      }))}
    />
  );
}
