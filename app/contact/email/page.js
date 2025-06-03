"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ContactMe = () => {
  const router = useRouter();
  const isLoggedIn = true;

  const handleSubmit = () => {
    if (isLoggedIn) {
      router.push("/contact/me/more");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6 py-12">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl w-full text-white text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300">
          Feel free to reach out via email anytime at
          <span className="block font-medium text-blue-400 mt-2">
            sadrisso2000@gmail.com
          </span>
        </p>
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Go to About Page
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
