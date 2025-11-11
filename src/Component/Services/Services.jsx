import React from "react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Planting",
      description:
        "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="text-green-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C6.9 0 6 0.9 6 2s0.9 2 2 2 2-0.9 2-2S9.1 0 8 0zM2 14s1-1 6-1 6 1 6 1H2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Irrigation",
      description:
        "Efficient water supply system for better crop growth and yield.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="text-blue-500"
          viewBox="0 0 16 16"
        >
          <path d="M2 2h12v12H2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Harvesting",
      description:
        "Timely collection of crops to ensure maximum freshness and quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="text-yellow-500"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="6" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Packaging",
      description:
        "Safe and hygienic packaging to preserve freshness and taste.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="text-green-500"
          viewBox="0 0 16 16"
        >
          <path d="M1 1h14v14H1z" />
        </svg>
      ),
    },
  ];
  return (
    <div>
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Providing fresh produce every single day
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
