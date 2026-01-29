import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Theatre from "@/components/Theatre"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Theatre />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
