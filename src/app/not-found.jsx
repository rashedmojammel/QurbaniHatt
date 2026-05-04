"use client";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>
      
      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Image */}
      <img
        src="https://i.ibb.co/2kR7z4M/404-error.png"
        alt="Not Found"
        className="w-72 mb-6"
      />

      {/* Button */}
      <Link href="/">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Notfound;