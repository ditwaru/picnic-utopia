import { getPage } from "ditwaru-aws-helpers";
import GalleryClient from "@/components/pages/Gallery";

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

export default async function Gallery() {
  const data = await getPage("picnic-utopia", "gallery");

  if (!data) {
    throw new Error("Failed to fetch gallery data");
  }

  // Extract sections from CMS data at build time
  const heroSection = data.sections.find(
    (section) => section.type === "hero"
  ) as unknown as HeroSection;
  const gallerySection = data.sections.find(
    (section) => section.type === "gallery"
  ) as unknown as GallerySection;

  return <GalleryClient heroSection={heroSection} gallerySection={gallerySection} />;
}
