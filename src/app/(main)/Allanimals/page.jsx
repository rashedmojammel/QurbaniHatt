import React, { Suspense } from 'react';
import Link from 'next/link';
import { getAllAnimals } from '@/lib/data';
import SortControls from '@/components/shared/SortControl';
import { FaLocationArrow } from 'react-icons/fa';

const AllanimalPage = async ({ searchParams }) => {
  const params = await searchParams; // Next.js 15 requires await
const sort = params?.sort;

  const animals = await getAllAnimals();

  if (!animals) return <div className="text-center py-10">No animals found</div>;

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
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">All Animals</h1>
          <p className="text-gray-500 mt-1">Find the perfect animal for you</p>
           {/* <Suspense fallback={<div className="btn">Sort by Price</div>}>
                    <SortControls />
                </Suspense> */}
        </div>
        <SortControls current={sort} />
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sorted.map((animal) => (
          <div
            key={animal.id}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-base-100 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Category Badge */}
              <span
                className={`badge absolute top-3 right-3 ${categoryColor[animal.category] || 'badge-neutral'}`}
              >
                {animal.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {animal.name}
              </h2>

              <p className="text-sm text-gray-500">
                {animal.breed} • {animal.type}
              </p>

              {/* Info */}
              <div className="text-sm text-gray-600 space-y-1">
                <p><FaLocationArrow></FaLocationArrow> {animal.location}</p>
                <p>Age : {animal.age} yrs • Weight : {animal.weight} kg</p>
              </div>

              
              <div className="flex items-center justify-between pt-2">
                <span className="text-xl font-bold text-primary">
                  ৳{animal.price.toLocaleString()}
                </span>

                <Link href={`/animals/${animal.id}`}>
                  <button className="btn btn-sm btn-primary rounded-full px-4">
                    View →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold">No animals found</h2>
          <p className="text-gray-500">Try changing sort options</p>
        </div>
      )}
    </div>
  );
};

export default AllanimalPage;