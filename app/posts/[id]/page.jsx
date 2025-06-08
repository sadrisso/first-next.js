import axios from "axios";
import React from "react";

export const getSinglePost = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res?.data;
};

export default async function PostDetails({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p?.id);
  return (
    <div className="min-h-screen">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl w-full mx-auto mt-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {singlePost.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {singlePost.body}
        </p>
      </div>
    </div>
  );
}
