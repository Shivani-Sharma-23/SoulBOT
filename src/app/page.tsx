import HeroSection from "../components/landingPage/HeroSection";
import AboutSection from "../components/landingPage/ABOUT/AboutSection";
import ServiceSection from "../components/landingPage/ServiceSection";
import TestimonialSection from "../components/landingPage/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection /> 
      <ServiceSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
