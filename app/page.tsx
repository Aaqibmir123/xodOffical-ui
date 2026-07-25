import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import Gallery from "@/components/sections/Gallery";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Topbar /> */}
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <Partners />
      <Contact/>
      <Gallery />
      {/* <CallToAction /> */}
      <Footer />
    </main>
  );
}