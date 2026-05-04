"use client";
import Link from "next/link";
import Image from "next/image";
import qurbanihat from "@/app/assets/Qurbanihat.png";

const HeroSection = () => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src={qurbanihat}
        alt="Qurbani Hat"
        fill
        priority
        className="object-cover scale-105 animate__animated animate__zoomIn"
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 
        animate__animated animate__fadeInDown">
          Find Your Perfect <br />
          <span className="text-green-400 animate__animated animate__fadeInUp animate__delay-1s">
            Qurbani Animal 🐄
          </span>
        </h1>

        
        <p className="mb-8 text-lg md:text-xl text-gray-200 
        animate__animated animate__fadeInUp animate__delay-1s">
          verified & ready for your Qurbani. সহজে খুঁজুন, নিশ্চিতভাবে কিনুন।
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center 
        animate__animated animate__fadeInUp animate__delay-2s">
          
          <Link href="/Allanimals">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Browse Animals →
            </button>
          </Link>

          <Link href="/about">
            <button className="px-8 py-3 border border-white/70 hover:bg-white hover:text-black rounded-full hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;
      