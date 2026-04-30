import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={animal.image}
        alt={animal.name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold">{animal.name}</h3>
        <p className="text-gray-500">{animal.breed}</p>
        <p className="font-bold text-green-600">
          ৳ {animal.price}
        </p>

        <Link href={`/animal/${animal.id}`}>
          <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;