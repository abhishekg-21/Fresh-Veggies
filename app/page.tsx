import Header from "./components/Header";
import HeroBanner from "./components/Hero";
import ServiceIcons from "./components/ServiceIcons";
import AboutBanner from "./components/AboutBanner";
import FeaturedProducts from "./components/FeaturedProducts";
import OurTeam from "./components/OurTeam";
import Testimonials from "./components/Testimonials";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HeroBanner />
      <ServiceIcons />
      <AboutBanner />
      <FeaturedProducts />
      {/* Add more sections here as needed */}
      <OurTeam />
      <Testimonials />
      <BlogPreview />
      {/* <Footer /> */}
    </>
  );
}
