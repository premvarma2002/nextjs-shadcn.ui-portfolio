//Components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <meta name="google-site-verification" content="TSdYz7pHZrOEUT_0Qqqi0YK80up-d2kmWX-lNp4yPtM" />
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
      
    </main>
  );
}
