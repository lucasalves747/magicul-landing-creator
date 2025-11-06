import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Topics from "@/components/Topics";
import Description from "@/components/Description";
import Speakers from "@/components/Speakers";
import Contact from "@/components/Contact";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Topics />
      <Description />
      <Speakers />
      <Contact />
      <Checkout />
      <Footer />
    </div>
  );
};

export default Index;
