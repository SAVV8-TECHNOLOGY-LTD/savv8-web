import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import NewsBlogs from "@/components/NewsBlogs";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <NewsBlogs />
      <WaitlistForm />
      <Footer />
    </main>
  );
};

export default Index;
