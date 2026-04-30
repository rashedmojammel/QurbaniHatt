import FeaturedAnimals from "@/components/Homepage/FeaturedAnimals";
import HeroSection from "@/components/Homepage/HeroSection";
import TipsSection from "@/components/Homepage/TipsSection";
import TopBreeds from "@/components/Homepage/TopBreeds";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
    <FeaturedAnimals></FeaturedAnimals>
    <TipsSection></TipsSection>
    <TopBreeds></TopBreeds>
    </>
  );
}
