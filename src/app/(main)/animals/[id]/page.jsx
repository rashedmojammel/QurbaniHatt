import React from 'react';
import Link from 'next/link';
import { getAllAnimals } from '@/lib/data';

const AnimalDetailsPage = async ({ params }) => {
    const { id } = await params;
    const animals = await getAllAnimals();
    const animal = animals.find((a) => a.id === parseInt(id));

    if (!animal) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-red-500 text-xl">Animal not found</p>
                <Link href="/Allanimals" className="btn btn-primary">Back to All Animals</Link>
            </div>
        );
    }

    const categoryColor = {
        'Large Animal': 'badge-error',
        'Medium Animal': 'badge-warning',
        'Small Animal': 'badge-success',
    };

    return (
        <div className="container mx-auto px-4 py-10 max-w-5xl">
            <div className="mb-6">
                <Link href="/Allanimals" className="btn btn-outline btn-sm">
                    ← Back to All Animals
                </Link>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden">
                <figure className="lg:w-1/2">
                    <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-72 lg:h-full object-cover"
                    />
                </figure>

                <div className="card-body lg:w-1/2 gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                            <h1 className="text-3xl font-bold">{animal.name}</h1>
                            <p className="text-gray-500 text-sm mt-1">{animal.breed} · {animal.type}</p>
                        </div>
                        <span className={`badge badge-lg ${categoryColor[animal.category] || 'badge-neutral'}`}>
                            {animal.category}
                        </span>
                    </div>

                    <div className="bg-primary/10 rounded-xl px-5 py-3 w-fit">
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-3xl font-extrabold text-primary">
                            ৳{animal.price.toLocaleString()}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="stat bg-base-200 rounded-xl p-3">
                            <div className="stat-title text-xs">Age</div>
                            <div className="stat-value text-lg">{animal.age} yrs</div>
                        </div>
                        <div className="stat bg-base-200 rounded-xl p-3">
                            <div className="stat-title text-xs">Weight</div>
                            <div className="stat-value text-lg">{animal.weight} kg</div>
                        </div>
                        <div className="stat bg-base-200 rounded-xl p-3">
                            <div className="stat-title text-xs">Type</div>
                            <div className="stat-value text-lg">{animal.type}</div>
                        </div>
                        <div className="stat bg-base-200 rounded-xl p-3">
                            <div className="stat-title text-xs">Location</div>
                            <div className="stat-value text-lg">{animal.location}</div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-base mb-1">Description</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">{animal.description}</p>
                    </div>

                    <div className="card-actions mt-2 flex gap-3 flex-wrap">
                        <Link href={`/bookform?id=${animal.id}`} className='btn btn-outline flex-1'>🛒 Book Now</Link>
                        <button className="btn btn-outline flex-1">📞 Contact Seller</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailsPage;