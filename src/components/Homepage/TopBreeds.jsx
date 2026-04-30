import React from 'react';

const TopBreeds = () => {
  const breeds = [
    { name: "Deshi Cow", img: "https://i.ibb.co/3m9XqkL/deshi.jpg" },
    { name: "Sahiwal", img: "https://i.ibb.co/Qr6n9kP/sahiwal.jpg" },
    { name: "Black Bengal Goat", img: "https://i.ibb.co/z8J9ZxL/goat.jpg" },
    { name: "Brahman", img: "https://i.ibb.co/6y1z8bL/cow-banner.jpg" },
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Top Breeds
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {breeds.map((breed, index) => (
          <div key={index} className="bg-white rounded-xl shadow overflow-hidden">
            <img src={breed.img} alt={breed.name} className="h-40 w-full object-cover" />
            <div className="p-4 text-center font-semibold">
              {breed.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;

