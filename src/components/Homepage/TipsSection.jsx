import React from 'react';
import { SiTicktick } from 'react-icons/si';

const TipsSection = () => {
  const tips = [
    "Choose a healthy animal with clear eyes and active behavior",
    "Avoid animals with visible illness or injury",
    "Check teeth to estimate age properly",
    "Ensure proper feeding before Qurbani",
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
        Qurbani Tips 🐄
      </h2>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-green-500"
          >
            <div className="text-green-500 text-xl"><SiTicktick /></div>
            <p className="text-gray-700">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsSection;