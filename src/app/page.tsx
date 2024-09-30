import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/TestimonialCard";
import Upcoming from "@/components/Upcoming";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() { 
  return ( 
    <main className=" antialiased min-h-screen bg-black/[0.96] bg-grid-white/[0.04]">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <Upcoming/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
