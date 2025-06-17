import Link from "next/link";
import React from "react";

export const metadata = {
  title: "All Services",
  description: "Multiple IT services is here for you"
}

const Services = () => {
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

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="transform transition-transform hover:scale-[1.03]"
          >
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:shadow-lg hover:border-blue-500 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
