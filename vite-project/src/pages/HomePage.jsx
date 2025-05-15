// File: src/pages/HomePage.jsx
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Video Hintergrund */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/ddhshcdgo/video/upload/v1747233486/192779-893446888_online-video-cutter.com_ye96hi.mp4" type="video/mp4" />
        Dein Browser unterstützt kein Video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Inhalt */}
      <div className="relative z-20">
        <Header />
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Willkommen bei ATABUY
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Innovative Technologie- und Softwarelösungen für eine digitale Zukunft.
            </p>
            <Link to="/shop">
              <button className="bg-white text-black px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition">
                Zum Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
