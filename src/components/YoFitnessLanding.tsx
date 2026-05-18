import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";

export default function YoFitnessLanding() {
  return (
    <main>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      
      <Footer />
    </main>
  );
}