import React from 'react';
import { getAllAnimals } from '@/lib/data';
import { FaFire } from 'react-icons/fa';

const TopBreeds = async () => {
  const animals = await getAllAnimals();


  const topAnimals = [...animals]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  return (
    <div className="py-16 px-4 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        Top Breeds
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topAnimals.map((animal) => (
          <div
            key={animal.id}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            
            <div className="relative overflow-hidden">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                ৳{animal.price.toLocaleString()}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 text-center space-y-1">
              <h3 className="font-semibold text-lg group-hover:text-green-600 transition">
                {animal.name}
              </h3>
              <p className="text-sm text-gray-500">{animal.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;