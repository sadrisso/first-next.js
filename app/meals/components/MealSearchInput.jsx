"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MealSearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);

  return (
    <div className="flex justify-center p-5">
      <input
        className="p-2"
        type="search"
        name="meals"
        id=""
        placeholder="Search Meal"
        onChange={(e) => setSearch(e?.target?.value)}
      />
    </div>
  );
}
