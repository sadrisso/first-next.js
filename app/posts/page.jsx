import axios from "axios";
import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res?.data;
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {posts?.map((post) => {
        return (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-6 max-w-md w-full hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {post?.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{post?.body}</p>
            <Link href={`/posts/${post?.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}
