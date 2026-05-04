import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Price Badge */}
        <span className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
          ৳ {animal.price.toLocaleString()}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors">
          {animal.name}
        </h3>

        {/* Breed */}
        <p className="text-sm text-gray-500">
          {animal.breed} • {animal.type}
        </p>

        {/* Extra Info */}
        <div className="text-sm text-gray-600">
          <p>📍 {animal.location}</p>
          <p>Age: {animal.age} yrs • Weight: {animal.weight} kg</p>
        </div>

        {/* Button */}
        <Link href={`/animals/${animal.id}`}>
          <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition-all duration-300 font-medium">
            View Details →
          </button>
        </Link>

      </div>
    </div>
  );
};

export default AnimalCard;