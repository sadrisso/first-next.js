"use client";
import Count from "./components/Count";
import Stat from "./components/Stat";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";


export default function Home() {
  const counters = useSelector((state) => state?.counters)
  const dispatch = useDispatch();

  const totalCount = counters?.reduce(
    (sum, current) => sum + current?.value,
    0
  );

  const handleIncrement = (id) => {
    dispatch(increment(id))
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id))
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
