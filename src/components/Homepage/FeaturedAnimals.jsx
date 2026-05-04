"use client";
import { useEffect, useState } from "react";
import AnimalCard from "../shared/AnimalCard";
import { Spinner } from "@heroui/react";
// s

const FeaturedAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading,setLoading] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        setAnimals(data.slice(0, 4));
        setLoading(false);

      });
      
  }, []);

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Animals
      </h2>

      {loading ? (
        <div className="flex items-center gap-4 justify-center">
      <Spinner size="xl"/>
    </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedAnimals;