import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="bg-gray-800 shadow-md py-4">
        <ul className="flex justify-center gap-6 text-lg font-medium">
          <li>
            <Link
              href="/contact/email"
              className="hover:text-blue-400 transition duration-200"
            >
              Email
            </Link>
          </li>
          <li>
            <Link
              href="/contact/phone"
              className="hover:text-blue-400 transition duration-200"
            >
              Phone
            </Link>
          </li>
        </ul>
      </nav>

      <main className="px-4 py-8">{children}</main>
    </div>
  );
};

export default layout;
