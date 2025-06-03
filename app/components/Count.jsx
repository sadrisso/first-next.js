import React from "react";

export default function Count({ count, onIncrement, onDecrement, totalCount }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold">{count}</h1>
      <div className="flex gap-4">
        <button
          onClick={onIncrement}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition-all"
        >
          Increment
        </button>
        <button
          onClick={onDecrement}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition-all"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
