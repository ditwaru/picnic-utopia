import Hero from "@/components/ui/Hero";
import { getPage } from "ditwaru-aws-helpers";

export default async function Home() {
  const data = await getPage("picnic-utopia", "home");

  const [{ title, text, image }, { text: description }] = data?.sections!;

  return <Hero title={title} subtitle={text} backgroundImage={image} description={description} />;
}
