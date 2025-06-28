import axios from "axios";
import React from "react";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";

export const metadata = {
  title: "All Meals",
  description: "Multiple meals is here for you",
};

export default async function MealPage({ searchParams }) {
  const query = (await searchParams?.search) || "";

  let meals = [];

  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    console.log("Meals Data Response: ", res?.data?.meals);
    meals = res?.data?.meals || [];
  } catch (err) {
    console.log("Error in meals data: ", err);
  }

  return (
    <div>
      <div>
        <MealSearchInput />
      </div>

      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {meals?.map((singleMeal) => {
          return (
            <div
              key={singleMeal?.idMeal}
              className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                width={640}
                height={640}
                className="w-full md:w-[300px] object-cover"
                src={singleMeal?.strMealThumb}
                alt={singleMeal?.strMeal}
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {singleMeal?.strMeal}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Category:{" "}
                  <span className="font-semibold">
                    {singleMeal?.strCategory}
                  </span>{" "}
                  | Area:{" "}
                  <span className="font-semibold">{singleMeal?.strArea}</span>
                </p>

                {singleMeal?.strYoutube && (
                  <a
                    href={singleMeal?.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:underline text-sm"
                  >
                    ▶️ Watch Recipe on YouTube
                  </a>
                )}

                {singleMeal?.strSource && (
                  <a
                    href={singleMeal?.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 text-right text-blue-500 hover:underline text-xs"
                  >
                    View Full Recipe Source
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
