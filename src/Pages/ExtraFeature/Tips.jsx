import React from "react";

const Tips = () => {
  const tipsData = [
    {
      title: "Plant at the Right Time",
      description:
        "Choose the proper planting time based on the crop type. This increases yield and crop quality.",
      icon: "🌱",
    },
    {
      title: "Test the Soil",
      description:
        "Check the soil's pH and nutrient content. Proper fertilization and nutrition management keep crops healthy.",
      icon: "🧪",
    },
    {
      title: "Manage Irrigation",
      description:
        "Provide the right amount of water at the right time for each crop. Too much or too little water can harm the plants.",
      icon: "💧",
    },
    {
      title: "Use Natural Pest Control",
      description:
        "Use natural methods instead of chemicals. It is safe for the crops and environment-friendly.",
      icon: "🐞",
    },
    {
      title: "Maintain Crop Density",
      description:
        "Proper spacing reduces disease and pest problems, ensuring better crop growth.",
      icon: "🌾",
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-green-800 text-center">
        Agriculture Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipsData.map((tip, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="text-5xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
