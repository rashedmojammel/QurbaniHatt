import React from 'react';

const TipsSection = () => {
   const tips = [
    "Choose a healthy animal with clear eyes and active behavior",
    "Avoid animals with visible illness or injury",
    "Check teeth to estimate age properly",
    "Ensure proper feeding before Qurbani",
  ];

  return (
    <div className="bg-green-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Qurbani Tips
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            ✅ {tip}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TipsSection;