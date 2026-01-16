import BestSelling from "@/components/BestSelling";
import CallToAction from "@/components/CallToAction";
import FeaturedCategories from "@/components/FeaturedCategories";
import Hero from "@/components/Hero";
import MaterialsSection from "@/components/MaterialsSection";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  justify-center bg-white font-sans">
      <Hero></Hero>
      <FeaturedCategories></FeaturedCategories>
      <WhyChoose></WhyChoose>
      <BestSelling></BestSelling>
      <MaterialsSection></MaterialsSection>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>



    </div>
  );
}

// Hero Section
// Modern décor for modern living

// Featured Categories
// Furniture, Lighting, Rugs, Wall Art

// Why Choose NextDecor
// Quality materials, modern design, fair pricing

// Best Selling Products
// Showcase 4–6 items from your dataset

// Craftsmanship & Materials
// Highlight wood, marble, bamboo, velvet, wool

// Customer Experience
// Comfort, durability, elegant living

// Call To Action
// Explore Our Collection → /items