"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MealPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      console.log("Response: ", res?.data?.meals);
      setMeals(res?.data?.meals)
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return <div className="min-h-screen">{meals?.length}</div>;
}
