import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Creative and responsive web design tailored to your brand and user experience.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Modern and scalable frontend development using React, Next.js, and TypeScript.",
    icon: "💻",
  },
  {
    id: 3,
    title: "UI/UX Consulting",
    description:
      "Improving your product’s user experience with professional design insights.",
    icon: "🧠",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Speed up your site and improve Core Web Vitals for better SEO and UX.",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description:
      "Ongoing updates, fixes, and enhancements to keep your site running smoothly.",
    icon: "🔧",
  },
];

export function generateMetadata({ params }) {
  // read route params
  const { id } = params;

  const service = services.find((s) => s?.id === parseInt(id));

  return {
    title: service?.title || "Service Not Found",
    description: service?.description || "No description available.",
  };
}

const ServiceDetailsPage = ({ params }) => {
  const id = parseInt(params?.id);

  const service = services.find((s) => s?.id === parseInt(id));

  return (
    <div className="min-h-screen flex justify-center items-center">
      {service ? (
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:shadow-lg hover:border-blue-500 transition-all duration-300">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
          <p className="text-gray-300 text-sm">{service.description}</p>
        </div>
      ) : (
        <p>Service Not Found</p>
      )}
    </div>
  );
};

export default ServiceDetailsPage;
