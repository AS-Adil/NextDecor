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

