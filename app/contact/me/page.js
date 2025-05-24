"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ContactMe = () => {
  const router = useRouter();
  const isLoggedIn = true;

  const handleSubmit = () => {
    if (isLoggedIn) {
      router.push("/contact/me/more")
    } else {
      router.push("/")
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center text-red-500">
      <p> Please mail to this address to reach me sadrisso2000@gmail.com</p>
      <button type="button" className="text-blue-500" onClick={handleSubmit}>
        about page
      </button>
    </div>
  );
};

export default ContactMe;
