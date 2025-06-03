"use client";
import { useState } from "react";
import Count from "./components/Count";
import Stat from "./components/Stat";

const initialCounters = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
];

export default function Home() {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters?.reduce(
    (sum, current) => sum + current?.value,
    0
  );

  const handleIncrement = (id) => {
    const updatedCounter = counters?.map((counter) => {
      if (counter?.id === id) {
        return {
          ...counter,
          value: counter?.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  const handleDecrement = (id) => {
    const updatedCounter = counters?.map((counter) => {
      if (counter?.id === id) {
        return {
          ...counter,
          value: counter?.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-12 font-sans flex flex-col items-center gap-12">
      <main className="w-full max-w-4xl space-y-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {counters?.map((counter) => (
            <Count
              key={counter?.id}
              count={counter?.value}
              totalCount={totalCount}
              onIncrement={() => handleIncrement(counter?.id)}
              onDecrement={() => handleDecrement(counter?.id)}
            />
          ))}
        </div>
        <Stat totalCount={totalCount} />
      </main>
    </div>
  );
}
