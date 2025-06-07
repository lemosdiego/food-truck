import About from "@/sections/about/About";
import Champions from "@/sections/champions/Champions";
import Contacts from "@/sections/contacts/Contacts";
import Differential from "@/sections/differential/Differential";
import Footer from "@/sections/footer/Footer";
import Hero from "@/sections/hero/Hero";
import Schedule from "@/sections/schedule/Schedule";
import Testimonials from "@/sections/testimonials/Testimonials";

export default function BurguerPage() {
  return (
    <main>
      <Hero />
      <About />
      <Champions />
      <Differential />
      <Testimonials />
      <Contacts />
      <Footer />
    </main>
  );
}
