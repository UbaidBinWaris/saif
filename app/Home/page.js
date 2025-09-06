"use client";
import React from 'react';
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Welcome to GIXI AI Solutions - Home Page
          </h1>
          <p className="text-xl text-center text-gray-600 mt-4">
            Your content goes here...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;