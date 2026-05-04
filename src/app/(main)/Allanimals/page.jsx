import React from 'react';
import Link from 'next/link';
import { getAllAnimals } from '@/lib/data';
import SortControls from '@/components/shared/SortControls';

const AllanimalPage = async ({ searchParams }) => {
    const { sort } = await searchParams;
    const animals = await getAllAnimals();

    if (!animals) return <div>No animals found</div>;

    const sorted = [...animals].sort((a, b) => {
        if (sort === 'asc') return a.price - b.price;
        if (sort === 'desc') return b.price - a.price;
        return 0;
    });

    const categoryColor = {
        'Large Animal': 'badge-error',
        'Medium Animal': 'badge-warning',
        'Small Animal': 'badge-success',
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">All Animals</h1>
                <SortControls current={sort} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sorted.map((animal) => (
                    <div key={animal.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <div className="flex justify-between items-start">
                                <h2 className="card-title">{animal.name}</h2>
                                <span className={`badge ${categoryColor[animal.category] || 'badge-neutral'}`}>
                                    {animal.category}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{animal.breed} - {animal.type}</p>
                            <p className="text-sm"><span className="font-semibold">Location:</span> {animal.location}</p>
                            <p className="text-sm"><span className="font-semibold">Age:</span> {animal.age} years</p>
                            <p className="text-sm"><span className="font-semibold">Weight:</span> {animal.weight} kg</p>
                            <p className="text-xl font-bold text-primary">৳{animal.price.toLocaleString()}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/animals/${animal.id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {sorted.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">No animals found</p>
                </div>
            )}
        </div>
    );
};

export default AllanimalPage;