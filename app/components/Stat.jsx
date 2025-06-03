import React from "react";

export default function Stat({ totalCount }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-gray-800 border border-gray-700 rounded-xl p-6 text-center shadow-lg">
      <h2 className="text-lg text-gray-400 mb-2">Total Count</h2>
      <p className="text-5xl font-bold text-white">{totalCount}</p>
    </div>
  );
}
