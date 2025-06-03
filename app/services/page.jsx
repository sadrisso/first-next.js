import Link from "next/link";
import React from "react";

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 min-h-screen justify-center items-center">
      {services?.map((service) => {
        return (
          <Link key={service?.id} href={`/services/${service?.id}`}>
            <div className="border">
              <h2>{service?.id}</h2>
              <p>{service?.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Services;
