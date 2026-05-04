"use client";
import { useEffect, useState } from "react";
import AnimalCard from "../shared/AnimalCard";
import { Spinner } from "@heroui/react";

const FeaturedAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false)); 
  }, []);

  return (
    <div className="py-12 px-4">
      
      <h2 className="text-3xl font-bold text-center mb-8 
      animate__animated animate__fadeInUp">
        Featured Animals
      </h2>

      
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-4 py-10 
        animate__animated animate__fadeIn">
          
          <Spinner size="xl" />
          <p className="text-gray-500 text-sm">Loading animals...</p>

        </div>
      ) : (
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal, index) => (
            <div
              key={animal.id}
              className={`animate__animated animate__zoomIn`}
              style={{ animationDelay: `${index * 0.2}s` }} 
            >
              <AnimalCard animal={animal} />
            </div>
          ))}
        </div>

      )}
    </div>
  );
};

export default FeaturedAnimals;