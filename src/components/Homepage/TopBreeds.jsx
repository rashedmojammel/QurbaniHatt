import React from 'react';
import { getAllAnimals } from '@/lib/data';

const TopBreeds = async () => {
    const animals = await getAllAnimals();

    const topAnimals = animals.sort((a, b) => b.price - a.price).slice(0, 4);

    return (
        <div className="py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Top Breeds</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topAnimals.map((animal) => (
                    <div key={animal.id} className="bg-white rounded-xl shadow overflow-hidden">
                        <figure>
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="p-4 text-center">
                            <p className="font-semibold">{animal.name}</p>
                            <p className="text-sm text-gray-500">{animal.breed}</p>
                            <p className="text-primary font-bold mt-1">৳{animal.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBreeds;