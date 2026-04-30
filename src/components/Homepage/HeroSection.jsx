"use client";
import Link from "next/link";
import Image from "next/image";
import qurbanihat from "@/app/assets/Qurbanihat.png";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src={qurbanihat}
        alt="Qurbani Hat"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Qurbani Animal 🐄
        </h1>

        <p className="mb-6 text-lg">
          Fresh, verified & ready for Qurbani
        </p>

        <Link href="/Allanimals">
          <button className="px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition">
            Browse Animals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;