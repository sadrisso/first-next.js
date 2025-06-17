import React from "react";

export const metadata = {
  title: "About Page",
  description: "please learn about us to get our services"
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20 sm:px-10 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          About Us
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Welcome to our platform! We are passionate developers committed to
          building clean, efficient, and user-friendly web experiences. Whether
          its a small business or a large-scale app, we focus on quality and
          simplicity.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-400">
              Our Mission
            </h3>
            <p className="text-gray-300">
              To empower people and businesses by delivering intuitive,
              scalable, and high-performance web solutions.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2 text-pink-400">
              What We Do
            </h3>
            <p className="text-gray-300">
              From frontend design to backend development, we specialize in
              full-stack applications using modern frameworks like React,
              Next.js, Node.js, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
