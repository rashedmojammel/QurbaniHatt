import React from 'react';
import Link from 'next/link';
import { getAllAnimals } from '@/lib/data';
// import { getAllAnimals } from '@/lib/data';
// import { getAllAnimals } from '@/lib/data';



const Page = async () => {
    const animals = await getAllAnimals();

    const categoryColor = {
        'Large Animal': 'badge-error',
        'Medium Animal': 'badge-warning',
        'Small Animal': 'badge-success',
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">All Animals</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {animals.map((animal) => (
                    <Link key={animal.id} href={`/animals/${animal.id}`}>
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-shadow">
                            <figure>
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="w-full h-48 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between items-start">
                                    <h2 className="card-title text-lg">{animal.name}</h2>
                                    <span className={`badge ${categoryColor[animal.category] || 'badge-neutral'}`}>
                                        {animal.category}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">{animal.breed} - {animal.type}</p>
                                <p className="text-sm"><span className="font-semibold">Location:</span> {animal.location}</p>
                                <p className="text-sm"><span className="font-semibold">Age:</span> {animal.age} years</p>
                                <p className="text-sm"><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
                                <div className="card-actions justify-between items-center mt-4">
                                    <span className="text-xl font-bold text-primary">
                                        ৳{animal.price.toLocaleString()}
                                    </span>
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {animals.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">No animals found</p>
                </div>
            )}
        </div>
    );
};

export default Page;