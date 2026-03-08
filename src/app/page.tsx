import Hero from "./components/sections/Hero";
import WhyUs from "./components/sections/WhyUs";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
