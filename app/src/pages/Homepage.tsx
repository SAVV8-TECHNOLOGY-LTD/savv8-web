import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BrandsCarousel from "@/components/BrandsCarousel";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import NewsBlogs from "@/components/NewsBlogs";
import WaitlistForm from "@/components/WaitlistForm";

const Homepage = () => {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <NewsBlogs />
      <WaitlistForm />
    </>
  );
};
export default Homepage;
